import React from "react";
import SectionTitle from "../General/SectionTitle";
import { DisplayCard } from "../General/DisplayCard";

export default function Benfits() {
  const All_benefits = [
    {
      id: 1,
      icon: "/Career/schedule.svg",
      title: "Flexible Work Hours",
      description:
        "We understand the importance of work-life balance. Enjoy flexible schedules that fit your lifestyle.",
    },
    {
      id: 2,
      icon: "/Career/language.svg",
      title: "Remote Work Options",
      description:
        "Work from anywhere. Our distributed team spans across multiple continents and time zones.",
    },
    {
      id: 3,
      icon: "/Career/group.svg",
      title: "Inclusive Team Culture",
      description:
        "Join a diverse and supportive team that values different perspectives and backgrounds.",
    },
    {
      id: 4,
      icon: "/Career/work.svg",
      title: "Career Growth",
      description:
        "Clear career paths and opportunities for advancement in your professional journey.",
    },
    {
      id: 5,
      icon: "/Career/school.svg",
      title: "Learning & Development",
      description:
        "Continuous learning is part of our culture. Access to courses, conferences, and educational resources.",
    },
    {
      id: 6,
      icon: "/Career/favorite.svg",
      title: "Health & Wellness",
      description:
        "As much as we thrive to achieve the growth of the company, your health is always a priority.",
    },
  ];

  return (
    <section className=" px-4 md:px-6  py-16 rounded-t-3xl z-50 bg-[rgba(23, 22, 21, 0.65)] backdrop-blur-2xl hidden md:block ">
      <section className=" ">
        <div className="flex justify-center mb-6">
          <SectionTitle title="Benefits" />
        </div>
        <h2 className="text-center text-white font-semibold text-3xl md:text-[57px] mb-3 leading-[64px]">
          Why work with us?
        </h2>
        <p className="text-center text-[#EAF5F4A6] max-w-xl mx-auto mb-12 text-[16px] leading-[24px]">
          The principles that guide our decisions and define our culture
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-8">
          {All_benefits.map((card, index) => (
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
