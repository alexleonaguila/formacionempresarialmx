import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "../../img/logo.webp";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = () => {
    setIsOpen(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setIsVisible(true)));
    document.body.style.overflow = "hidden";
    if (navigator.vibrate) navigator.vibrate(10);
  };

  const closeMenu = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
      document.body.style.overflow = "";
    }, 500);
  };

  const links = [
    { label: "Inicio",      href: "#inicio",      num: "01" },
    { label: "Nosotros",    href: "#nosotros",    num: "02" },
    { label: "Cursos",      href: "#cursos",      num: "03" },
     { label: "Galería",      href: "#galeria",      num: "04" },
    { label: "Testimonios", href: "#testimonios", num: "05" },
    { label: "Contacto",    href: "#contacto",    num: "06" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-black/95 backdrop-blur-sm shadow-2xl" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-3 group relative z-[110]">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={logoImg} alt="Formación Empresarial" className="h-10" />
              </div>
              <div className="leading-none">
                <p
                  className="text-white tracking-[0.3em] uppercase"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", letterSpacing: "0.25em" }}
                >
                  Formación
                </p>
                <p className="text-[#c9a227] tracking-[0.5em] uppercase" style={{ fontSize: "0.55rem" }}>
                  Empresarial
                </p>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-gray-400 hover:text-[#c9a227] text-xs tracking-[0.15em] uppercase transition-colors duration-300 relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a227] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <a
                href="#contacto"
                className="border border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227] hover:text-black px-7 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-300 font-medium"
              >
                Inscríbete
              </a>
            </div>

            {/* Mobile hamburger toggle */}
            <button
              className="lg:hidden text-white relative z-[110] w-10 h-10 flex items-center justify-center"
              onClick={isOpen ? closeMenu : openMenu}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <span
                className={`absolute transition-all duration-300 ${
                  isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
                }`}
              >
                <Menu size={24} />
              </span>
              <span
                className={`absolute transition-all duration-300 ${
                  isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
                }`}
              >
                <X size={24} />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Fullscreen mobile overlay ── */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-[100] flex flex-col lg:hidden overflow-hidden transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Curtain background */}
          <div
            className={`absolute inset-0 bg-[#050505] transition-transform duration-500 ease-out origin-top ${
              isVisible ? "scale-y-100" : "scale-y-0"
            }`}
          />

          {/* Gold accent top */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a227] to-transparent" />

          {/* Nav links — centrados verticalmente */}
          <nav className="relative flex flex-col justify-center flex-1 px-8 pt-24 pb-8">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`flex items-baseline gap-5 group border-b border-white/5 py-4 transition-all duration-500 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 70 + 180}ms` }}
              >
                <span
                  className="text-[#c9a227]/35 font-mono select-none"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}
                >
                  {link.num}
                </span>
                <span
                  className="text-white group-hover:text-[#c9a227] transition-colors duration-300 uppercase flex-1"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(2.6rem, 11vw, 3.8rem)",
                    letterSpacing: "0.04em",
                    lineHeight: 1,
                  }}
                >
                  {link.label}
                </span>
                <span className="text-[#c9a227] text-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </a>
            ))}
          </nav>

          {/* Bottom tagline */}
          <div
            className={`relative px-8 pb-10 transition-all duration-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "550ms" }}
          >
            <div className="h-px bg-[#c9a227]/15 mb-5" />
            <p className="text-gray-600 text-[0.6rem] tracking-[0.3em] uppercase">
              Formación · Liderazgo · Cultura Organizacional
            </p>
          </div>
        </div>
      )}
    </>
  );
}
