import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        {/* Contact section now has extra bottom padding so the 
            floating Book button never overlaps page content */}
        <div className="pb-24">
          <Contact />
        </div>
      </main>
      <Footer />

      {/* Booking modal renders floating button + bottom sheet globally */}
      <BookingModal />
    </>
  );
}
