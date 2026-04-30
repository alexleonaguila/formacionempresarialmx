import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendoza",
    role: "Gerente General · Metálicos del Norte S.A.",
    sector: "Manufactura",
    rating: 5,
    quote:
      "El curso de liderazgo en planta transformó completamente cómo mis supervisores gestionan a sus equipos. En 3 meses redujimos el ausentismo en un 35% y subió la productividad notablemente.",
    avatar: "CM",
  },
  {
    id: 2,
    name: "Laura Jiménez",
    role: "Directora de Operaciones · Distribuidora Jiménez Hnos.",
    sector: "Retail",
    rating: 5,
    quote:
      "Pensé que era difícil capacitar a gente con poca experiencia formal, pero Minilista Industrial tiene un método muy práctico. Mi equipo aprendió con ejemplos de su propio trabajo. Fue increíble el cambio.",
    avatar: "LJ",
  },
  {
    id: 3,
    name: "Ricardo Torres",
    role: "Propietario · Constructora Torres & Asociados",
    sector: "Construcción",
    rating: 5,
    quote:
      "Como empresa de construcción, pensé que los cursos de liderazgo no eran para nosotros. Me equivoqué completamente. El contenido está muy aterrizado al mundo de la obra. Excelente inversión.",
    avatar: "RT",
  },
  {
    id: 4,
    name: "Sofía Ramírez",
    role: "Socia Fundadora · Grupo Gastro Mx",
    sector: "Restaurantes",
    rating: 5,
    quote:
      "Tenemos 4 restaurantes y el mayor reto siempre fue la rotación de personal. Después del curso, los encargados de cada sucursal retienen mejor a su equipo. Muy recomendado sin dudas.",
    avatar: "SR",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  const t = testimonials[current];

  return (
    <section id="testimonios" className="bg-black py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-16">
          <div className="h-px w-12 bg-[#c9a227]" />
          <span className="text-[#c9a227] tracking-[0.3em] uppercase" style={{ fontSize: "0.7rem" }}>
            Testimonios
          </span>
        </div>

        {/* Main testimonial spotlight */}
        <div className="grid lg:grid-cols-3 gap-0 border border-white/8">
          {/* Big quote side */}
          <div className="lg:col-span-2 p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/8 relative">
            {/* Decorative quote mark */}
            <div
              className="absolute top-6 right-8 text-white/4 select-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "10rem", lineHeight: 1 }}
            >
              "
            </div>

            <div className="flex gap-1 mb-8">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={14} className="text-[#c9a227] fill-[#c9a227]" />
              ))}
            </div>

            <blockquote
              className="text-white leading-relaxed mb-10 relative z-10"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontWeight: 300, fontStyle: "italic" }}
            >
              "{t.quote}"
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#c9a227] flex items-center justify-center shrink-0">
                <span className="text-black font-black text-sm">{t.avatar}</span>
              </div>
              <div>
                <p className="text-white font-medium text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">{t.role}</p>
              </div>
              <span className="ml-auto border border-[#c9a227]/40 text-[#c9a227] text-xs px-3 py-1 tracking-widest uppercase">
                {t.sector}
              </span>
            </div>
          </div>

          {/* Navigation + all testimonials */}
          <div className="flex flex-col">
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setCurrent(i)}
                className={`flex items-start gap-4 p-6 text-left border-b border-white/5 transition-all duration-200 ${
                  i === current ? "bg-[#c9a227]/8 border-l-2 border-l-[#c9a227]" : "hover:bg-white/3"
                }`}
              >
                <div
                  className={`w-9 h-9 shrink-0 flex items-center justify-center text-xs font-bold transition-colors duration-200 ${
                    i === current ? "bg-[#c9a227] text-black" : "bg-white/10 text-gray-400"
                  }`}
                >
                  {item.avatar}
                </div>
                <div className="min-w-0">
                  <p
                    className={`text-sm font-medium truncate transition-colors duration-200 ${
                      i === current ? "text-[#c9a227]" : "text-gray-400"
                    }`}
                  >
                    {item.name}
                  </p>
                  <p className="text-gray-600 text-xs truncate mt-0.5">{item.sector}</p>
                </div>
              </button>
            ))}

            {/* Controls */}
            <div className="flex mt-auto">
              <button
                onClick={prev}
                className="flex-1 py-4 border-r border-white/8 flex items-center justify-center text-gray-500 hover:text-[#c9a227] hover:bg-[#c9a227]/5 transition-all duration-200"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="flex-1 py-4 flex items-center justify-center text-gray-500 hover:text-[#c9a227] hover:bg-[#c9a227]/5 transition-all duration-200"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Logos / companies */}
        <div className="mt-14 pt-10 border-t border-white/5">
          <p className="text-gray-600 text-xs tracking-[0.3em] uppercase text-center mb-8">
            Empresas que confían en nosotros
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Metálicos del Norte", "Grupo Gastro Mx", "Torres & Asoc.", "Distribuidora JH", "AgroMex Coop", "TechPyME MX"].map(
              (name) => (
                <div
                  key={name}
                  className="px-6 py-2.5 border border-white/8 hover:border-[#c9a227]/40 text-gray-500 hover:text-[#c9a227] text-xs tracking-[0.15em] uppercase transition-all duration-200"
                >
                  {name}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
