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
        <Image
          src={imageSrc}
          alt={name}
          className="rounded-xl w-full object-cover transition-transform duration-500 group-hover:scale-125"
          height={1000}
          width={1000}
        />

        <section
          className="absolute bottom-10 lg:bottom-0 left-[-7.5em] text-start right-0 p-4 rounded-b-xl opacity-100 lg:opacity-0 translate-y-10 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500 ease-out group-hover:drop-shadow-2xl border-0   backdrop-blur-[0.5px]"
          style={{
            background: "linear-gradient(to top, #000000 0%, #00000000 100%)",
          }}
        >
          <section className={`${role === "CTO" && " relative left-[1em]"}`}>
            <h3 className="text-center text-lg font-semibold mt-4 text-white">
              {name}
            </h3>
            <p
              className={`bg-clip-text text-transparent font-semibold text-center w-full ${
                role === "CTO" && " relative left-[-4em]"
              }`}
              style={{
                backgroundImage:
                  "linear-gradient(to right, #48B96B, #48B96B, #CCDC35, #6CC788)",
              }}
            >
              <span>{role}</span>
            </p>
          </section>
        </section>
      </section>
    );
}
