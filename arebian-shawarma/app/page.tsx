import LoadingScreen from "../components/loading-screen";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import PopularDishes from "../components/popular-dishes";
import WhyChooseUs from "../components/why-choose-us";
import InteractiveMenu from "../components/interactive-menu";
import SpecialOffer from "../components/special-offer";
import Gallery from "../components/gallery";
import Reviews from "../components/reviews";
import Statistics from "../components/statistics";
import About from "../components/about";
import FAQ from "../components/faq";
import Contact from "../components/contact";
import Footer from "../components/footer";
import {
  ScrollProgress,
  GlowCursor,
  WhatsAppFloat,
  StickyOrderMobile,
} from "../components/widgets";

export default function Home() {
  return (
    <>
      {/* 1. Preloader Screen overlay */}
      <LoadingScreen />

      {/* 2. Top Interactive Indicator Widgets */}
      <ScrollProgress />
      <GlowCursor />

      {/* 3. Global Navbar Header */}
      <Navbar />

      {/* 4. Core Landing Sections */}
      <main className="w-full flex-1">
        <Hero />
        <PopularDishes />
        <WhyChooseUs />
        <InteractiveMenu />
        <SpecialOffer />
        <Gallery />
        <Reviews />
        <Statistics />
        <About />
        <FAQ />
        <Contact />
      </main>

      {/* 5. Footer & Bottom Overlay CTAs */}
      <Footer />
      <WhatsAppFloat />
      <StickyOrderMobile />
    </>
  );
}

