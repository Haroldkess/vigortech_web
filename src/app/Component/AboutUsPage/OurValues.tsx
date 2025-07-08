import React from "react";
import SectionTitle from "../General/SectionTitle";
// import AboutCard from "../HomePage/AboutCard";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


interface AboutCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    link?: string;
}

const OurValuesCard = ({ title, description, icon, link }: AboutCardProps) => {
  return (
    <article
      className="rounded-xl p-8 border border-[#2A2A2A] "
      style={{
        background:
          "linear-gradient(rgba(23, 22, 21, 80), rgba(51, 51, 51, 0.20))",
      }}
    >
      <div className="mb-4">
        {typeof icon === "string" ? (
          <Image src={icon} alt={title} width={30} height={30} />
        ) : (
          icon
        )}
      </div>
      <h3 className="font-semibold text-white text-[22px] mb-2 leading-[28px]">
        {title}
      </h3>
      <p className="text-[#EAF5F4A6] text-sm mb-6 leading-[17.98px;] ">
        {description}
      </p>
      {link && (
        <Link
          href={link}
          className="group text-white font-semibold text-sm flex items-center gap-1 justify-start hover:text-[#48B96B] transition-colors duration-100 "
        >
          <p>Learn more </p>
          <span>
            <FaArrowRight className="text-[#fff] transition-transform duration-100 group-hover:text-[#48B96B]" />
          </span>
        </Link>
      )}
    </article>
  );
};

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
            <OurValuesCard
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
