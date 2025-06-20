import Image from 'next/image'
import React from 'react'

type TeamCardProps = {
    imageSrc: string;
    name: string;
    role: string;
};

export default function TeamCard({ imageSrc, name, role }: TeamCardProps) {
    return (
        <section className="relative group overflow-hidden rounded-xl">
            <Image src={imageSrc} alt={name} className="rounded-xl w-full object-cover transition-transform duration-500 group-hover:scale-105" height={350} width={300} />
        
            <section
                className="absolute bottom-0 left-[-6em] text-start right-0 p-4 bg-black/5 rounded-b-xl opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <h3 className="text-center text-lg font-semibold mt-4 text-white">
                    {name}
                </h3>
                <p className="bg-clip-text text-transparent font-semibold text-center" style={{
                    backgroundImage: "linear-gradient(to right, #48B96B, #48B96B, #CCDC35, #6CC788)",
                }}>
                   {role}
                </p>
            </section>
        </section>
    )
}
