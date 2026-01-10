import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    title: "A New Pet World Begins",
    description: "SundayBaby is our first step into the world of virtual pets.",
    image:
      "https://ik.imagekit.io/qxqjfbhle/Gemini_Generated_Image_j2mq34j2mq34j2mq.png",
  },
  {
    id: "2",
    title: "Built by a Small Studio",
    description: "Crafted with passion by a team that loves pet games.",
    image:
      "https://ik.imagekit.io/qxqjfbhle/ChatGPT%20Image%2021_10_23%205%20thg%201,%202026.png",
  },
  {
    id: "3",
    title: "Designed for Everyday Joy",
    description: "Short moments of happiness, anytime you open the game.",
    image:
      "https://ik.imagekit.io/qxqjfbhle/ChatGPT%20Image%2021_03_17%205%20thg%201,%202026.png",
  },
  {
    id: "4",
    title: "The Road Ahead",
    description: "We’re just getting started on this pet adventure.",
    image:
      "https://ik.imagekit.io/qxqjfbhle/IconlogoSunday.png?updatedAt=1767406321134",
  },
];

/* ================= COMPONENT ================= */
export function NewsSection() {
  return (
    <section className="absolute left-0 right-0 bottom-[-140px] z-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="
            flex
            gap-6 md:gap-8
            md:justify-center

            overflow-x-auto
            md:overflow-visible

            snap-x snap-mandatory
            md:snap-none

            scroll-smooth
            overscroll-x-contain

            pb-4
          "
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {NEWS.map((item) => (
            <div
              key={item.id}
              className="
              snap-center
              flex justify-center

              shrink-0
              w-full
              sm:w-[85%]

              md:shrink
              md:flex-1
              md:min-w-0
            "
            >
              <NewsCard item={item} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ================= CARD (SAME FILE) ================= */
function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link
      to={`/news/${item.id}`}
      className="
        block
        w-full
        max-w-[360px]
        md:max-w-[220px]
        lg:max-w-[260px]
        xl:max-w-[300px]
        rounded-2xl
        overflow-hidden
        bg-black
        shadow-[0_25px_60px_rgba(0,0,0,0.7)]
        group
        transition-transform duration-300
        hover:-translate-y-2
      "
    >
      <div className="relative h-56 overflow-hidden pointer-events-none">
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

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <h4 className="text-white text-lg font-semibold mb-3">
            {item.title}
          </h4>

          <span className="text-sm text-white/90 flex items-center gap-2">
            Read More →
          </span>
        </div>
      </div>
    </Link>
  );
}

