import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ================= TYPES ================= */
type NewsItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

/* ================= DATA ================= */
const NEWS: NewsItem[] = [
  {
    id: "1",
    title: "GLOR Studio Update",
    description: "We’re expanding our interactive game universe in 2025.",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1",
  },
  {
    id: "2",
    title: "New Game Prototype",
    description: "First look at our upcoming action-adventure title.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
  },
  {
    id: "3",
    title: "Tech & Tools",
    description: "How we build scalable game systems with modern tech.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    id: "4",
    title: "We’re Hiring",
    description: "Join our team of artists & engineers building new worlds.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
];

/* ================= CONSTANTS ================= */
const CARD_WIDTH = 340;
const AUTO_DELAY = 6000;
const USER_COOLDOWN = 60_000; // 60 giây

/* ================= COMPONENT ================= */
export function NewsSection() {
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  const lastInteractionRef = useRef<number>(0);
  const autoTimerRef = useRef<NodeJS.Timeout | null>(null);

  const LOOP_NEWS = [...NEWS, ...NEWS];
  const MAX_INDEX = NEWS.length;

  /* ================= HELPER ================= */
  const markUserInteraction = () => {
    lastInteractionRef.current = Date.now();
  };

  /* ================= AUTO PLAY (SMART) ================= */
  useEffect(() => {
    autoTimerRef.current = setInterval(() => {
      const now = Date.now();

      // Nếu người dùng vừa tương tác → không auto
      if (now - lastInteractionRef.current < USER_COOLDOWN) {
        return;
      }

      setIndex((prev) => (prev + 1) % MAX_INDEX);
    }, AUTO_DELAY);

    return () => {
      if (autoTimerRef.current) {
        clearInterval(autoTimerRef.current);
      }
    };
  }, []);

  /* ================= SYNC OFFSET ================= */
  useEffect(() => {
    setOffset(index * CARD_WIDTH);
  }, [index]);

  return (
    <section className="relative bg-black py-20 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.18),_transparent_70%)]
          blur-[140px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <h3 className="text-3xl md:text-4xl font-bold mb-10 text-white">
          Latest Updates
        </h3>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: -CARD_WIDTH * MAX_INDEX, right: 0 }}
            dragElastic={0.08}
            onDragStart={markUserInteraction}
            onDragEnd={(_, info) => {
              markUserInteraction();
              const nextIndex = Math.round(
                Math.abs(info.point.x) / CARD_WIDTH
              );
              setIndex(nextIndex % MAX_INDEX);
            }}
            animate={{ x: -offset }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
          >
            {LOOP_NEWS.map((item, i) => (
              <NewsCard
                key={i}
                item={item}
                onInteract={markUserInteraction}
              />
            ))}
          </motion.div>
        </div>

        {/* DOT NAVIGATION */}
        <div className="flex justify-center gap-3 mt-8">
          {NEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                markUserInteraction();
                setIndex(i);
              }}
              className={`
                w-3 h-3 rounded-full transition-all
                ${
                  index === i
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/70"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */
function NewsCard({
  item,
  onInteract,
}: {
  item: NewsItem;
  onInteract: () => void;
}) {
  return (
    <div
      onMouseEnter={onInteract}
      onClick={onInteract}
      className="
        min-w-[320px] max-w-[320px]
        bg-white/10 backdrop-blur-xl
        border border-white/20
        rounded-2xl overflow-hidden
        shadow-[0_10px_30px_rgba(0,0,0,0.35)]
        card-hover
        cursor-pointer
      "
    >
      {/* IMAGE */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="
            w-full h-full object-cover
            scale-105 hover:scale-110
            transition-transform duration-500
          "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h4 className="text-lg font-semibold mb-2 text-white">
          {item.title}
        </h4>
        <p className="text-sm text-gray-300 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}
