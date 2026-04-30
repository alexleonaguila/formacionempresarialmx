import img4 from "../../imports/4.png";

const steps = [
  {
    n: "01",
    title: "Diagnóstico gratuito",
    desc: "Analizamos las necesidades específicas de liderazgo en tu empresa y giro industrial.",
  },
  {
    n: "02",
    title: "Programa personalizado",
    desc: "Te asignamos un plan de capacitación con módulos adaptados a tu industria y equipo.",
  },
  {
    n: "03",
    title: "Capacitación práctica",
    desc: "Sesiones dinámicas con instructores expertos, casos reales y talleres aplicados.",
  },
  {
    n: "04",
    title: "Impacto certificado",
    desc: "Medimos el impacto real y emitimos certificados con reconocimiento nacional.",
  },
];

export function HowItWorks() {
  return (
    <section id="metodologia" className="bg-[#0a0a0a] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Steps */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#c9a227]" />
              <span className="text-[#c9a227] tracking-[0.3em] uppercase" style={{ fontSize: "0.7rem" }}>
                Metodología
              </span>
            </div>

            <h2
              className="text-white uppercase mb-12 leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                letterSpacing: "0.03em",
              }}
            >
              De cero a líder
              <br />
              <span className="text-[#c9a227]">en 4 pasos</span>
            </h2>

            <div className="space-y-0">
              {steps.map((s, i) => (
                <div
                  key={s.n}
                  className="flex gap-6 pb-10 relative group"
                >
                  {/* Vertical line */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-[1.35rem] top-10 bottom-0 w-px bg-white/10 group-hover:bg-[#c9a227]/20 transition-colors duration-300" />
                  )}

                  {/* Number */}
                  <div className="shrink-0 w-11 h-11 border border-[#c9a227]/40 group-hover:border-[#c9a227] flex items-center justify-center transition-colors duration-300 relative z-10 bg-[#0a0a0a]">
                    <span
                      className="text-[#c9a227]"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.9rem", letterSpacing: "0.1em" }}
                    >
                      {s.n}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="pt-1.5">
                    <h3
                      className="text-white mb-1.5 group-hover:text-[#c9a227] transition-colors duration-300"
                      style={{ fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.02em" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center gap-3 bg-[#c9a227] hover:bg-[#e0b52b] text-black px-10 py-3.5 text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300 mt-2"
            >
              Comenzar ahora
            </a>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="absolute -top-6 -right-6 w-full h-full border border-[#c9a227]/20" />
            <div className="relative overflow-hidden" style={{ height: "540px" }}>
              <img src={img4} alt="Capacitación industrial" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
            </div>
            {/* Stat overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 flex gap-10">
              {[
                { n: "48", label: "Cursos activos" },
                { n: "12", label: "Industrias" },
                { n: "98%", label: "Satisfacción" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="text-[#c9a227]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.2rem", lineHeight: 1 }}
                  >
                    {s.n}
                  </p>
                  <p className="text-gray-400 text-xs tracking-widest uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
