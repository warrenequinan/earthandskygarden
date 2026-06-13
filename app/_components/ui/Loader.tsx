"use client";
import Image from "next/image";
import { motion } from "motion/react";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ y: [0, -12, 0], opacity: 1 }}
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
