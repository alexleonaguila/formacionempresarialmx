import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import img3 from "../../img/3.webp";
import img4 from "../../img/4.webp";
import img5 from "../../img/5.webp";
import img1 from "../../img/1.webp";
import img2 from "../../imports/2.png";

const categories = ["Todos", "Liderazgo", "Servicio al Cliente", "Desarrollo Gerencial", "Formación", "Team Building", "Estrategia"];

const services = [
  {
    id: 1,
    title: "Liderazgo",
    category: "Liderazgo",
    description: "Capacitaciones prácticas e inspiradoras para desarrollar habilidades de liderazgo adaptadas a los retos actuales.",
    img: img3,
    featured: true,
    highlights: [
      "Role playing y simulaciones que reflejan situaciones reales",
      "Análisis de casos y ejercicios de debriefing",
      "Autoconocimiento y motivación",
      "Modelos de liderazgo contemporáneo e interdgeneracionales",
    ],
  },
  {
    id: 2,
    title: "Atención y Servicio al Cliente",
    category: "Servicio al Cliente",
    description: "Capacitaciones dinámicas y vivenciales enfocadas en desarrollar habilidades clave como empatía y comunicación efectiva.",
    img: img4,
    featured: false,
    highlights: [
      "Actividades prácticas y juegos de roles con clientes reales",
      "Técnicas de escucha activa y lenguaje positivo",
      "Programa 'Las estrellas del servicio' con reconocimiento",
      "Personalización según industria: hotelería, retail, corporativo",
    ],
  },
  {
    id: 3,
    title: "Desarrollo de Mandos Medios y Gerenciales",
    category: "Desarrollo Gerencial",
    description: "Fortalecimiento de competencias estratégicas y operativas para líderes emergentes y gerentes.",
    img: img5,
    featured: false,
    highlights: [
      "Gestión del tiempo, delegación efectiva y manejo del estrés",
      "Simulaciones para toma de decisiones bajo presión",
      "Mentoría y autoevaluación de estilo de liderazgo",
      "Herramientas prácticas: planificación estratégica y supervisión",
    ],
  },
  {
    id: 4,
    title: "Formación de instructores",
    category: "Formación",
    description: "Desarrollamos las competencias pedagógicas y oratoria que tus expertos necesitan para transmitir conocimiento con impacto, claridad y liderazgo.",
    img: img1,
    featured: false,
    highlights: [
      "Técnicas de Andragogía: Modelos de aprendizaje especializado para la enseñanza y capacitación de adultos.",
      "Oratoria y Comunicación Asertiva: Dominio de la voz, lenguaje corporal y técnicas avanzadas para hablar frente a un grupo.",
      "Manejo Dinámico de Grupos: Estrategias de control, facilitación y resolución de objeciones en el aula.",
      "Diseño Curricular Estructurado: Metodología para la creación de materiales didácticos, objetivos y herramientas de evaluación.",
    ],
  },
  {
    id: 5,
    title: "Team Building",
    category: "Team Building",
    description: "Experiencias diseñadas para fortalecer cohesión, comunicación y compromiso en equipos de trabajo.",
    img: img2,
    featured: false,
    highlights: [
      "Dinámicas introspectivas y autoconocimiento grupal",
      "Retos grupales que fomentan creatividad y colaboración",
      "Metáforas poderosas con objetivos compartidos",
      "Actividades al aire libre o espacios cerrados personalizados",
    ],
  },
  {
    id: 6,
    title: "Kick Off Empresariales",
    category: "Estrategia",
    description: "Sesión estratégica para alinear equipos con metas y marcar el inicio de ciclos operativos o proyectos.",
    img: img3,
    featured: false,
    highlights: [
      "Presentación clara y motivadora de objetivos clave",
      "Fomento del sentido de pertenencia y visión compartida",
      "Definición de estrategias prácticas y pasos alcanzables",
      "Identificación de roles, responsabilidades e impacto individual",
    ],
  },
];

export function Courses() {
  const [active, setActive] = useState("Todos");

  const filtered = active === "Todos" ? services : services.filter((s) => s.category === active);

  return (
    <section id="cursos" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#c9a227]" />
              <span className="text-[#c9a227] tracking-[0.3em] uppercase" style={{ fontSize: "0.7rem" }}>
                Cursos
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
              PROGRAMAS DE FORMACIÓN 
              <br />
              <span className="text-[#c9a227]">QUE TRANSFORMAN ORGANIZACIONES</span>
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
          {filtered.map((service) => (
            <div
              key={service.id}
              className="bg-black hover:bg-[#0d0d0d] group transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "200px" }}>
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  {service.featured && (
                    <span className="bg-[#c9a227] text-black text-xs px-2 py-0.5 tracking-widest uppercase font-bold">
                      Destacado
                    </span>
                  )}
                  <span className="border border-white/30 text-white text-xs px-2 py-0.5 tracking-widest uppercase">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 border-l border-white/5 group-hover:border-[#c9a227]/20 transition-colors duration-300">
                <h3
                  className="text-white mb-3 group-hover:text-[#c9a227] transition-colors duration-300"
                  style={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1.35 }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed" style={{ fontWeight: 300 }}>
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-5 flex-1">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                      <CheckCircle size={13} className="text-[#c9a227] mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5">
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-gray-400 hover:text-[#c9a227] transition-colors duration-200"
                  >
                    Contáctanos <ArrowRight size={13} />
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
