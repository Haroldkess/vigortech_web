import React from "react";
import HeroSection from "./Component/HomePage/HeroSection";
import AboutUs from "./Component/HomePage/AboutUs";
import OurStat from "./Component/HomePage/OurStat";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <OurStat />
    </main>
  );
}
