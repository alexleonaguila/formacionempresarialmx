import { CheckCircle } from "lucide-react";
import img2 from "../../imports/2.png";

const pillars = [
  "Más de 15 años de experiencia en capacitación y desarrollo organizacional",
  "Metodología aplicada a la realidad de tu industria",
  "Instructores con experiencia directiva real",
  "Resultados medibles desde la primera semana",
  "Modalidad presencial, online e in-company",
  "Contenido en español, diseñado para México",
];

const metodologia = [
  "Capacitación estratégica en liderazgo, desarrollo gerencial y atención al cliente",
  "Gestión de clima y cultura organizacional para mejorar el compromiso y reducir la rotación",
  "Team buildings y programas de alto impacto para integrar equipos",
  "Consultoría en formación empresarial con metodologías innovadoras y personalizadas",
];

const resultados = [
  "Mayor compromiso y productividad de los equipos",
  "Reducción de conflictos laborales y mejora del ambiente de trabajo",
  "Servicio al cliente más eficiente y alineado con la cultura organizacional",
  "Equipos de liderazgo y supervisores más preparados para gestionar el cambio e innovación",
];

const instructorExpertise = [
  "Certificaciones en Cultura Organizacional",
  "Liderazgo en formación y desarrollo empresarial",
  "Especialista en servicio al cliente con estándares 5 Diamantes A",
];

export function About() {
  return (
    <>
      {/* Main About Section */}
      <section id="nosotros" className="bg-[#0a0a0a] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              {/* Gold frame offset */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#c9a227]/30 rounded-none" />
              <div className="relative rounded-none overflow-hidden" style={{ height: "520px" }}>
                <img
                  src={img2}
                  alt="Equipo Formacion Empresarial"
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              {/* Floating stat */}
              <div className="absolute bottom-6 left-6 bg-black/90 border-l-2 border-[#c9a227] px-5 py-4">
                <p
                  className="text-[#c9a227]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.8rem", lineHeight: 1 }}
                >
                  500+
                </p>
                <p className="text-gray-400 text-xs tracking-[0.15em] uppercase mt-1">Empresas transformadas</p>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#c9a227]" />
                <span className="text-[#c9a227] tracking-[0.3em] uppercase" style={{ fontSize: "0.7rem" }}>
                  Quiénes somos
                </span>
              </div>

              <h2
                className="text-white uppercase mb-6 leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  letterSpacing: "0.03em",
                }}
              >
                Formamos líderes
                <br />
                <span className="text-[#c9a227]">que mueven empresas</span>
              </h2>

              <p className="text-gray-400 leading-relaxed mb-4" style={{ fontSize: "0.95rem", fontWeight: 300 }}>
                Somos un equipo con más de 15 años de experiencia en el ámbito de la capacitación y desarrollo organizacional,
                enfocados en la gestión de equipos gerenciales y la mejora del clima y cultura organizacional.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4" style={{ fontSize: "0.95rem", fontWeight: 300 }}>
                Nos especializamos en la integración de equipos, salud terapéutica, y la mejora del servicio y atención al cliente
                en diversas industrias, adaptándonos a las necesidades específicas de cada sector.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8" style={{ fontSize: "0.95rem", fontWeight: 300 }}>
                Nuestra trayectoria combina conocimientos sólidos con un enfoque innovador, ofreciendo soluciones integrales que
                impulsan el crecimiento, la eficiencia y el bienestar de las organizaciones y sus colaboradores.
              </p>

              <div className="space-y-3 mb-10">
                {pillars.map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#c9a227] mt-0.5 shrink-0" />
                    <span className="text-gray-300 text-sm">{p}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contacto"
                className="inline-flex items-center gap-3 bg-[#c9a227] hover:bg-[#e0b52b] text-black px-9 py-3.5 text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300"
              >
                Quiero saber más
              </a>
            </div>
          </div>
        </div>
      </section>

   

      {/* Resultados Section */}
      <section className="bg-[#0a0a0a] py-20 border-t border-[#c9a227]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#c9a227]" />
              <span className="text-[#c9a227] tracking-[0.3em] uppercase" style={{ fontSize: "0.7rem" }}>
                Impacto
              </span>
              <div className="h-px w-12 bg-[#c9a227]" />
            </div>
            <h2
              className="text-white uppercase mb-4 leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                letterSpacing: "0.03em",
              }}
            >
              Resultados que generamos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {resultados.map((resultado, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-sm">
                <div className="text-[#c9a227] flex-shrink-0 pt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-300">{resultado}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructores Section */}
      <section className="bg-[#0a0a0a] py-20 border-t border-[#c9a227]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#c9a227]" />
              <span className="text-[#c9a227] tracking-[0.3em] uppercase" style={{ fontSize: "0.7rem" }}>
                Nuestro equipo
              </span>
              <div className="h-px w-12 bg-[#c9a227]" />
            </div>
            <h2
              className="text-white uppercase mb-4 leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                letterSpacing: "0.03em",
              }}
            >
              Nuestros instructores
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-6" style={{ fontSize: "0.95rem" }}>
              Contamos con expertos certificados en las áreas clave del desarrollo empresarial
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {instructorExpertise.map((expertise, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#c9a227]/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#c9a227]/40">
                  <span className="text-[#c9a227] text-2xl">🏆</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{expertise}</h3>
                <p className="text-gray-400 text-sm">Experiencia directa en el sector empresarial mexicano</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
