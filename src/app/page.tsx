import React from "react";
import HeroSection from "./Component/HomePage/HeroSection";
import AboutUs from "./Component/HomePage/AboutUs";
import OurStat from "./Component/HomePage/OurStat";
import Testimonials from "./Component/HomePage/Testimonials";
import NavBar from "./Component/HomePage/NavBar";
import Footer from "./Component/General/Footer";
import NewsLetter from "./Component/HomePage/NewsLetter";


export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />

      <section className="shadow-2xl">

        <AboutUs />
        <OurStat />
        <Testimonials />
        <NewsLetter />
        {/* <Footer /> */}
      </section>
    </main>
  );
}
