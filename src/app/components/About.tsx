import { CheckCircle } from "lucide-react";
import img2 from "../../imports/2.png";
import instructor1 from "../../img/instructores/1.webp";
import instructor2 from "../../img/instructores/2.webp";
import instructor3 from "../../img/instructores/3.webp";
import instructor4 from "../../img/instructores/4.webp";
import instructor5 from "../../img/instructores/5.webp";
import instructor6 from "../../img/instructores/6.webp";

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

const instructors = [
  {
    img: instructor1,
    name: "Hugo Estrada",
    titles: [
      "Consultor Señor, Teambuilder y Formador Empresarial",
      "CEO de Formacion Empresarial MX",
      "Gerente de Relación con Clientes en Great Place to Work®",
    ],
    bio: "Hugo Estrada cuenta con más de 18 años de experiencia liderando la evolución del clima y la cultura laboral en entornos de alta exigencia. En su rol como Gerente Corporativo de Formación, se ha especializado en el desarrollo de talento para el sector hotelero y corporativo, coordinando certificaciones internacionales como Great Place to Work, ESR y Rainforest Alliance. Su gestión ha sido clave en el blindaje operativo y de servicio (Distintivo H, CRISTAL, Martí) para marcas de lujo y cadenas 5 Diamantes, transformando equipos de trabajo en activos de alta rentabilidad.",
  },
  {
    img: instructor2,
    name: "Verónica Rubio",
    titles: [
      "Consultora Señor en Bienestar y Salud Terapéutica",
      "Directora de SPA Balance by Marea Condos",
    ],
    bio: "Verónica Rubio cuenta con una destacada trayectoria de más de 18 años liderando el sector de hospitalidad y bienestar en México y el Caribe. Experta en el diseño estratégico y operación de SPAs, se especializa en capacitar equipos comerciales enfocados en la comercialización de servicios adicionales y experiencias premium dentro del segmento todo incluido, asegurando altos estándares de calidad, eficiencia y rentabilidad.",
  },
  {
    img: instructor3,
    name: "Carlos Rodríguez",
    titles: [
      "Consultor Señor y Formador Empresarial",
      "CEO de CRH Consulting",
      "Gerente de Relación con Clientes en Great Place to Work",
    ],
    bio: "Carlos Eduardo Rodríguez es un experimentado consultor e instructor empresarial con 18 años de trayectoria en el desarrollo de talento y transformación organizacional. Especialista en liderazgo, comunicación y hospitalidad, ha liderado importantes proyectos de formación en México y el Caribe. Su gestión se centra en potenciar el desempeño de equipos ejecutivos y de alto rendimiento. Actualmente aporta su sólida experiencia como Gerente de Relación con Clientes y Especialista en Formación en Great Place to Work® México, impulsando culturas de excelencia y servicio.",
  },
  {
    img: instructor4,
    name: "INGRYD LÓPEZ",
    titles: [
      "Consultora y Formadora Empresarial",
      "Experta en Reclutamiento y Selección Corporativa",
      "CEO de RH Visión Talent",
    ],
    bio: "Ingrid López cuenta con una sólida trayectoria de 14 años especializándose en la atracción y selección de talento ejecutivo y operativo para corporativos de alta exigencia. Su experiencia técnica incluye el paso por firmas líderes como AMResorts y Grupo Barceló, donde demostró su capacidad de liderazgo al administrar plantillas de hasta 4,000 empleados y dirigir reclutamientos masivos a gran escala. Experta en capacitar y estructurar departamentos de Recursos Humanos desde cero, actualmente se desempeña como consultora empresarial y facilitadora de Teambuilding, transformando la gestión del talento en ventajas competitivas para las organizaciones.",
  },
  {
    img: instructor5,
    name: "MARÍA FERNANDA MORÁN",
    titles: [
      "Especialista en Recursos Humanos y Capacitación",
      "Teambuilder y Formadora en Formación Empresarial MX",
    ],
    bio: "María Fernanda Morán cuenta con 10 años de experiencia transformando equipos de trabajo a través del reclutamiento estratégico y la formación continua en organizaciones de gran escala. Su especialidad radica en el diagnóstico y diseño de cursos a la medida, enfocados en elevar los niveles de calidad en el servicio y atención al cliente. Como facilitadora y teambuilder, María Fernanda complementa su experiencia con el desarrollo de programas de contenido especializado en acompañamiento femenino, promoviendo culturas laborales más equitativas, motivadas y de alto rendimiento.",
  },
  {
    img: instructor6,
    name: "CLAUDIA VAZQUÉZ",
    titles: [
      "Especialista en Grupos y Actividades de Aventura",
      "Teambuilder y Formadora",
      "En Formación Empresarial MX",
    ],
    bio: "Claudia Vázquez es una apasionada facilitadora de Teambuilding e instructora empresarial, experta en diseñar dinámicas basadas en retos físicos y estratégicos que impulsan la cohesión de los equipos. Su sólida experiencia abarca la dirección de grupos, la gestión de convenciones y el desarrollo de estrategias de fidelización y atención a clientes en el sector turístico y corporativo. Tras liderar diversas áreas de operación y servicio en importantes empresas, hoy enfoca todo su conocimiento como consultora y formadora, ayudando a las organizaciones a estructurar equipos altamente comunicativos, adaptables y orientados a resultados a través del aprendizaje vivencial.",
  },
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
               
                <p className="text-gray-400 text-xs tracking-[0.15em] uppercase mt-1">Empresas transformadas</p>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2 reveal">
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
                <span className="text-[#c9a227]">que transforman culturas y mueven empresas.</span>
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
              Contamos con expertos en las áreas clave del desarrollo empresarial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="bg-[#111111] border border-[#c9a227]/20 overflow-hidden group hover:border-[#c9a227]/50 transition-all duration-300">
                {/* Photo */}
                <div className="relative overflow-hidden" style={{ height: "320px" }}>
                  <img
                    src={instructor.img}
                    alt={instructor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Info */}
                <div className="p-6">
                  <div className="h-px w-8 bg-[#c9a227] mb-4" />
                  <h3
                    className="text-white uppercase mb-2"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", letterSpacing: "0.05em" }}
                  >
                    {instructor.name}
                  </h3>
                  <div className="mb-4 space-y-0.5">
                    {instructor.titles.map((title, i) => (
                      <p key={i} className="text-[#c9a227] font-semibold italic" style={{ fontSize: "0.72rem", letterSpacing: "0.05em" }}>
                        {title}
                      </p>
                    ))}
                  </div>
                  <p className="text-gray-400 leading-relaxed" style={{ fontSize: "0.82rem" }}>
                    {instructor.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
