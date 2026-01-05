import { useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

/* ================= TYPES ================= */
type NewsItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

/* ================= DATA (OPTIMIZED IMAGE) ================= */
const NEWS: NewsItem[] = [
  {
    id: "1",
    title: "How Millions Played, Stayed, and Shared",
    description: "Talking Tom & Friends continues to break records worldwide.",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?w=720&q=60&auto=format",
  },
  {
    id: "2",
    title: "15 Years of Talking Tom Cat",
    description: "A classic icon returns stronger than ever.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=720&q=60&auto=format",
  },
  {
    id: "3",
    title: "A World of Imagination",
    description: "Expanding the Talking Tom & Friends universe.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=720&q=60&auto=format",
  },
  {
    id: "4",
    title: "A New Chapter",
    description: "What’s next for Talking Tom & Friends.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=720&q=60&auto=format",
  },
];

/* ================= CONSTANTS ================= */
const CARD_WIDTH = 390;
const GAP = 32;
const STEP = CARD_WIDTH + GAP;

const COPIES = 3;
const TOTAL = NEWS.length * STEP;
const START_X = -TOTAL;

/* ================= SAFE RANGE ================= */
const SAFE_MIN = -TOTAL * 1.5;
const SAFE_MAX = -TOTAL * 0.5;

function wrapImmediately(x: number) {
  if (x < SAFE_MIN) return x + TOTAL;
  if (x > SAFE_MAX) return x - TOTAL;
  return x;
}

/* ================= COMPONENT ================= */
export function NewsSection() {
  const x = useMotionValue(START_X);

  useEffect(() => {
    x.set(START_X);

    let last = START_X;
    const unsub = x.on("change", (latest) => {
      const wrapped = wrapImmediately(latest);
      if (wrapped !== latest && wrapped !== last) {
        last = wrapped;
        x.set(wrapped);
      }
    });

    return () => unsub();
  }, []);

  return (
    <section
      className="
        absolute
        left-0 right-0
        bottom-[-140px]
        z-20
        pointer-events-auto
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="overflow-hidden">
          <motion.div
            className="
              flex gap-8
              cursor-grab active:cursor-grabbing
              select-none
            "
            style={{ x }}
            drag="x"
            dragElastic={0.08}
            dragMomentum={false}
            onDragEnd={(_, info) => {
              let target = x.get() + info.velocity.x * 0.25;
              target = Math.round(target / STEP) * STEP;

              animate(x, target, {
                type: "spring",
                stiffness: 260,
                damping: 32,
                mass: 0.8,
              });
            }}
          >
            {Array.from({ length: COPIES }).flatMap((_, c) =>
              NEWS.map((item, i) => (
                <NewsCard key={`${c}-${i}`} item={item} />
              ))
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */
function NewsCard({ item }: { item: NewsItem }) {
  return (
    <div
      className="
        min-w-[390px] max-w-[390px]
        md:min-w-[360px] md:max-w-[360px]
        rounded-2xl
        overflow-hidden
        bg-black/70
        backdrop-blur-xl
        shadow-[0_25px_60px_rgba(0,0,0,0.7)]
      "
    >
      {/* IMAGE */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h4 className="text-base font-semibold text-white mb-2 leading-snug">
          {item.title}
        </h4>
        <p className="text-sm text-gray-300">
          {item.description}
        </p>
      </div>
    </div>
  );
}
