"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Animate = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="flex flex-col h-screen">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 2 }}
            whileHover={{ scale: 1.1, cursor: "pointer" }}
          >
            Hello
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
};
