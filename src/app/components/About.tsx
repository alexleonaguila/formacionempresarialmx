import { CheckCircle } from "lucide-react";
import img2 from "../../imports/2.png";

const pillars = [
  "Más de 10 años formando líderes en PyMEs mexicanas",
  "Metodología aplicada a la realidad de tu industria",
  "Instructores con experiencia directiva real",
  "Resultados medibles desde la primera semana",
  "Modalidad presencial, online e in-company",
  "Contenido en español, diseñado para México",
];

export function About() {
  return (
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
                alt="Equipo Minilista Industrial"
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
              <strong className="text-white font-medium">Minilista Industrial</strong> es la plataforma de capacitación
              empresarial enfocada en el desarrollo de habilidades de liderazgo para dueños, gerentes y supervisores de
              pequeñas y medianas empresas en México.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8" style={{ fontSize: "0.95rem", fontWeight: 300 }}>
              Cada programa está construido desde adentro de la industria, no desde un aula. Porque sabemos que tu empresa
              no puede esperar teorías: necesita acciones que funcionen el lunes por la mañana.
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
  );
}
