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
        <article className="rounded-xl p-8 border border-[#2A2A2A]" style={{ background: 'linear-gradient(rgba(23, 22, 21, 80), rgba(51, 51, 51, 0.20))', }}>
            <div className="mb-4">
                {typeof icon === 'string' ? (
                    <Image src={icon} alt={title} width={30} height={30} />
                ) : (
                    icon
                )}
            </div>
            <h3 className="font-semibold text-white text-lg mb-2">{title}</h3>
            <p className="text-[#EAF5F4A6] text-sm mb-6 leading-relaxed ">
                {description}
            </p>
            {link && (
                <Link href={link} className="text-white font-semibold text-sm flex items-center gap-1 justify-start hover:text-[#B7F2B0] transition-colors duration-300">
                    <p>Learn more </p>
                    <span><FaArrowRight className="text-[#fff]" /></span>
                </Link>
            )}

           
        </article>
    );
};

export default AboutCard;
