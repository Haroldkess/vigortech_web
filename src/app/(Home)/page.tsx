import React from "react";
import HeroSection from "../Component/HomePage/HeroSection";
import AboutUs from "../Component/HomePage/AboutUs";
import OurStat from "../Component/HomePage/OurStat";
import Testimonials from "../Component/HomePage/Testimonials";
import NavBar from "../Component/General/NavBar";
import Footer from "../Component/General/Footer";
import NewsLetter from "../Component/HomePage/NewsLetter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#171615] text-white font-inter overflow-hidden">
      <NavBar />
      <HeroSection />

      <section className="shadow-2xl bg-[#171615A6] rounded-t-2xl z-20 border-t border-black/5 w-full">
        <AboutUs />

        <section className="flex justify-center items-center w-full ">
          <Image
            src={"/line.svg"}
            alt="line"
            width={200}
            height={10}
            className="h-10 w-[100vw]"
          />
        </section>

        <OurStat />

        <section className="flex justify-center items-center w-full ">
          <Image
            src={"/line.svg"}
            alt="line"
            width={200}
            height={10}
            className="h-10 w-[100vw]"
          />
        </section>
        <Testimonials />
        <NewsLetter />
        <Footer />
      </section>
    </main>
  );
}
