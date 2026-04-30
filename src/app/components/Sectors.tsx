import {
  Factory,
  ShoppingBag,
  Utensils,
  HardHat,
  Cpu,
  Leaf,
  Truck,
  Scissors,
} from "lucide-react";

const sectors = [
  { icon: Factory, label: "Manufactura", sub: "Liderazgo en planta" },
  { icon: ShoppingBag, label: "Retail & Comercio", sub: "Equipos de venta" },
  { icon: Utensils, label: "Restaurantes", sub: "Hostelería y servicio" },
  { icon: HardHat, label: "Construcción", sub: "Supervisión de obra" },
  { icon: Cpu, label: "Tecnología", sub: "Equipos ágiles" },
  { icon: Leaf, label: "Agroempresarial", sub: "Sector del campo" },
  { icon: Truck, label: "Logística", sub: "Transporte y cadena" },
  { icon: Scissors, label: "Moda & Textil", sub: "Industria creativa" },
];

export function Sectors() {
  return (
    <section className="bg-[#0d0d0d] py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#c9a227]" />
              <span className="text-[#c9a227] tracking-[0.3em] uppercase" style={{ fontSize: "0.7rem" }}>
                Industrias
              </span>
            </div>
            <h2
              className="text-white uppercase leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                letterSpacing: "0.04em",
              }}
            >
              Un programa para
              <br />
              <span className="text-[#c9a227]">cada giro empresarial</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs" style={{ fontWeight: 300 }}>
            No importa tu industria, tenemos el curso correcto para ti.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5">
          {sectors.map((s) => (
            <div
              key={s.label}
              className="bg-[#0d0d0d] hover:bg-[#c9a227]/8 p-6 flex flex-col gap-3 cursor-pointer group transition-all duration-300 border border-transparent hover:border-[#c9a227]/20"
            >
              <div className="w-10 h-10 border border-white/10 group-hover:border-[#c9a227]/50 flex items-center justify-center transition-colors duration-300">
                <s.icon size={18} className="text-gray-500 group-hover:text-[#c9a227] transition-colors duration-300" />
              </div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-[#c9a227] transition-colors duration-300">
                  {s.label}
                </p>
                <p className="text-gray-600 text-xs mt-0.5">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
