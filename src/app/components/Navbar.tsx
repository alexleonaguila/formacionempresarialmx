import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "../../img/logo.webp";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "INICIO", href: "#inicio" },
    { label: "CURSOS", href: "#cursos" },
    { label: "NOSOTROS", href: "#nosotros" },
    { label: "METODOLOGÍA", href: "#metodologia" },
    { label: "TESTIMONIOS", href: "#testimonios" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/95 backdrop-blur-sm shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border-2 border-[#c9a227] flex items-center justify-center">
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
                className="text-gray-400 hover:text-[#c9a227] text-xs tracking-[0.15em] transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a227] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="#contacto"
              className="border border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227] hover:text-black px-7 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-300 font-medium"
            >
              Inscríbete
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/98 border-t border-[#c9a227]/20">
          <div className="px-6 py-6 space-y-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-[#c9a227] text-sm tracking-[0.15em] uppercase transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center border border-[#c9a227] text-[#c9a227] py-3 text-sm tracking-[0.2em] uppercase mt-4"
            >
              Inscríbete
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
