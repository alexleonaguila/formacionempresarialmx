import { Facebook, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import logoImg from "../../img/logo.webp";
export function Footer() {
  return (
    <footer className="bg-[#050505] text-gray-600 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10  flex items-center justify-center">
                <img src={logoImg} alt="Formación Empresarial" className="h-10" />
              </div>
              <div className="leading-none">
                <p
                  className="text-white tracking-[0.3em] uppercase"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem" }}
                >
                  Formacion 
                </p>
                <p className="text-[#c9a227] tracking-[0.5em] uppercase" style={{ fontSize: "0.5rem" }}>
                  empresarial
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ fontWeight: 300 }}>
              Liderazgo con sentido humano para todo tipo de empresas. Maximizamos el talento y la cultura de tu equipo, sin importar tu sector. 
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/Formacionempresarialmx" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/consultoriayformacionempresarial" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-white/10 hover:border-[#c9a227]/50 flex items-center justify-center transition-all duration-200 group"
                >
                  <Icon size={14} className="text-gray-600 group-hover:text-[#c9a227] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Cursos */}
          <div>
            <h4 className="text-white text-xs tracking-[0.2em] uppercase mb-5">Cursos</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                "Liderazgo",
                "Atención y Servicio al Cliente",
                "Desarrollo de Mandos Medios y Gerenciales",
                "Formación de instructores",
                "Team Building",
                "Kick Off Empresariales",
              ].map((item) => (
                <li key={item}>
                  <a href="#cursos" className="hover:text-[#c9a227] transition-colors duration-150 flex items-center gap-2">
                    <span className="w-3 h-px bg-gray-700 shrink-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white text-xs tracking-[0.2em] uppercase mb-5">Empresa</h4>
            <ul className="space-y-2.5 text-sm">
              {["Quiénes somos", "Instructores", "Blog y recursos", "Casos de éxito", "Trabaja con nosotros"].map(
                (item) => (
                  <li key={item}>
                    <a href="#nosotros" className="hover:text-[#c9a227] transition-colors duration-150 flex items-center gap-2">
                      <span className="w-3 h-px bg-gray-700 shrink-0" />
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-xs tracking-[0.2em] uppercase mb-5">Boletín empresarial</h4>
            <p className="text-sm mb-5 leading-relaxed" style={{ fontWeight: 300 }}>
              Recursos gratuitos sobre liderazgo y gestión para Empresas.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="tu@correo.mx"
                className="flex-1 bg-black border border-white/10 px-4 py-2.5 text-sm text-gray-300 placeholder-gray-700 focus:outline-none focus:border-[#c9a227]/40 transition-colors"
              />
              <button className="bg-[#c9a227] hover:bg-[#e0b52b] text-black px-4 py-2.5 transition-colors duration-200">
                <ArrowRight size={16} />
              </button>
            </div>
            <p className="text-xs mt-3 text-gray-700">Cancela cuando quieras.</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs tracking-wide">©2026 Formación Empresarial · Todos los derechos reservados.</p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-[#c9a227] transition-colors">Aviso de privacidad</a>
            <a href="#" className="hover:text-[#c9a227] transition-colors">Términos de uso</a>
            <a href="#" className="hover:text-[#c9a227] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
