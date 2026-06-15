"use client";

import { useState } from "react";

const SERVICES = [
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

type Form = {
  name: string;
  phone: string;
  date: string;
  service: string;
  message: string;
};

const CalendarIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const WAIcon = ({ size = 5 }: { size?: number }) => (
  <svg className={`w-${size} h-${size}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.858L0 24l6.335-1.662A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 01-5.003-1.367l-.358-.214-3.759.986.999-3.662-.233-.375A9.817 9.817 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
  </svg>
);

export default function BookingModal() {
  const [open, setOpen]           = useState(false);
  const [success, setSuccess]     = useState(false);
  const [error, setError]         = useState("");
  const [form, setForm]           = useState<Form>({
    name: "", phone: "", date: "", service: "", message: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setError("");
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onClose = () => {
    setOpen(false);
    setTimeout(() => {
      setSuccess(false);
      setError("");
      setForm({ name: "", phone: "", date: "", service: "", message: "" });
    }, 400);
  };

  const onSubmit = () => {
    // Basic validation
    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!form.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }
    if (!form.service) {
      setError("Please select a service.");
      return;
    }

    const lines = [
      "Hi Bani! 👋",
      "",
      "I'd like to book an appointment. Here are my details:",
      `• Name     : ${form.name}`,
      `• Phone    : ${form.phone}`,
      `• Date     : ${form.date || "Flexible / To be decided"}`,
      `• Service  : ${form.service}`,
      form.message ? `• Message  : ${form.message}` : null,
      "",
      "Looking forward to hearing from you! 🌸",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/918859122220?text=${encodeURIComponent(lines)}`,
      "_blank"
    );

    setSuccess(true);

    // Auto-close after showing success
    setTimeout(() => {
      onClose();
    }, 2200);
  };

  const inputCls =
    "w-full bg-white/[0.05] border border-white/[0.08] focus:border-bd-blush/60 focus:ring-2 focus:ring-bd-blush/15 focus:outline-none text-bd-ivory placeholder:text-white/20 text-[15px] font-body rounded-2xl px-4 py-3.5 transition-all duration-300 appearance-none";

  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FLOATING BOOK BUTTON — always visible
          Fixed at bottom center of every page
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="fixed bottom-5 left-0 right-0 z-40 flex justify-center pointer-events-none">
        <button
          onClick={() => setOpen(true)}
          className="pointer-events-auto relative flex items-center gap-2.5 px-7 py-4 bg-bd-rose text-white font-body font-bold text-[13px] tracking-[0.22em] uppercase rounded-full shadow-2xl shadow-bd-rose/50 active:scale-95 transition-all duration-200 select-none"
        >
          {/* Pulse glow ring — draws eye on mobile */}
          <span className="absolute inset-0 rounded-full bg-bd-rose/60 animate-ping pointer-events-none" />
          <CalendarIcon />
          Book Appointment
        </button>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MODAL OVERLAY + BOTTOM SHEET
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {open && (
        <>
          {/* Dimmed backdrop */}
          <div
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm animate-fade-bg"
            onClick={onClose}
          />

          {/* Bottom Sheet Panel */}
          <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center animate-slide-up">
            <div
              className="w-full max-w-lg bg-bd-dark border-t border-white/[0.07] rounded-t-[2.5rem] overflow-hidden"
              style={{ maxHeight: "92dvh" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Scrollable content */}
              <div className="overflow-y-auto overscroll-contain" style={{ maxHeight: "92dvh" }}>

                {/* Drag Handle */}
                <div className="flex justify-center pt-3">
                  <div className="w-10 h-[3px] rounded-full bg-white/15" />
                </div>

                <div className="px-5 pt-5 pb-12">

                  {/* ── Sheet Header ── */}
                  <div className="flex items-start justify-between mb-7">
                    <div>
                      <p className="text-[9px] tracking-[0.5em] uppercase font-body text-bd-blush mb-1 font-medium">
                        Bani Duggal Studio
                      </p>
                      <h2 className="font-display text-[2rem] font-light text-bd-ivory leading-none">
                        Book Appointment
                      </h2>
                      <p className="text-xs font-body text-white/30 font-light mt-1.5">
                        Confirm your slot instantly via WhatsApp
                      </p>
                    </div>

                    {/* Close X */}
                    <button
                      onClick={onClose}
                      className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all flex-shrink-0 mt-1"
                      aria-label="Close"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* ── SUCCESS STATE ── */}
                  {success ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
                      <div className="w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center">
                        <svg className="w-9 h-9 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="space-y-1">
                        <p className="font-display text-2xl text-bd-ivory">Opening WhatsApp...</p>
                        <p className="text-xs font-body text-white/40 font-light">
                          Your details are pre-filled and ready to send
                        </p>
                      </div>
                    </div>

                  ) : (
                    /* ── FORM ── */
                    <div className="space-y-4">

                      {/* Error banner */}
                      {error && (
                        <div className="flex items-center gap-2.5 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                          <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.834-1.964-.834-2.732 0L4.082 16.5C3.312 18.333 4.274 20 5.814 20z" />
                          </svg>
                          <p className="text-xs font-body text-red-300">{error}</p>
                        </div>
                      )}

                      {/* Full Name */}
                      <div>
                        <label className="flex items-center gap-1 text-[10px] tracking-[0.3em] uppercase font-body text-white/50 mb-2">
                          Full Name
                          <span className="text-bd-rose text-xs normal-case tracking-normal">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={onChange}
                          placeholder="Your full name"
                          autoComplete="name"
                          className={inputCls}
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="flex items-center gap-1 text-[10px] tracking-[0.3em] uppercase font-body text-white/50 mb-2">
                          Phone Number
                          <span className="text-bd-rose text-xs normal-case tracking-normal">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={onChange}
                          placeholder="+91 98765 43210"
                          autoComplete="tel"
                          inputMode="tel"
                          className={inputCls}
                        />
                      </div>

                      {/* Date + Service — side by side */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] tracking-[0.3em] uppercase font-body text-white/50 mb-2">
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={onChange}
                            className={inputCls}
                          />
                        </div>
                        <div>
                          <label className="flex items-center gap-1 text-[10px] tracking-[0.3em] uppercase font-body text-white/50 mb-2">
                            Service
                            <span className="text-bd-rose text-xs normal-case tracking-normal">*</span>
                          </label>
                          <select
                            name="service"
                            value={form.service}
                            onChange={onChange}
                            className={`${inputCls} cursor-pointer`}
                          >
                            <option value="" disabled>Select...</option>
                            {SERVICES.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-[10px] tracking-[0.3em] uppercase font-body text-white/50 mb-2">
                          Message{" "}
                          <span className="normal-case tracking-normal text-white/25 text-[10px]">
                            (optional)
                          </span>
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={onChange}
                          placeholder="Event details, look preferences, questions..."
                          rows={3}
                          className={`${inputCls} resize-none`}
                        />
                      </div>

                      {/* ── WhatsApp CTA Button ── */}
                      <button
                        onClick={onSubmit}
                        className="w-full py-4 bg-[#25D366] hover:bg-[#1ebe5d] active:scale-[0.97] text-white font-body font-bold text-[13px] tracking-[0.2em] uppercase rounded-2xl transition-all duration-200 shadow-xl shadow-green-500/20 flex items-center justify-center gap-3 mt-1"
                      >
                        <WAIcon size={5} />
                        Send Booking on WhatsApp
                      </button>

                      {/* Direct call fallback */}
                      <a
                        href="tel:+918859122220"
                        className="w-full py-3.5 border border-white/[0.08] hover:border-white/20 active:scale-[0.97] text-white/50 hover:text-white/80 font-body text-[12px] tracking-[0.2em] uppercase rounded-2xl transition-all duration-200 flex items-center justify-center gap-2.5"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        Or Call Directly: +91 88591 22220
                      </a>

                      <p className="text-[10px] font-body text-white/20 text-center pt-1">
                        WhatsApp opens with details pre-filled · No data stored on this site
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
