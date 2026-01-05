import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AboutSection } from "../sections/AboutSection";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { HeroContent } from "../types";
import { NewsSection } from "../sections/NewsSection";

/* ================= PARTNERS DATA ================= */
const PARTNERS = [
  { name: "Unity", logo: "https://ik.imagekit.io/qxqjfbhle/Logo%20Brand/Official_unity_logo.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Meta", logo: "https://ik.imagekit.io/qxqjfbhle/Logo%20Brand/Meta_Platforms_Inc._logo.svg.svg" },
  { name: "Unreal Engine", logo: "https://ik.imagekit.io/qxqjfbhle/Logo%20Brand/Unreal%20Engine.svg" },
  { name: "Playfab", logo: "https://ik.imagekit.io/qxqjfbhle/Logo%20Brand/Playfab.svg" },
  { name: "AppLovin", logo: "https://ik.imagekit.io/qxqjfbhle/Logo%20Brand/AppLovin_logo.svg" },
];

export function Home() {
  const [heroContent, setHeroContent] = useState<HeroContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();

    const fetchHero = async () => {
      const snap = await getDocs(collection(db, "heroSection"));
      setHeroContent(snap.docs[0]?.data() as HeroContent);

      // ⏳ Giữ loading tối thiểu 1.2s
      const elapsed = Date.now() - startTime;
      const minDuration = 1200;

      setTimeout(() => {
        setLoading(false);
      }, Math.max(0, minDuration - elapsed));
    };

    fetchHero();
  }, []);

  return (
    <div className="bg-black text-white">
      {/* ================= LOADING ================= */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loading"
            initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(6px)" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
          >
            <iframe
              src="https://lottie.host/embed/f0738825-eff3-41c0-a3d6-91ea1a622a04/G8tC5MIvOQ.lottie"
              className="w-32 h-32"
              frameBorder="0"
              title="Loading animation"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= HERO ================= */}
      {heroContent && (
        <motion.section
          id="home"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            relative
            h-[85vh]
            min-h-[620px]
            pb-[260px]
            flex items-center justify-center
            after:content-['']
            after:absolute
            after:bottom-0
            after:left-0
            after:right-0
            after:h-32
            after:bg-gradient-to-t
            after:from-black
            after:to-transparent
          "
        >
          {/* VIDEO LAYER */}
          <div className="absolute inset-0 overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover scale-110"
            >
              <source src={heroContent.videoUrl} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          </div>

          {/* HERO CONTENT */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {heroContent.title}
            </h1>
            <p className="text-lg md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300">
              {heroContent.description}
            </p>

            <Link
              to="/games"
              className="
                group inline-flex items-center
                px-10 py-4 text-lg rounded-full
                text-white bg-white/10 backdrop-blur-md
                border border-white/20
                hover:bg-white/20 hover:border-white/30
                transition-all duration-300
              "
            >
              Learn more
              <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 🔥 NEWS OVERLAY – PHẢI Ở ĐÂY */}
          <NewsSection />
        </motion.section>
      )}

      {/* ================= PARTNERS + ABOUT ================= */}
      <section className="relative bg-black overflow-hidden">
        <div
          className="
            pointer-events-none
            absolute -top-[220px] left-1/2
            -translate-x-1/2
            w-[1400px] h-[900px]
            bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.25),_transparent_70%)]
            blur-[140px]
          "
        />
        {/* ================= ABOUT ================= */}
        <section
          id="about"
          className="
            relative
            min-h-screen
            flex
            items-center
            bg-black
          "
        >
          <div className="w-full">
            <AboutSection />
          </div>
        </section>
        {/* ================= PARTNERS ================= */}
        <section id="partners" className="relative pt-16 pb-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-10">
              Technology platforms & partners
            </p>

            <div className="relative overflow-hidden">
              <div className="marquee flex items-center gap-x-16">
                {PARTNERS.concat(PARTNERS).map((partner, index) => (
                  <div
                    key={index}
                    className="
                      flex items-center justify-center
                      w-[120px] h-[40px]
                      md:w-[160px] md:h-[48px]
                      flex-shrink-0
                    "
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="
                        max-h-full max-w-full object-contain
                        brightness-75 hover:brightness-100
                        grayscale hover:grayscale-0
                        transition-all duration-300
                      "
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
