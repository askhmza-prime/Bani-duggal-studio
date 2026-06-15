"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  "Bridal Makeup",
  "Beauty Makeover",
  "Photography Makeup",
  "Eye Makeup",
  "Fashion Show Makeup",
  "Hairstyling",
  "Clean Makeup",
  "Special Occasion",
  "Makeup Classes",
  "Private Makeup Lessons",
  "Television Makeup",
  "Other",
];

const inputCls =
  "w-full bg-white/[0.03] border border-white/10 focus:border-bd-blush/50 focus:ring-1 focus:ring-bd-blush/20 focus:outline-none text-bd-ivory placeholder:text-bd-silver/30 text-sm font-body rounded-xl px-4 py-3.5 transition-all duration-300";

type FormState = {
  name: string;
  phone: string;
  date: string;
  service: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "", phone: "", date: "", service: "", message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    const text = [
      `Hi Bani Duggal Studio! 👋`,
      ``,
      `Here are my details:`,
      `• Name: ${form.name || "—"}`,
      `• Phone: ${form.phone || "—"}`,
      `• Preferred Date: ${form.date || "—"}`,
      `• Service: ${form.service || "—"}`,
      `• Message: ${form.message || "—"}`,
      ``,
      `Looking forward to hearing from you!`,
    ].join("\n");

    window.open(
      `https://wa.me/918859122220?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-bd-black">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* ─── Left: Info ─── */}
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.5em] uppercase font-body text-bd-blush">
              Get In Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-bd-ivory leading-tight">
              Book Your <br />
              <span className="italic text-bd-champagne">Appointment</span>
            </h2>
            <p className="text-sm font-body text-bd-silver font-light leading-relaxed max-w-sm">
              Fill in the form and we'll connect on WhatsApp to confirm your booking.
              Walk-ins are also welcome during studio hours.
            </p>
          </div>

          <div className="space-y-7">
            {/* WhatsApp */}
            <a
              href="https://wa.me/918859122220"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.858L0 24l6.335-1.662A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 01-5.003-1.367l-.358-.214-3.759.986.999-3.662-.233-.375A9.817 9.817 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase font-body text-bd-silver mb-0.5">
                  WhatsApp &amp; Call
                </p>
                <p className="text-bd-ivory font-body text-sm group-hover:text-bd-champagne transition-colors">
                  +91 88591 22220
                </p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/makeup_baniduggal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-bd-rose/10 border border-bd-rose/20 flex items-center justify-center flex-shrink-0 group-hover:bg-bd-rose/20 transition-colors">
                <svg className="w-4 h-4 text-bd-rose" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase font-body text-bd-silver mb-0.5">
                  Instagram
                </p>
                <p className="text-bd-ivory font-body text-sm group-hover:text-bd-champagne transition-colors">
                  @makeup_baniduggal
                </p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-bd-gold/10 border border-bd-gold/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-bd-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase font-body text-bd-silver mb-0.5">
                  Studio Address
                </p>
                <p className="text-bd-ivory font-body text-sm leading-[1.8]">
                  Dhingra Traders, GMD Rd,<br />
                  near Durga Mandir, Gurhatti,<br />
                  Moradabad, UP 244001
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-bd-champagne/10 border border-bd-champagne/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-bd-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase font-body text-bd-silver mb-0.5">
                  Studio Hours
                </p>
                <p className="text-bd-ivory font-body text-sm">
                  Monday – Sunday<br />
                  <span className="text-bd-champagne">9:00 AM – 8:30 PM</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Right: Booking Form ─── */}
        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-2xl p-8 space-y-5">
          <div>
            <h3 className="font-display text-2xl font-light text-bd-ivory">
              Send a Booking Request
            </h3>
            <p className="text-xs font-body text-bd-silver/60 font-light mt-1">
              We&apos;ll confirm your slot via WhatsApp within a few hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] tracking-[0.3em] uppercase font-body text-bd-silver block mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Priya Sharma"
                className={inputCls}
              />
            </div>
            <div>
              <label className="text-[10px] tracking-[0.3em] uppercase font-body text-bd-silver block mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={inputCls}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] tracking-[0.3em] uppercase font-body text-bd-silver block mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className={inputCls}
              />
            </div>
            <div>
              <label className="text-[10px] tracking-[0.3em] uppercase font-body text-bd-silver block mb-2">
                Service
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={inputCls}
              >
                <option value="" disabled>Select a service</option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-[10px] tracking-[0.3em] uppercase font-body text-bd-silver block mb-2">
              Message <span className="normal-case tracking-normal text-bd-silver/40">(optional)</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your event, look preferences, or any questions..."
              rows={4}
              className={`${inputCls} resize-none`}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-4 bg-bd-rose hover:bg-bd-rose/80 text-bd-ivory text-xs tracking-[0.35em] uppercase font-body font-medium rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-bd-rose/20 hover:-translate-y-0.5 active:translate-y-0"
          >
            Send via WhatsApp →
          </button>

          <p className="text-[10px] text-center text-bd-silver/35 font-body">
            Tapping above opens WhatsApp with your details pre-filled.
            No data is stored on this website.
          </p>
        </div>
      </div>
    </section>
  );
}
