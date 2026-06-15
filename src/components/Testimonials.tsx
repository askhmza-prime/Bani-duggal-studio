const REVIEWS = [
  {
    text: "I'm so grateful for her work and would highly recommend her to any bride. She made me look absolutely stunning on my wedding day — beyond what I imagined!",
    name: "Satisfied Bride",
    occasion: "Bridal Makeup",
    rating: 5,
  },
  {
    text: "The makeup looked stunning and I received soooo many compliments. Bani is truly talented and makes you feel comfortable throughout the whole process.",
    name: "Happy Client",
    occasion: "Special Occasion",
    rating: 5,
  },
  {
    text: "She is one of the best makeup artists in town!! Highly skilled, professional, and uses only the best products. Every rupee is completely worth it.",
    name: "Local Client",
    occasion: "Beauty Makeover",
    rating: 5,
  },
  {
    text: "Bani understood exactly what I wanted and delivered way beyond my expectations. My bridal look was absolutely everything I had ever dreamed of.",
    name: "Another Bride",
    occasion: "Bridal Makeup",
    rating: 5,
  },
];

const StarIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-bd-ivory">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-[10px] tracking-[0.5em] uppercase font-body text-bd-rose">
            Reviews
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-bd-dark">
            What{" "}
            <span className="italic text-bd-rose">Clients Say</span>
          </h2>

          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="flex gap-0.5 text-bd-gold">
              {[1, 2, 3, 4].map((s) => <StarIcon key={s} />)}
              <svg className="w-3.5 h-3.5 text-bd-gold/35" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="font-display text-3xl font-semibold text-bd-dark leading-none">4.0</span>
            <span className="text-xs font-body text-bd-muted tracking-wide">
              68 reviews on Google
            </span>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-bd-blush/10 flex flex-col justify-between gap-5"
            >
              <div className="space-y-3">
                <div className="flex gap-0.5 text-bd-gold">
                  {[...Array(review.rating)].map((_, j) => <StarIcon key={j} />)}
                </div>
                <p className="text-sm font-body text-bd-charcoal leading-[1.8] font-light italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
              <div className="pt-3 border-t border-bd-blush/10">
                <p className="text-xs font-body font-semibold text-bd-dark">{review.name}</p>
                <p className="text-[10px] tracking-[0.2em] uppercase font-body text-bd-rose mt-0.5">
                  {review.occasion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://maps.app.goo.gl/search/?q=Bani+Duggal+Makeup+Studio+Moradabad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-body text-bd-rose hover:text-bd-dark border-b border-bd-rose/30 hover:border-bd-dark pb-0.5 transition-colors duration-300"
          >
            Read All Reviews on Google
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
