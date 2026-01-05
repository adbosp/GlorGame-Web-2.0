import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../google-fonts.css";

/* ================= SECTION CONFIG (HOME ONLY) ================= */
const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
];

export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* ================= NAV BACKGROUND ================= */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= RESET WHEN LEAVING HOME ================= */
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
    } else {
      setActiveSection("home");
    }
  }, [location.pathname]);

  /* ================= SCROLL SPY ================= */
  useEffect(() => {
    if (location.pathname !== "/") return;

    let observer: IntersectionObserver | null = null;
    let rafId: number;

    const attachObserver = () => {
      const sections = SECTIONS
        .map((s) => document.getElementById(s.id))
        .filter(Boolean) as HTMLElement[];

      if (sections.length !== SECTIONS.length) {
        rafId = requestAnimationFrame(attachObserver);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((e) => e.isIntersecting);
          if (!visible.length) return;

          visible.sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );
          setActiveSection(visible[0].target.id);
        },
        {
          threshold: [0.2, 0.4, 0.6],
          rootMargin: "-30% 0px -45% 0px",
        }
      );

      sections.forEach((el) => observer!.observe(el));
    };

    rafId = requestAnimationFrame(attachObserver);

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [location.pathname]);

  /* ================= ACTIONS ================= */
  const scrollTo = (id: string) => {
    setIsMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 120);
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goToGames = () => {
    setIsMenuOpen(false);
    navigate("/games");
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      {/* ================= TOP GLASS BAR ================= */}
      <div
        className={`pointer-events-auto
          transition-all duration-300 ease-in-out
          ${
            isScrolled
              ? "bg-white/15 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
              : "bg-white/10 backdrop-blur-lg"
          }
          rounded-full
          border border-white/20
        `}
      >
        {/* TOP BAR */}
        <div className="flex items-center h-16 px-6 md:px-10 gap-10">
          {/* LOGO */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2"
          >
            <img
              src="https://res.cloudinary.com/dk7hsdijn/image/upload/v1767576939/Logo_xhvxkx.svg"
              alt="GLORGAMES"
              className="h-10 w-auto"
            />
            <span className="montserrat-uniquifier text-xl text-white">
              GLORGAMES
            </span>
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === s.id
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {s.label}
                {activeSection === s.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white/80 rounded-full" />
                )}
              </button>
            ))}

            <button
              onClick={goToGames}
              className={`relative text-sm font-medium transition-colors ${
                location.pathname === "/games"
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Our Games
              {location.pathname === "/games" && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white/80 rounded-full" />
              )}
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-white"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* ================= MOBILE LEFT GLASS DRAWER ================= */}
      {isMenuOpen && (
        <>
          {/* OVERLAY */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className="
              fixed inset-0 z-[998] md:hidden
              bg-black/40 backdrop-blur-sm
              pointer-events-auto
            "
          />
          {/* DRAWER */}
            <div
              className="
                fixed top-0 left-0 z-[999]
                h-full w-[75%] max-w-sm
                md:hidden
                backdrop-blur-xl
                border-r border-white/20
                shadow-[0_0_40px_rgba(0,0,0,0.45)]
                overflow-hidden
                pointer-events-auto
              "
            >
            {/* GLASS BACKPLATE */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-br
                from-white/25 via-white/10 to-white/5
              "
            />

            {/* CONTENT */}
            <div className="relative z-10">
              {/* HEADER */}
              <div className="flex items-center justify-between h-16 px-6 border-b border-white/20">
                <div className="flex items-center gap-2">
                  <img
                    src="https://res.cloudinary.com/dk7hsdijn/image/upload/v1767576939/Logo_xhvxkx.svg"
                    alt="GLORGAMES"
                    className="h-9 w-auto"
                  />
                  <span className="montserrat-uniquifier text-lg text-white">
                    GLORGAMES
                  </span>
                </div>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white"
                >
                  <X size={24} />
                </button>
              </div>

              {/* MENU */}
              <div className="flex flex-col gap-6 px-6 pt-10">
                {SECTIONS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`text-xl font-semibold transition ${
                      activeSection === s.id
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}

                <button
                  onClick={goToGames}
                  className={`text-xl font-semibold transition ${
                    location.pathname === "/games"
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Our Games
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
