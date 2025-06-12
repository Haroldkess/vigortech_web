import React from "react";
import HeroSection from "./Component/HomePage/HeroSection";
import AboutUs from "./Component/HomePage/AboutUs";
import OurStat from "./Component/HomePage/OurStat";
import Testimonials from "./Component/HomePage/Testimonials";
import NavBar from "./Component/HomePage/NavBar";


export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <AboutUs />
      <OurStat />
      <Testimonials/>
    </main>
  );
}
