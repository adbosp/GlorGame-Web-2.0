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
  const navigate = useNavigate(); // ✅ ĐÚNG CHỖ

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

  /* ================= SCROLL SPY (SAFE ATTACH) ================= */
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
      }, 100);
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
      <div
        className={`pointer-events-auto
          transition-all duration-300 ease-in-out
          ${
            isScrolled
              ? "bg-white/15 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
              : "bg-white/10 backdrop-blur-lg"
          }
          ${
            isMenuOpen
              ? "rounded-3xl md:rounded-full"
              : "rounded-full"
          }
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
              src="https://res.cloudinary.com/dk7hsdijn/image/upload/c_thumb,w_200,g_face/v1741444897/Logo_dxl23c.png"
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

            {/* OUR GAMES */}
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
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-4 pt-2 space-y-3">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`block w-full text-left text-sm font-medium ${
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
              className={`block w-full text-left text-sm font-medium ${
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
    </nav>
  );



}
