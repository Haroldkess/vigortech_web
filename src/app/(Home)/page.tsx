import React from "react";
import HeroSection from "../Component/HomePage/HeroSection";
import AboutUs from "../Component/HomePage/AboutUs";
import OurStat from "../Component/HomePage/OurStat";
import Testimonials from "../Component/HomePage/Testimonials";
import NavBar from "../Component/HomePage/NavBar";
import Footer from "../Component/General/Footer";
import NewsLetter from "../Component/HomePage/NewsLetter";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />

      <section className="shadow-2xl">

        <AboutUs />

        <section className="flex justify-center items-center w-full py-20">
          <Image src={'/line.svg'} alt="line" width={1000} height={10} className="h-10 w-[100vw]" />
        </section>

        <OurStat />

        <section className="flex justify-center items-center w-full py-20">
          <Image src={'/line.svg'} alt="line" width={1000} height={10} className="h-10 w-[100vw]" />
        </section>
        <Testimonials />
        <NewsLetter />
        <Footer />
      </section>
    </main>
  );
}
