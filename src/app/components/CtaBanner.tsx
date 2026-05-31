const bgImg =
  "https://images.unsplash.com/photo-1777398410361-a1bf3e83e60e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RpdmF0aW9uYWwlMjBsZWFkZXJzaGlwJTIwY29uZmVyZW5jZSUyMGRhcmslMjBzdGFnZSUyMHNwb3RsaWdodHxlbnwxfHx8fDE3Nzc1NjIwNDl8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function CtaBanner() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <img
        src={bgImg}
        alt="Liderazgo empresarial"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-[#c9a227]" />
          <span className="text-[#c9a227] tracking-[0.3em] uppercase" style={{ fontSize: "0.7rem" }}>
            Próximo paso
          </span>
          <div className="h-px w-12 bg-[#c9a227]" />
        </div>

        <h2
          className="text-white uppercase mb-6 leading-none"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            letterSpacing: "0.03em",
          }}
        >
          Cambiemos el mundo empezando por nosotros mismos  
          <br />
          <span className="text-[#c9a227]">un paso a la vez.</span>
        </h2>

        <p className="text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed" style={{ fontWeight: 300 }}>
          Únete a las empresas que ya transformaron su manera de liderar. El primer paso es una llamada sin costo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center bg-[#c9a227] hover:bg-[#e0b52b] text-black px-12 py-4 text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300"
          >
            Inscríbete ahora
          </a>
          <a
            href="#cursos"
            className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white px-10 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-300"
          >
            Ver todos los cursos
          </a>
        </div>
      </div>
    </section>
  );
}
