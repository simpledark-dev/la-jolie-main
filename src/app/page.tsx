import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurSalon from "@/components/OurSalon";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <OurSalon />
      <Services />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
