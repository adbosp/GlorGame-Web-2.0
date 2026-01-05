import { motion } from "framer-motion";

export function Floating3DItems() {
  const common =
    "absolute pointer-events-none drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]";

  // FLOAT PRESETS (khác pha nhau)
  const floatSlow = {
    y: [0, -14, 0],
    rotate: [0, 2, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const floatMid = {
    y: [0, -22, 0],
    rotate: [0, -3, 0],
    transition: {
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const floatFast = {
    y: [0, -30, 0],
    rotate: [0, 4, 0],
    transition: {
      duration: 11,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <>
      {/* ===== LEFT ===== */}
      <motion.img
        src="/shapes/1.svg"
        className={`${common} left-24 top-32 w-24`}
        animate={floatSlow}
      />

      <motion.img
        src="/shapes/2.svg"
        className={`${common} left-40 top-1/2 w-36`}
        animate={floatMid}
      />

      <motion.img
        src="/shapes/3.svg"
        className={`${common} left-20 bottom-20 w-20`}
        animate={floatFast}
      />

      {/* ===== RIGHT ===== */}
      <motion.img
        src="/shapes/6.svg"
        className={`${common} right-36 bottom-28 w-[512px] md:w-[512px]`}
        animate={{
          y: [0, -26, 0],
          rotate: [0, 3, 0],
          transition: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      <motion.img
        src="/shapes/5.svg"
        className={`${common} right-36 top-28 w-24`}
        animate={floatSlow}
      />

      <motion.img
        src="/shapes/4.svg"
        className={`${common} right-20 bottom-24 w-28`}
        animate={floatFast}
      />
    </>
  );
}
