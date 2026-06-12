"use client";
import Image from "next/image";
import { motion } from "motion/react";

const Loader = () => {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 0.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative h-[60px] w-[100px]"
    >
      <Image src="/eas-cloud-logo.svg" alt="eas cloud logo" fill />
    </motion.div>
  );
};

export default Loader;
