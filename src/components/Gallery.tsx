export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden"
    >
      {/*
       * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       * IMAGE: /public/images/hero-bg.jpg
       * Size  : 1920 × 1080 px  (16:9 landscape)
       * Format: JPG, optimized — max 500 KB
       * Content: Full portrait of Bani Duggal
       *          working on a bride OR a stunning
       *          bridal face close-up (high contrast)
       * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />

      {/* Dark layered overlays for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-bd-black/70 via-bd-black/40 to-bd-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-bd-black/60 via-transparent to-bd-black/30" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-[10px] md:text-[11px] tracking-[0.55em] uppercase font-body font-light text-bd-blush mb-5 animate-fade-in">
          ✦ &nbsp; Moradabad &nbsp;·&nbsp; Delhi NCR &nbsp;·&nbsp; Jim Corbett &nbsp; ✦
        </p>

        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-light tracking-[0.06em] text-bd-ivory leading-none mb-3 animate-fade-up">
          Bani Duggal
        </h1>

        <p className="font-display text-lg md:text-2xl font-light italic text-bd-champagne tracking-[0.2em] mb-6 animate-fade-up">
          Makeup Studio
        </p>

        <p className="text-[11px] md:text-xs tracking-[0.35em] uppercase font-body text-bd-silver mb-12 font-light animate-fade-in">
          Bridal &nbsp;·&nbsp; Editorial &nbsp;·&nbsp; Special Occasions &nbsp;·&nbsp; Hairstyling
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/918859122220?text=Hi%20Bani!%20I%20would%20like%20to%20book%20a%20makeup%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-bd-rose hover:bg-bd-rose/80 text-bd-ivory text-xs tracking-[0.3em] uppercase font-body font-medium rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-bd-rose/30 hover:-translate-y-0.5"
          >
            Book Your Appointment
          </a>
          <a
            href="#gallery"
            className="w-full sm:w-auto px-8 py-3.5 border border-bd-champagne/40 hover:border-bd-champagne text-bd-champagne text-xs tracking-[0.3em] uppercase font-body font-light rounded-full transition-all duration-300 hover:bg-bd-champagne/5"
          >
            View My Work
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
        <span className="text-[9px] tracking-[0.45em] uppercase text-bd-silver/60 font-body">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-bd-silver/40 to-transparent" />
      </div>
    </section>
  );
}
