"use client";

import Image from "next/image";
import { useState } from "react";

/*
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ALL GALLERY IMAGES GO IN: /public/images/gallery/
 *
 * Naming & sizes:
 *  bridal-1.jpg      → 600 × 800 px (3:4 portrait)
 *  bridal-2.jpg      → 600 × 800 px (3:4 portrait)
 *  bridal-3.jpg      → 600 × 800 px (3:4 portrait)
 *  bridal-4.jpg      → 800 × 600 px (4:3 landscape)
 *  bridal-5.jpg      → 600 × 800 px (3:4 portrait)
 *  editorial-1.jpg   → 800 × 600 px (4:3 landscape)
 *  editorial-2.jpg   → 600 × 600 px (1:1 square)
 *  editorial-3.jpg   → 600 × 800 px (3:4 portrait)
 *  occasion-1.jpg    → 600 × 600 px (1:1 square)
 *  occasion-2.jpg    → 600 × 800 px (3:4 portrait)
 *  occasion-3.jpg    → 600 × 600 px (1:1 square)
 *  hairstyling-1.jpg → 600 × 800 px (3:4 portrait)
 *
 * Format: JPG, quality 80+, max 250 KB each
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
  aspect: "portrait" | "landscape" | "square";
};

const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/images/gallery/bridal-1.jpg",      alt: "Bridal Makeup Look",          category: "Bridal",      aspect: "portrait"  },
  { src: "/images/gallery/editorial-1.jpg",   alt: "Editorial Makeup",            category: "Editorial",   aspect: "landscape" },
  { src: "/images/gallery/occasion-1.jpg",    alt: "Party Occasion Look",         category: "Occasion",    aspect: "square"    },
  { src: "/images/gallery/bridal-2.jpg",      alt: "Traditional Bridal Look",     category: "Bridal",      aspect: "portrait"  },
  { src: "/images/gallery/hairstyling-1.jpg", alt: "Bridal Hair Styling",         category: "Hairstyling", aspect: "portrait"  },
  { src: "/images/gallery/editorial-2.jpg",   alt: "Bold Editorial Makeup",       category: "Editorial",   aspect: "square"    },
  { src: "/images/gallery/bridal-3.jpg",      alt: "Bridal Transformation",       category: "Bridal",      aspect: "portrait"  },
  { src: "/images/gallery/occasion-2.jpg",    alt: "Sangeet Occasion Look",       category: "Occasion",    aspect: "portrait"  },
  { src: "/images/gallery/bridal-4.jpg",      alt: "Bride Full Look",             category: "Bridal",      aspect: "landscape" },
  { src: "/images/gallery/editorial-3.jpg",   alt: "Fashion Makeup",              category: "Editorial",   aspect: "portrait"  },
  { src: "/images/gallery/occasion-3.jpg",    alt: "Festive Occasion Look",       category: "Occasion",    aspect: "square"    },
  { src: "/images/gallery/bridal-5.jpg",      alt: "Modern Bridal Makeup",        category: "Bridal",      aspect: "portrait"  },
];

const CATEGORIES = ["All", "Bridal", "Editorial", "Occasion", "Hairstyling"];

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxSrc, setLightboxSrc]       = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-bd-dark">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <p className="text-[10px] tracking-[0.5em] uppercase font-body text-bd-blush">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-bd-ivory">
            The{" "}
            <span className="italic text-bd-champagne">Work</span>
          </h2>
          <p className="text-sm font-body text-bd-silver max-w-xs mx-auto font-light">
            A glimpse into transformations that celebrate beauty in every form.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-[11px] tracking-[0.2em] uppercase font-body transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-bd-rose text-bd-ivory shadow-md shadow-bd-rose/20"
                  : "border border-white/10 text-bd-silver hover:border-white/20 hover:text-bd-ivory"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 [column-gap:12px]">
          {filtered.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="mb-3 break-inside-avoid relative overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setLightboxSrc(img.src)}
            >
              <div
                className={`relative w-full bg-white/[0.03] ${
                  img.aspect === "portrait"  ? "aspect-[3/4]" :
                  img.aspect === "landscape" ? "aspect-[4/3]" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-bd-black/0 group-hover:bg-bd-black/35 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="border border-white/40 text-bd-ivory text-[10px] tracking-[0.35em] uppercase font-body px-4 py-2 rounded-full backdrop-blur-sm">
                    View
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-14">
          <a
            href="https://www.instagram.com/makeup_baniduggal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3 border border-white/10 hover:border-bd-blush/40 text-bd-silver hover:text-bd-ivory text-xs tracking-[0.25em] uppercase font-body rounded-full transition-all duration-300"
          >
            <InstagramIcon />
            @makeup_baniduggal &nbsp;·&nbsp; 10K+ Followers
          </a>
        </div>
      </div>

      {/* ─── Lightbox ─── */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-bd-black/92 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            className="absolute top-5 right-6 text-[11px] tracking-[0.35em] uppercase font-body text-bd-silver hover:text-bd-ivory transition-colors z-10"
            onClick={() => setLightboxSrc(null)}
          >
            Close ✕
          </button>
          <div
            className="relative w-full max-w-xl max-h-[88vh]"
            style={{ aspectRatio: "auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxSrc}
              alt="Gallery preview"
              width={700}
              height={900}
              className="object-contain rounded-2xl max-h-[88vh] w-auto mx-auto"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
