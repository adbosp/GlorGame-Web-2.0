import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AboutSection } from "../sections/AboutSection";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { HeroContent } from "../types";
import loadingIcon from "../icon_Loading.gif";

/* ================= PARTNERS DATA ================= */
const PARTNERS = [
  { name: "Unity", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Official_unity_logo.png" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/960px-Meta_Platforms_Inc._logo.svg.png" },
  { name: "Unreal Engine", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Unreal_Engine_horizontal_logo.svg/250px-Unreal_Engine_horizontal_logo.svg.png" },
  { name: "Playfab", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVjTEYAZUH9QkyOe3rcQ2-Sek1zYTez6ThcQ&s" },
  { name: "AppLovin", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/AppLovin_logo.png" },
];

export function Home() {
  const [heroContent, setHeroContent] = useState<HeroContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHero = async () => {
      const snap = await getDocs(collection(db, "heroSection"));
      setHeroContent(snap.docs[0]?.data() as HeroContent);
      setLoading(false);
    };
    fetchHero();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <img src={loadingIcon} alt="Loading..." className="w-20 h-20" />
      </div>
    );
  }

  return (
    <div className="bg-black text-white">
      {/* ================= HERO ================= */}
      {heroContent && (
        <motion.section
          id="home"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-screen overflow-hidden"
        >
          <div className="absolute inset-0">
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
                  text-white
                  bg-white/10
                  backdrop-blur-md
                  border border-white/20
                  hover:bg-white/20
                  hover:border-white/30
                  transition-all duration-300
                "
              >
                Explore Our Games
                <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
          </div>
        </motion.section>
      )}

      {/* ================= PARTNERS + ABOUT (BACKGROUND CHUNG) ================= */}
      <section className="relative bg-black overflow-hidden">
        {/* CUNG BACKGROUND CONG CHUNG */}
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
                    className="flex items-center justify-center
                      w-[120px] h-[40px]
                      md:w-[160px] md:h-[48px]
                      flex-shrink-0"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="
                        max-h-full max-w-full object-contain
                        opacity-100 hover:opacity-150
                        brightness-70 hover:brightness-100
                        transition-all duration-300
                        grayscale hover:grayscale-0
                      "
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <AboutSection />
      </section>
    </div>
  );
}
