import ContactForm from "@/app/Component/ContactUsPage/Form";
import Footer from "@/app/Component/General/Footer";
import HeroGeneral from "@/app/Component/General/HeroGeneral";
import SectionTitle from "@/app/Component/General/SectionTitle";
import NavBar from "@/app/Component/General/NavBar";
import React from "react";

export default function ContactUs() {
  return (
    <section>
      <NavBar />
      <HeroGeneral>
         <section className="flex flex-col justify-center items-center gap-6 w-full h-full relative z-10 mt-20 md:mt-28">
          <SectionTitle title="Contact us" />
          <section className=" ">
            <h1 className="text-white text-3xl md:text-6xl font-bold text-center">
              Contact Vigortech
            </h1>
            <section className="flex flex-col items-center gap-4  justify-center w-full">
              <p className="text-[#EAF5F4A6] text-md text-md py-4 text-base font-normal text-center mt-4 md:w-[40vw]">
                We&apos;re here to answer your questions and help you leverage
                technology for your business growth.
              </p>
            </section>
          </section>
        </section>
      </HeroGeneral>

      <section className="shadow-2xl bg-[#171615A6] rounded-t-2xl z-20  border-[#262020a6] w-full">
        <section className="flex w-full justify-center items-center flex-col  md:pt-10">
          <ContactForm />
        </section>
        <Footer />
      </section>
    </section>
  );
}
