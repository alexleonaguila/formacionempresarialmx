export function QuoteBanner() {
  return (
    <section className="bg-[#c9a227] py-14 px-6 relative overflow-hidden">
      {/* Decorative large quotes */}
      <div
        className="absolute left-6 top-0 text-black/10 select-none"
        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "12rem", lineHeight: 1 }}
      >
        "
      </div>
      <div
        className="absolute right-6 bottom-0 text-black/10 select-none"
        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "12rem", lineHeight: 1 }}
      >
        "
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <p
          className="text-black uppercase leading-tight mb-4"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
            letterSpacing: "0.04em",
          }}
        >
          El liderazgo no es un título. Es una decisión que tomas cada día.
        </p>
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-black/40" />
          <span className="text-black/70 text-xs tracking-[0.3em] uppercase">Minilista Industrial</span>
          <div className="h-px w-12 bg-black/40" />
        </div>
      </div>
    </section>
  );
}
