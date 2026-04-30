import { useState } from "react";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import img3 from "../../imports/3.png";
import img4 from "../../imports/4.png";
import img5 from "../../imports/5.png";
import img1 from "../../imports/1.png";
import img2 from "../../imports/2.png";

const categories = ["Todos", "Manufactura", "Retail", "Servicios", "Construcción", "Tecnología", "Agroempresarial"];

const courses = [
  {
    id: 1,
    title: "Liderazgo en Planta de Producción",
    category: "Manufactura",
    level: "Intermedio",
    duration: "24 hrs",
    students: "1,200",
    rating: 4.9,
    price: "$2,800",
    description: "Lidera equipos en entornos de manufactura y optimiza procesos productivos desde la primera sesión.",
    img: img3,
    featured: true,
  },
  {
    id: 2,
    title: "Gestión de Equipos en Retail",
    category: "Retail",
    level: "Básico",
    duration: "16 hrs",
    students: "980",
    rating: 4.8,
    price: "$1,900",
    description: "Motiva y dirige tu equipo de ventas para maximizar resultados en comercios.",
    img: img4,
    featured: false,
  },
  {
    id: 3,
    title: "Liderazgo en Empresas de Servicios",
    category: "Servicios",
    level: "Avanzado",
    duration: "32 hrs",
    students: "750",
    rating: 4.9,
    price: "$3,500",
    description: "Estrategias avanzadas para liderar organizaciones con alto enfoque en la experiencia del cliente.",
    img: img5,
    featured: false,
  },
  {
    id: 4,
    title: "Supervisión en Obras y Construcción",
    category: "Construcción",
    level: "Intermedio",
    duration: "20 hrs",
    students: "620",
    rating: 4.7,
    price: "$2,400",
    description: "Habilidades de liderazgo para supervisores y jefes de obra en empresas constructoras.",
    img: img1,
    featured: false,
  },
  {
    id: 5,
    title: "Cultura Ágil para PyMEs Tech",
    category: "Tecnología",
    level: "Básico",
    duration: "18 hrs",
    students: "540",
    rating: 4.8,
    price: "$2,100",
    description: "Implementa metodologías ágiles y lidera equipos en empresas pequeñas de tecnología.",
    img: img2,
    featured: false,
  },
  {
    id: 6,
    title: "Liderazgo Agroindustrial",
    category: "Agroempresarial",
    level: "Básico",
    duration: "14 hrs",
    students: "410",
    rating: 4.7,
    price: "$1,600",
    description: "Gestión de personas y equipos en empresas del sector agropecuario.",
    img: img3,
    featured: false,
  },
];

export function Courses() {
  const [active, setActive] = useState("Todos");

  const filtered = active === "Todos" ? courses : courses.filter((c) => c.category === active);

  return (
    <section id="cursos" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#c9a227]" />
              <span className="text-[#c9a227] tracking-[0.3em] uppercase" style={{ fontSize: "0.7rem" }}>
                Programas
              </span>
            </div>
            <h2
              className="text-white uppercase leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                letterSpacing: "0.03em",
              }}
            >
              Cursos que
              <br />
              <span className="text-[#c9a227]">cambian resultados</span>
            </h2>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-[#c9a227] border-b border-[#c9a227]/40 hover:border-[#c9a227] text-sm tracking-[0.15em] uppercase transition-all duration-300 pb-1 self-start md:self-end"
          >
            Ver todos <ArrowRight size={14} />
          </a>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-white/5 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-1.5 text-xs tracking-[0.15em] uppercase transition-all duration-200 ${
                active === cat
                  ? "bg-[#c9a227] text-black font-bold"
                  : "border border-white/15 text-gray-500 hover:border-[#c9a227]/50 hover:text-[#c9a227]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {filtered.map((course) => (
            <div
              key={course.id}
              className="bg-black hover:bg-[#0d0d0d] group transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "200px" }}>
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  {course.featured && (
                    <span className="bg-[#c9a227] text-black text-xs px-2 py-0.5 tracking-widest uppercase font-bold">
                      Destacado
                    </span>
                  )}
                  <span className="border border-white/30 text-white text-xs px-2 py-0.5 tracking-widest uppercase">
                    {course.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1">
                  <Star size={12} className="text-[#c9a227] fill-[#c9a227]" />
                  <span className="text-white text-xs font-medium">{course.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 border-l border-white/5 group-hover:border-[#c9a227]/20 transition-colors duration-300">
                <span className="text-gray-600 text-xs tracking-[0.15em] uppercase mb-2">{course.level}</span>
                <h3
                  className="text-white mb-3 group-hover:text-[#c9a227] transition-colors duration-300"
                  style={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1.35 }}
                >
                  {course.title}
                </h3>
                <p className="text-gray-500 text-sm flex-1 leading-relaxed mb-5" style={{ fontWeight: 300 }}>
                  {course.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-600 mb-5">
                  <span className="flex items-center gap-1.5">
                    <Clock size={11} /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users size={11} /> {course.students}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span
                    className="text-[#c9a227]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem", letterSpacing: "0.05em" }}
                  >
                    {course.price}
                  </span>
                  <a
                    href="#contacto"
                    className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-gray-400 hover:text-[#c9a227] transition-colors duration-200"
                  >
                    Inscribirse <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
