"use client";

import React, { useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

export const ScrollAnimationComponent = () => {
  const { scrollY } = useScroll();
  const [imageString, setImageString] = useState<string>("assets/nav.png");

  const svgHeight = useTransform(scrollY, [0, 100], ["360px", "260px"]);
  const svgWidth = useTransform(scrollY, [0, 100], ["100vw", "60vw"]);

  const ulTop = useTransform(scrollY, [0, 100], ["8px", "-100px"]);

  const leftNav = useTransform(scrollY, [0, 100], ["0", "100vw"]);
  const rightNav = useTransform(scrollY, [0, 100], ["0", "100vw"]);
  const topNav = useTransform(scrollY, [0, 100], ["0px", "0px"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 50) {
      setImageString("assets/nav2.png");
    } else {
      setImageString("assets/nav.png");
    }
  });

  return (
    <motion.div className="sticky top-0 p-2">
      <div className="flex items-center justify-between gap-2">
        <img src="assets/diamond.png" alt="logo" className="h-14 w-[50px]" />
        <img src="assets/right.png" alt="logo" className="h-12 w-[260px]" />
      </div>
      <motion.div
        className="flex items-center justify-center flex-1"
        style={{
          width: svgWidth,
          height: svgHeight,
          marginLeft: leftNav,
          marginRight: rightNav,
          marginTop: topNav,
          backgroundImage: `url(${imageString})`,
        }}
      >
        <motion.div
          className="absolute right-[20vw] p-6"
          style={{
            top: ulTop,
          }}
        >
          <ul className="flex flex-1 space-x-6 text-[#171717]">
            <li>Home</li>
            <li>Industry Services</li>
            <li>Search</li>
          </ul>
        </motion.div>
        <div className="absolute w-full p-16">
          <div className="flex">
            <div className="w-[80vw] flex justify-start items-center gap-6">
              <img src="assets/diamond.png" alt="logo" className="h-28" />
              <div className="text-black">
                <p className="italic">Information technology</p>
                <p className="text-4xl font-medium">
                  Threadality Technologies India LLP
                </p>
                <p className="text-xl">Dubai, Dubai, UAE</p>
              </div>
            </div>
            <div className="w-[20vw]">
              <div className="flex items-center justify-center gap-2">
                <img src="assets/cube.png" alt="logo" className="h-16" />
                <div className="flex flex-col items-center text-black">
                  <p className="text-4xl font-medium">4.5</p>
                  <p>12.5k</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
