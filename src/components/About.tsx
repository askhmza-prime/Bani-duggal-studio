import Image from "next/image";

const STATS = [
  { value: "10K+", label: "Instagram Followers" },
  { value: "68+",  label: "Happy Clients" },
  { value: "4.0★", label: "Google Rating" },
  { value: "10+",  label: "Years Experience" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-bd-ivory text-bd-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ─── Image Column ─── */}
        <div className="relative">
          {/*
           * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           * IMAGE: /public/images/artist-portrait.jpg
           * Size  : 600 × 800 px  (3:4 portrait)
           * Format: JPG, optimized — max 300 KB
           * Content: Professional photo of Bani Duggal —
           *          either a clean headshot or a shot of
           *          her working on a client (side angle)
           * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           */}
          <div className="relative w-full aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl shadow-bd-charcoal/20">
            <Image
              src="/images/artist-portrait.jpg"
              alt="Bani Duggal — Professional Makeup Artist"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 90vw, 45vw"
            />
          </div>

          {/* Decorative rings */}
          <div className="absolute -bottom-5 -right-5 w-44 h-44 rounded-2xl border border-bd-rose/20 -z-10 hidden lg:block" />
          <div className="absolute -top-5 -left-5 w-28 h-28 rounded-full border border-bd-blush/15 -z-10 hidden lg:block" />

          {/* Floating rating badge */}
          <div className="absolute bottom-6 right-6 lg:-right-6 bg-bd-black/90 backdrop-blur-sm text-bd-ivory px-5 py-4 rounded-xl shadow-2xl border border-white/5">
            <p className="text-2xl font-display font-semibold text-bd-gold leading-none">4.0 ★</p>
            <p className="text-[10px] tracking-[0.25em] uppercase font-body text-bd-silver mt-1">
              Google Rated
            </p>
          </div>
        </div>

        {/* ─── Text Column ─── */}
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-[10px] tracking-[0.45em] uppercase font-body text-bd-rose font-medium">
              The Artist
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight text-bd-dark">
              The Magic Behind <br />
              <span className="italic text-bd-rose">Every Look</span>
            </h2>
          </div>

          <div className="space-y-4 text-bd-muted text-sm font-body font-light leading-[1.9]">
            <p>
              Based in Moradabad, Bani Duggal is a celebrated makeup artist known for her precision,
              artistry, and an innate ability to bring out each client's unique beauty. With a signature
              touch that blends contemporary trends with timeless elegance, she has become one of the
              most sought-after names in bridal and special occasion makeup.
            </p>
            <p>
              With over a decade of experience and a portfolio spanning breathtaking bridal
              transformations, fashion shows, television productions, and high-end photography projects,
              Bani's work has earned her a loyal following of over 10,000 on Instagram and glowing
              reviews across Moradabad, Delhi NCR, and Jim Corbett destinations.
            </p>
            <p>
              Every appointment is a personalised experience — from your first consultation to the
              final brushstroke, Bani ensures you look and feel absolutely stunning.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-2xl bg-bd-cream border border-bd-blush/20 text-center"
              >
                <p className="font-display text-3xl font-semibold text-bd-dark leading-none">
                  {stat.value}
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase font-body text-bd-muted mt-2 leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase font-body text-bd-rose hover:text-bd-dark border-b border-bd-rose/30 hover:border-bd-dark pb-0.5 transition-colors duration-300"
          >
            Get in Touch
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
