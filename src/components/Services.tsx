const SERVICES = [
  {
    icon: "💍",
    title: "Bridal Makeup",
    desc: "Breathtaking bridal looks crafted for your most special day — from classic elegance to modern glam — tailored to your face and vision.",
    highlight: true,
  },
  {
    icon: "✨",
    title: "Beauty Makeovers",
    desc: "Complete beauty transformations using professional-grade products that enhance your natural features beautifully.",
    highlight: false,
  },
  {
    icon: "📸",
    title: "Photography Makeup",
    desc: "HD-camera-ready makeup designed for studio lighting — ensuring flawless results in every frame and photo.",
    highlight: false,
  },
  {
    icon: "👁️",
    title: "Eye Makeup",
    desc: "From soft definition to dramatic smokey eyes — precision eye artistry for every face shape and occasion.",
    highlight: false,
  },
  {
    icon: "🎭",
    title: "Fashion Show Makeup",
    desc: "Bold, high-impact runway looks that command attention on the ramp and photograph beautifully under show lighting.",
    highlight: false,
  },
  {
    icon: "💇‍♀️",
    title: "Hairstyling",
    desc: "Complete hair styling — from elegant bridal updos to flowing waves — perfectly complementing your makeup look.",
    highlight: false,
  },
  {
    icon: "🌿",
    title: "Clean Makeup",
    desc: "Skin-first, natural-finish looks celebrating your authentic beauty using clean, skin-loving products and techniques.",
    highlight: false,
  },
  {
    icon: "🎓",
    title: "Makeup Classes",
    desc: "Group and private classes for beginners to intermediate artists — learn professional techniques in a hands-on setting.",
    highlight: false,
  },
  {
    icon: "👤",
    title: "Private Lessons",
    desc: "Personalised one-on-one coaching sessions tailored to your skill level and specific makeup learning goals.",
    highlight: false,
  },
  {
    icon: "🎉",
    title: "Special Occasions",
    desc: "Festive and celebratory looks for Sangeet, Mehndi, Receptions, birthdays, and every event worth remembering.",
    highlight: false,
  },
  {
    icon: "📺",
    title: "Television Makeup",
    desc: "Professional HD-ready makeup for TV productions, digital content creation, and on-screen media appearances.",
    highlight: false,
  },
  {
    icon: "🌸",
    title: "Makeovers",
    desc: "Refreshing full-face transformations — perfect as gifted experiences, birthday treats, or personal milestones.",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-bd-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-[10px] tracking-[0.5em] uppercase font-body text-bd-blush">
            What I Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-bd-ivory">
            Services &{" "}
            <span className="italic text-bd-champagne">Specialties</span>
          </h2>
          <p className="text-sm font-body text-bd-silver max-w-sm mx-auto font-light leading-relaxed">
            A complete range of beauty services crafted with precision and passion for every occasion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className={`group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 cursor-default ${
                service.highlight
                  ? "bg-bd-rose/10 border-bd-rose/25 hover:bg-bd-rose/15 hover:border-bd-rose/50"
                  : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10"
              }`}
            >
              <span className="text-2xl mb-4 block">{service.icon}</span>
              <h3
                className={`font-display text-lg font-medium mb-2.5 group-hover:text-bd-champagne transition-colors ${
                  service.highlight ? "text-bd-champagne" : "text-bd-ivory"
                }`}
              >
                {service.title}
              </h3>
              <p className="text-xs font-body text-bd-silver leading-relaxed font-light">
                {service.desc}
              </p>
              {service.highlight && (
                <p className="mt-4 text-[10px] tracking-[0.3em] uppercase font-body text-bd-rose">
                  Most Booked ✦
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="https://wa.me/918859122220?text=Hi%20Bani!%20I%27d%20like%20to%20enquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-bd-rose hover:bg-bd-rose/80 text-bd-ivory text-xs tracking-[0.3em] uppercase font-body font-medium rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-bd-rose/20 hover:-translate-y-0.5"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
