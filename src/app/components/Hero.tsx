import { ArrowDown, Play } from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1765279162990-2812a7b1e5ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlcmZ1bCUyMGxlYWRlciUyMHNwZWFraW5nJTIwY3Jvd2QlMjBkYXJrJTIwZHJhbWF0aWN8ZW58MXx8fHwxNzc3NTYyMDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Liderazgo industrial"
          className="w-full h-full object-cover opacity-40"
          style={{ objectPosition: "center top" }}
        />
        {/* Multi-layer dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </div>

      {/* Gold top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c9a227] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-36 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-[#c9a227]" />
            <span
              className="text-[#c9a227] tracking-[0.35em] uppercase"
              style={{ fontSize: "0.7rem" }}
            >
              Liderazgo para cualquier sector empresarial
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="text-white mb-6 leading-none uppercase"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3.5rem, 10vw, 8rem)",
              letterSpacing: "0.03em",
              lineHeight: 0.95,
            }}
          >
            No diriges
            <br />
            <span className="text-[#c9a227]">una empresa.</span>
            <br />
            Diriges personas.
          </h1>

          {/* Subheadline */}
          <p
            className="text-gray-300 mb-10 max-w-xl leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", fontWeight: 300, letterSpacing: "0.02em" }}
          >
            Contamos con programas de formación, liderazgo y gestión de cambio y cultura organizacional adaptados al ADN de tu empresa. Sin importar el tamaño, transformamos la cultura de tu equipo para asegurar cada resultado.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#cursos"
              className="inline-flex items-center justify-center bg-[#c9a227] hover:bg-[#e0b52b] text-black px-10 py-4 text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300"
            >
              Descubre los cursos
            </a>
            <a
              href="#nosotros"
              className="inline-flex items-center justify-center gap-3 border border-white/30 hover:border-white text-white px-8 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-300"
            >
              <Play size={14} fill="currentColor" /> Ver nuestra historia
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10">
            {[
              { n: "Muchas", label: "Empresas formadas" },
              { n: "Todos", label: "Giros industriales" },
              { n: "98%", label: "Satisfacción" },
              { n: "15+", label: "Años de experiencia" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="text-white font-black"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.2rem", letterSpacing: "0.05em" }}
                >
                  {s.n}
                </p>
                <p className="text-gray-500 text-xs tracking-[0.15em] uppercase mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-white text-xs tracking-[0.2em] uppercase">Scroll</span>
        <ArrowDown size={16} className="text-[#c9a227] animate-bounce" />
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/40 to-transparent" />
    </section>
  );
}
