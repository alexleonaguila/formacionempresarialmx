import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const brandModules = import.meta.glob('../../img/marcas/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const brands = Object.entries(brandModules).map(([path, url]) => ({
  url,
  name: (path.split('/').pop() ?? '').replace(/\.[^.]+$/, ''),
}));

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
      "Pensé que era difícil capacitar a gente con poca experiencia formal, pero Formación Empresarial tiene un método muy práctico. Mi equipo aprendió con ejemplos de su propio trabajo. Fue increíble el cambio.",
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
    <section id="testimonios" className="bg-black py-12 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-8 lg:mb-16 reveal">
          <div className="h-px w-12 bg-[#c9a227]" />
          <span className="text-[#c9a227] tracking-[0.3em] uppercase" style={{ fontSize: "0.7rem" }}>
            Testimonios
          </span>
        </div>

        {/* Main testimonial spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/8">
          {/* Big quote side */}
          <div className="lg:col-span-2 p-4 sm:p-6 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/8 relative">
            {/* Decorative quote mark */}
            <div
              className="absolute top-6 right-8 text-white/4 select-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(5rem, 15vw, 10rem)", lineHeight: 1 }}
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
              style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", fontWeight: 300, fontStyle: "italic" }}
            >
              "{t.quote}"
            </blockquote>

            <div className="flex items-center gap-2 sm:gap-4 flex-wrap sm:flex-nowrap">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#c9a227] flex items-center justify-center shrink-0">
                <span className="text-black font-black text-xs sm:text-sm">{t.avatar}</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-white font-medium text-xs sm:text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs mt-0.5 line-clamp-2">{t.role}</p>
              </div>
              <span className="border border-[#c9a227]/40 text-[#c9a227] text-xs px-2 sm:px-3 py-1 tracking-widest uppercase whitespace-nowrap shrink-0">
                {t.sector}
              </span>
            </div>
          </div>

          {/* Navigation + all testimonials */}
          <div className="flex flex-col max-h-96 lg:max-h-none">
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setCurrent(i)}
                className={`flex items-start gap-2 sm:gap-4 p-3 sm:p-6 text-left border-b border-white/5 transition-all duration-200 ${
                  i === current ? "bg-[#c9a227]/8 border-l-2 border-l-[#c9a227]" : "hover:bg-white/3"
                }`}
              >
                <div
                  className={`w-8 sm:w-9 h-8 sm:h-9 shrink-0 flex items-center justify-center text-xs font-bold transition-colors duration-200 ${
                    i === current ? "bg-[#c9a227] text-black" : "bg-white/10 text-gray-400"
                  }`}
                >
                  {item.avatar}
                </div>
                <div className="min-w-0">
                  <p
                    className={`text-xs sm:text-sm font-medium truncate transition-colors duration-200 ${
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
                className="flex-1 py-3 sm:py-4 border-r border-white/8 flex items-center justify-center text-gray-500 hover:text-[#c9a227] hover:bg-[#c9a227]/5 transition-all duration-200"
              >
                <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={next}
                className="flex-1 py-3 sm:py-4 flex items-center justify-center text-gray-500 hover:text-[#c9a227] hover:bg-[#c9a227]/5 transition-all duration-200"
              >
                <ChevronRight size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Logos / companies */}
        <div className="mt-8 lg:mt-14 pt-6 lg:pt-10 border-t border-white/5">
          <p className="text-gray-600 text-xs tracking-[0.3em] uppercase text-center mb-6 lg:mb-10">
            Empresas que confían en nosotros
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-x-10 lg:gap-y-8">
            {brands.map(({ url, name }) => (
              <div key={name} className="flex items-center justify-center w-24 sm:w-28 lg:w-32 h-10 sm:h-11 lg:h-12">
                <img
                  src={url}
                  alt={name}
                  className="max-h-full max-w-full object-contain opacity-40 hover:opacity-80 transition-opacity duration-300"
                  style={{ filter: 'grayscale(1) invert(1)', mixBlendMode: 'screen' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
