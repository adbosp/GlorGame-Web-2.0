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
    title: "How Millions Played, Stayed, and Shared",
    description: "SundayBaby continues to break records worldwide.",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?w=720&q=60&auto=format",
  },
  {
    id: "2",
    title: "1 Years of SundayBaby",
    description: "A classic icon returns stronger than ever.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=720&q=60&auto=format",
  },
  {
    id: "3",
    title: "A World of Imagination",
    description: "Expanding the SundayBaby universe.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=720&q=60&auto=format",
  },
  {
    id: "4",
    title: "A New Chapter",
    description: "What’s next for SundayBaby.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=720&q=60&auto=format",
  },
];

/* ================= COMPONENT ================= */
export function NewsSection() {
  return (
    <section
      className="
        absolute
        left-0 right-0
        bottom-[-140px]
        z-20
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex gap-8 justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {NEWS.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */
function NewsCard({ item }: { item: NewsItem }) {
  return (
    <div
      className="
        w-[390px]
        md:w-[360px]
        rounded-2xl
        overflow-hidden
        bg-black
        shadow-[0_25px_60px_rgba(0,0,0,0.7)]
        group
      "
    >
      {/* IMAGE + OVERLAY */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          draggable={false}
          className="
            w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* DARK GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        {/* CONTENT OVER IMAGE */}
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <h4 className="text-white text-lg font-semibold leading-snug mb-3">
            {item.title}
          </h4>

          <span className="text-sm text-white/90 flex items-center gap-2">
            Read More
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

