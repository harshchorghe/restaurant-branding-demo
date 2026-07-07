'use client';

import { useState } from "react";
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

const INITIAL_REVIEWS = [
  {
    id: 0,
    name: 'Ahmed Al-Farsi',
    role: 'Verified Customer',
    rating: 5,
    text: 'The best shawarma I have ever had. Extremely juicy meat, perfectly spiced, and the garlic toum was mind-blowingly authentic. Tastes exactly like home.',
  },
  {
    id: 1,
    name: 'Fatima Shaikh',
    role: 'Local Food Guide',
    rating: 5,
    text: 'Arabian Shawarma is a culinary masterpiece! Every bite of the mutton saj wraps takes me straight back to Beirut. The packaging and details are premium.',
  },
  {
    id: 2,
    name: 'Rahul Sen',
    role: 'Food Blogger',
    rating: 5,
    text: 'The loaded shawarma fries are to die for, and the spicy zinger burger is crispy beyond belief. Highly recommend ordering the family platter for groups!',
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    role: 'Fine Dining Reviewer',
    rating: 5,
    text: 'Incredible spices, premium branding, and extremely fast delivery. The charcoal smoke infusion makes their grilled chicken shawarmas uniquely superior.',
  },
];

export default function Home() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);

  const handleAddReview = (newReview: { name: string; text: string; rating: number; role: string }) => {
    const formattedReview = {
      ...newReview,
      id: reviews.length,
    };
    setReviews((prev) => [formattedReview, ...prev]);
  };

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
        <Reviews reviews={reviews} />
        <Statistics />
        <About />
        <FAQ />
        <Contact />
      </main>

      {/* 5. Footer & Bottom Overlay CTAs */}
      <Footer onAddReview={handleAddReview} />
      <WhatsAppFloat />
      <StickyOrderMobile />
    </>
  );
}
