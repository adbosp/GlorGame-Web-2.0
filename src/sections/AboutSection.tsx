import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { motion } from "framer-motion";
import { aboutCollection } from "../types";

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
    <section id="about" className="relative pt-20 pb-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">
          About our studio
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
          We build meaningful{" "}
          <span className="interactive-worlds inline-block">
            Interactive Worlds
          </span>
        </h2>

        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          {aboutInfo || "Loading..."}
        </p>
      </motion.div>
    </section>
  );
}
