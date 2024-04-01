"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

const options = [
  {
    name: "Vectors",
    link: "/vectors",
    color: "#A9D1DE",
    bg: `bg-[#A9D1DE]`,
    hover: `hover:bg-[#A9D1DE]`,
  },
  {
    name: "Tangents",
    link: "/tangents",
    color: "#DABAE6",
    bg: "bg-[#DABAE6]",
    hover: "hover:bg-[#DABAE6]",
  },
  {
    name: "Units",
    link: "/units",
    color: "#E9B1C8",
    bg: "bg-[#E9B1C8]",
    hover: "hover:bg-[#E9B1C8]",
  },
  {
    name: "Rays",
    link: "/rays",
    color: "#B7D2AE",
    bg: "bg-[#B7D2AE]",
    hover: "hover:bg-[#B7D2AE]",
  },
];

export const NavBar = () => {
  const [active, setActive] = useState(false);
  const [route, setRoute] = useState<any>();
  const container = useRef<any>();
  const navBoxRef = useRef<any>();

  const { contextSafe } = useGSAP({ scope: container });

  const onArrowClick = contextSafe(() => {
    setActive(!active);
    if (active) {
      gsap
        .timeline()
        .to(".arrow__container", { height: "2" })
        .to(".arrow", { rotate: "+=180" })
        .to(".arrow__container", { height: "auto", delay: 0.2 })
        .to(".arrow__container__main", { marginLeft: "auto", marginRight: 0 })
        .to(".options", {
          width: "0",
          padding: "0",
          transformOrigin: "right center",
        })
        .to(".options", { height: 0 });
    } else {
      gsap
        .timeline()
        .to(".arrow__container", { height: "2" })
        .to(".arrow", { rotate: "+=180" })
        .to(".options", { height: "auto" })
        .to(".arrow__container", { height: "auto", delay: 0.2 })
        .to(".arrow__container__main", { marginRight: "auto", marginLeft: 0 })
        .to(".options", {
          width: "410",
          padding: "6",
          transformOrigin: "left center",
        });
    }
  });

  useGSAP(
    () => {
      if (route)
        gsap
          .timeline()
          .to(".navBox", { display: "grid" })
          .to(".navBox .box", {
            width: "100%",
            height: "100%",
            "--tw-bg-opacity": 0.5,
          })
          .to(".navBox .box", { "--tw-bg-opacity": 1 })
          .to(".navBox h1", { opacity: 1, scale: 1 })
          .to(".navBox h1", { opacity: 0, scale: 0, delay: 1 })
          .to(".navBox .box", { "--tw-bg-opacity": 0.5 })
          .to(".navBox .box", {
            width: "0%",
            height: "0%",
            "--tw-bg-opacity": 0.5,
          })
          .to(".navBox", { display: "none" });
    },
    { dependencies: [route], scope: navBoxRef }
  );

  return (
    <>
      <div className="fixed z-40 top-5 md:top-8 left-5 md:left-8 flex items-center cursor-pointer">
        <img
          src="/next.svg"
          className="h-20 md:h-24 2xl::h-28 relative"
          alt=""
        />
      </div>
      <div className="px-5 md:px-0">
        <div
          className={
            "flex items-center justify-between mt-8 md:mt-10 py-0 md:py-0 md:px-8 fixed right-4 md:right-0 z-40 bg-[#202020B2] md:bg-transparent rounded-2xl " +
            (active ? "left-4 md:left-auto" : "")
          }
          style={{ maxWidth: window.innerWidth - 30 }}
        >
          <div className=""></div>
          <div
            ref={container}
            className="flex flex-col md:flex-row items-center py-1 md:gap-3 w-full"
          >
            <div
              onClick={() => onArrowClick()}
              className={
                "md:bg-[#202020B2] cursor-pointer py-3 px-4 h-10 md:h-12 rounded-2xl grid place-items-center arrow__container__main md:w-max ml-auto "
              }
            >
              <div className="flex justify-center items-center h-5 md:h-6 overflow-hidden arrow__container">
                <svg
                  className="h-5 md:h-6 arrow"
                  viewBox="0 0 83 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.634125 14.0477C-0.146919 14.8287 -0.146919 16.0951 0.634125 16.8761L13.362 29.604C14.1431 30.3851 15.4094 30.3851 16.1905 29.604C16.9715 28.823 16.9715 27.5567 16.1905 26.7756L4.87677 15.4619L16.1905 4.14821C16.9715 3.36716 16.9715 2.10083 16.1905 1.31978C15.4094 0.53873 14.1431 0.53873 13.362 1.31978L0.634125 14.0477ZM82.0483 13.4619L2.04834 13.4619V17.4619L82.0483 17.4619V13.4619Z"
                    fill="#CECECE"
                  />
                </svg>
              </div>
            </div>
            <div className="h-0 md:h-12 md:bg-[#202020B2] p-0 rounded-2xl flex flex-col md:flex-row items-center gap-5 md:gap-3 options w-0 overflow-hidden">
              {options.map(({ name, color, link, hover, bg }) => (
                <div
                  onClick={() => {
                    onArrowClick();
                    setRoute({
                      name,
                      link,
                    });
                  }}
                  key={name}
                  className={`py-1 px-3 rounded-xl text-lg italic text-bl option min-w-max ${hover} ${
                    window.location.pathname == link ? bg : "bg-transparent"
                  } hover:!text-black cursor-pointer`}
                  style={{
                    color: window.location.pathname == link ? "#202020" : color,
                  }}
                >
                  <h1>{name}</h1>
                </div>
              ))}
            </div>
            <div ref={navBoxRef}>
              <div className="fixed inset-0 z-50 navBox hidden place-items-center">
                <h1 className="text-white text-center text-5xl md:text-[140px] 2xl:text-[170px] font-bold capitalize relative z-10 opacity-0 transform scale-75">
                  {route?.name}
                </h1>
                <div className="box absolute top-0 right-0 bg-[#202020] w-0 h-0"></div>
                <div className="box absolute top-0 left-0 bg-[#202020] w-0 h-0"></div>
                <div className="box absolute bottom-0 right-0 bg-[#202020] w-0 h-0"></div>
                <div className="box absolute bottom-0 left-0 bg-[#202020] w-0 h-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
