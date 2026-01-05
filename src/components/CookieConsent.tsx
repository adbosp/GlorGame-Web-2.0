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

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="
          fixed bottom-0 left-0 right-0
          z-[100]
        "
      >
        {/* GLASS BACKGROUND (FULL WIDTH) */}
        <div
          className="
            backdrop-blur-xl
            bg-white/10 dark:bg-black/20
            border-t border-white/20 dark:border-white/10
          "
        >
          {/* CONTENT */}
          <div
            className="
              max-w-7xl mx-auto
              px-6 py-4
              flex items-center justify-between
              gap-6
            "
          >
            {/* TEXT */}
            <div className="max-w-3xl">
              <h4 className="text-sm font-semibold text-white mb-1">
                About cookies
              </h4>

              <p className="text-xs text-white/80 leading-relaxed">
                This website uses cookies for the display of the website and its
                features. Please see more information about cookies used in our{" "}
                <a
                  href="/cookie-policy"
                  className="underline text-white font-medium"
                >
                  Cookie Policy
                </a>
                .
              </p>
            </div>

            {/* ACTION */}
            <button
              onClick={accept}
              className="
                shrink-0
                flex items-center gap-2
                px-4 py-2
                rounded-full
                bg-black text-white
                text-sm font-medium
                hover:bg-black/90
                transition
              "
            >
              Ok
              <span className="text-base leading-none">✓</span>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
