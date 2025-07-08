import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface DisplayCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    link?: string;
}

export const DisplayCard = ({ title, description, icon, link }: DisplayCardProps) => {
  return (
    <article
      className="rounded-xl p-8 border border-[#2A2A2A] "
      style={{
        background:
          "linear-gradient(rgba(23, 22, 21, 80), rgba(51, 51, 51, 0.20))",
      }}
    >
      <div className="mb-6">
        {typeof icon === "string" ? (
          <Image src={icon} alt={title} width={50} height={50} className='md:w-[48px] md:h-[48px] h-[32px] w-[32px]' />
        ) : (
          icon
        )}
      </div>
      <h3 className="font-semibold text-white text-[16px] leading-[20.98px] md:text-[22px] mb-2 md:leading-[28px]">
        {title}
      </h3>
      <p className="text-[#EAF5F4A6] text-[14px] leading-[17.98px] tracking-[0.5%] md:text-[16px] mb-6 md:leading-[24px] ">
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

