"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery",  href: "#gallery" },
  { label: "Contact",  href: "#contact" },
];

const WhatsAppIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.858L0 24l6.335-1.662A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 01-5.003-1.367l-.358-.214-3.759.986.999-3.662-.233-.375A9.817 9.817 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bd-dark/95 backdrop-blur-md shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="#home" className="flex flex-col leading-none group">
          <span className="font-display text-xl md:text-2xl font-light tracking-[0.2em] text-bd-champagne uppercase transition-colors group-hover:text-bd-ivory">
            Bani Duggal
          </span>
          <span className="text-[9px] tracking-[0.45em] text-bd-silver uppercase font-body font-light">
            Makeup Studio
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[11px] tracking-[0.2em] uppercase font-body text-bd-silver hover:text-bd-champagne transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/918859122220"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-bd-rose hover:bg-bd-rose/80 text-bd-ivory text-[11px] tracking-[0.2em] uppercase font-body font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-bd-rose/25"
        >
          <WhatsAppIcon />
          Book Now
        </a>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center gap-[5px] p-2"
        >
          <span className={`w-5 h-px bg-bd-champagne block transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`w-5 h-px bg-bd-champagne block transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`w-5 h-px bg-bd-champagne block transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-bd-dark/98 backdrop-blur-md border-t border-white/5 px-6 py-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm tracking-[0.2em] uppercase font-body text-bd-silver hover:text-bd-champagne transition-colors py-3 border-b border-white/[0.03]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/918859122220"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-bd-rose text-bd-ivory text-xs tracking-[0.25em] uppercase font-body font-medium rounded-full mt-4"
          >
            <WhatsAppIcon />
            Book on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
