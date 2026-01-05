import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="
          fixed bottom-0 left-0 right-0
          z-[100]
          backdrop-blur-xl
          bg-white/70 dark:bg-black/60
          border-t border-white/30 dark:border-white/10
        "
      >
        <div
          className="
            max-w-7xl mx-auto
            px-6 py-4
            flex flex-col md:flex-row
            items-start md:items-center
            justify-between
            gap-4
          "
        >
          {/* TEXT */}
          <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed max-w-3xl">
            We use cookies to make our site work. We’d also like to set analytics
            cookies to help us improve our website by collecting and reporting
            information on how you use it.{" "}
            <a
              href="/privacy-policy"
              className="text-orange-500 underline ml-1"
            >
              Learn more
            </a>
          </p>

          {/* ACTIONS */}
          <div className="flex gap-3 shrink-0">
            <button
              onClick={decline}
              className="
                px-5 py-2 text-sm
                rounded-md
                border border-gray-400/40
                text-gray-800 dark:text-gray-200
                hover:bg-black/5 dark:hover:bg-white/10
                transition
              "
            >
              DECLINE
            </button>

            <button
              onClick={accept}
              className="
                px-5 py-2 text-sm
                rounded-md
                bg-orange-500 text-white
                hover:bg-orange-600
                transition
              "
            >
              ACCEPT
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
