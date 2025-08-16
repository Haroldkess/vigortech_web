import React from "react";
import SectionTitle from "../General/SectionTitle";
import { DisplayCard } from "../General/DisplayCard";





export default function OurValues() {
  const valuesData = [
    {
      icon: "/icons/lightbulb.svg",
      title: "Purpose",
      description:
        "We constantly push boundaries and explore new technologies to deliver transformative solutions.",
    },
    {
      icon: "/icons/verified_user.svg",
      title: "Integrity",
      description:
        "We maintain the highest ethical standards in all our business practices and relationships.",
    },
    {
      icon: "/icons/social_leaderboard.svg",
      title: "Excellence",
      description:
        "We strive for outstanding quality in everything we do, from code to customer service.",
    },
    {
      icon: "/icons/handshake.svg",
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and partnership to achieve extraordinary results.",
    },
    {
      icon: "/icons/balance.svg",
      title: "Ethics",
      description:
        "We embrace ethical principles and build solutions that respect and benefit all stakeholders.",
    },
    {
      icon: "/icons/favorite.svg",
      title: "Passion",
      description:
        "We approach every project with enthusiasm and dedication to excellence.",
    },
  ];

  return (
    <section className=" px-4 md:px-6 lg:py-16 rounded-t-3xl z-50 bg-[rgba(23, 22, 21, 0.65)] backdrop-blur-2xl  ">
      <section className=" ">
        <div className="flex justify-center mb-6">
          <SectionTitle title="Values" />
        </div>
        <h2 className="text-[32px] md:text-[57px] font-bold leading-10 md:font-semibold md:leading-[64px] text-center">
          Our Values
        </h2>
        <p className="text-center text-[#EAF5F4A6] max-w-xl mx-auto mb-12 text-[16px] leading-relaxed">
          The principles that guide our decisions and define our culture
        </p>
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-y-4 lg:gap-8">
          {valuesData.map((card, index) => (
            <DisplayCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
