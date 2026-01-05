import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { motion } from "framer-motion";
import { aboutCollection } from "../types";
import { InteractiveBackground } from "../components/InteractiveBackground";
import { Floating3DItems } from "../components/Floating3DItems";

export function AboutSection() {
  const [aboutInfo, setAboutInfo] = useState("");

  useEffect(() => {
    const fetchAbout = async () => {
      const snap = await getDocs(collection(db, "about"));
      const data = snap.docs[0]?.data() as aboutCollection;
      setAboutInfo(data?.description ?? "");
    };
    fetchAbout();
  }, []);

  return (
    <section
      id="about"
      className="relative pt-36 pb-36 overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 z-0">
        <InteractiveBackground />
        <Floating3DItems />
      </div>

      {/* ===== CONTENT WRAPPER ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          relative
          z-10
          max-w-5xl
          mx-auto
          px-6
          text-center
        "
      >
        {/* ===== GLASS PANEL (ONLY BEHIND TEXT) ===== */}
        <div
          className="
            absolute
            inset-[-32px]
            rounded-3xl

            backdrop-blur-xl
            bg-black/35

            z-[-1]
            pointer-events-none
          "
        />

        <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
          About our studio
        </p>

        <h2 className="text-6xl md:text-8xl font-bold mb-8 text-white">
          We build meaningful{" "}
          <span className="interactive-worlds inline-block">
            interactive worlds
          </span>
        </h2>

        <p className="text-lg md:text-2xl text-gray-300 leading-relaxed">
          {aboutInfo || "Loading..."}
        </p>
      </motion.div>
    </section>
  );
}
