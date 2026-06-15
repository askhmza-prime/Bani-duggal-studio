import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bani Duggal Makeup Studio | Bridal Makeup Artist Moradabad",
  description:
    "Premium bridal and special occasion makeup artist in Moradabad & Delhi NCR. Specializing in bridal makeup, hairstyling, photography makeup, and beauty transformations.",
  keywords: [
    "bridal makeup artist Moradabad",
    "makeup artist Delhi NCR",
    "Bani Duggal",
    "bridal makeup Moradabad",
    "wedding makeup artist UP",
    "makeup artist Jim Corbett",
  ],
  openGraph: {
    title: "Bani Duggal Makeup Studio",
    description: "Premium bridal makeup artist in Moradabad & Delhi NCR. Book your appointment today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${nunito.variable} font-body antialiased bg-bd-black text-bd-ivory`}
      >
        {children}
      </body>
    </html>
  );
}
