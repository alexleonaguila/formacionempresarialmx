import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

// ── Importación automática de imágenes por carpeta (Vite glob) ──────────────
const cursosRaw = import.meta.glob<{ default: string }>(
  "../../img/galeria/Cursos/*",
  { eager: true }
);
const instructoresRaw = import.meta.glob<{ default: string }>(
  "../../img/galeria/formacion de instrutores/*",
  { eager: true }
);
const teamBuildingRaw = import.meta.glob<{ default: string }>(
  "../../img/galeria/team building/*",
  { eager: true }
);

const cursosImages    = Object.values(cursosRaw).map((m) => m.default);
const instructoresImages = Object.values(instructoresRaw).map((m) => m.default);
const teamBuildingImages = Object.values(teamBuildingRaw).map((m) => m.default);

const CATEGORIES = [
  { key: "todos",        label: "Todos",                   images: [] as string[] },
  { key: "cursos",       label: "Cursos",                  images: cursosImages },
  { key: "instructores", label: "Formación de Instructores", images: instructoresImages },
  { key: "team",         label: "Team Building",           images: teamBuildingImages },
];
// Poblar "Todos" con todas las imágenes
CATEGORIES[0].images = [...cursosImages, ...instructoresImages, ...teamBuildingImages];

// ── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({
  images,
  index,
  onClose,
}: {
  images: string[];
  index: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(index);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Contador */}
      <span className="absolute top-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.3em] font-mono select-none">
        {current + 1} / {images.length}
      </span>

      {/* Cerrar */}
      <button
        className="absolute top-5 right-5 text-white/60 hover:text-[#c9a227] transition-colors duration-200 z-10"
        onClick={onClose}
        aria-label="Cerrar"
      >
        <X size={28} />
      </button>

      {/* Imagen */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full mx-6"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={current}
          src={images[current]}
          alt={`Galería ${current + 1}`}
          className="w-full h-full object-contain max-h-[85vh] select-none animate-fade-in"
          draggable={false}
        />
        {/* Línea dorada inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a227] to-transparent opacity-50" />
      </div>

      {/* Flechas */}
      {images.length > 1 && (
        <>
          <button
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-white/60 hover:text-[#c9a227] border border-white/10 hover:border-[#c9a227]/50 transition-all duration-200 bg-black/40 hover:bg-black/60"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Anterior"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-white/60 hover:text-[#c9a227] border border-white/10 hover:border-[#c9a227]/50 transition-all duration-200 bg-black/40 hover:bg-black/60"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Siguiente"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}
    </div>
  );
}

// ── Tarjeta de imagen ─────────────────────────────────────────────────────────
function GalleryCard({
  src,
  index,
  onOpen,
}: {
  src: string;
  index: number;
  onOpen: (i: number) => void;
}) {
  return (
    <div
      className="group relative overflow-hidden cursor-pointer bg-neutral-900"
      onClick={() => onOpen(index)}
      style={{ breakInside: "avoid", marginBottom: "0.5rem" }}
    >
      <img
        src={src}
        alt={`Foto ${index + 1}`}
        loading="lazy"
        className="w-full block object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Overlay hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400 flex items-center justify-center">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
          <ZoomIn size={28} />
        </span>
      </div>
      {/* Borde dorado inferior animado */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c9a227] group-hover:w-full transition-all duration-500" />
    </div>
  );
}

// ── Componente principal ───────────────────────────────────────────────────────
export function Gallery() {
  const [activeKey, setActiveKey] = useState("todos");
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  const currentImages =
    CATEGORIES.find((c) => c.key === activeKey)?.images ?? [];

  return (
    <section id="galeria" className="bg-[#050505] py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* ── Encabezado ── */}
        <div className="reveal mb-16 text-center">
          <p className="text-[#c9a227] text-xs tracking-[0.35em] uppercase mb-4 font-mono">
            — Momentos
          </p>
          <h2
            className="text-white leading-none mb-5"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              letterSpacing: "0.04em",
            }}
          >
            Nuestra Galería
          </h2>
          <div className="w-16 h-[2px] bg-[#c9a227] mx-auto mb-6" />
          <p className="text-gray-500 text-sm tracking-wider max-w-xl mx-auto leading-relaxed">
            Momentos de aprendizaje, conexión y transformación capturados en cada sesión.
          </p>
        </div>

        {/* ── Tabs de categorías ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveKey(cat.key)}
              className={`px-5 py-2 text-xs tracking-[0.2em] uppercase transition-all duration-300 border ${
                activeKey === cat.key
                  ? "border-[#c9a227] bg-[#c9a227] text-black font-semibold"
                  : "border-white/15 text-gray-500 hover:border-[#c9a227]/60 hover:text-[#c9a227]"
              }`}
            >
              {cat.label}
              <span className="ml-2 opacity-50 text-[0.6rem]">({cat.images.length})</span>
            </button>
          ))}
        </div>

        {/* ── Grid masonry ── */}
        <div
          className="columns-2 md:columns-3 lg:columns-4 gap-2"
          style={{ columnGap: "0.5rem" }}
        >
          {currentImages.map((src, i) => (
            <GalleryCard
              key={src}
              src={src}
              index={i}
              onOpen={(idx) => setLightbox({ images: currentImages, index: idx })}
            />
          ))}
        </div>

        {/* ── Línea decorativa inferior ── */}
        <div className="mt-16 flex items-center gap-4">
          <div className="flex-1 h-px bg-white/5" />
          <span className="text-[#c9a227]/30 text-xs tracking-[0.3em] font-mono uppercase">
            {currentImages.length} fotos
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
