import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';


interface AboutCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    link?: string;
}

const AboutCard = ({ title, description, icon, link }: AboutCardProps) => {
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
        <h3 className="font-stretch-semi-expanded text-white text-[16.89px] leading-[21.5px] md:text-[22px] mb-2 md:leading-[28px]">
          {title}
        </h3>
        <p className="text-[#EAF5F4A6] font-normal md:text-[16px] mb-6 md:leading-[24px] text-[12.29px] leading-[18.43px]">
          {description}
        </p>
        {link && (
          <Link
            href={link}
            className="group text-white font-medium text-[12.29px] leading-[15.36px] md:text-[16px] md:leading-[20px] flex items-center gap-1 justify-start hover:text-[#48B96B] transition-colors duration-100 "
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

export default AboutCard;
