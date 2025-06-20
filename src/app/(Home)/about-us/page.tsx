import AboutStats from '@/app/Component/AboutUsPage/AboutStat'
import HeroAbout from '@/app/Component/AboutUsPage/HeroAbout'
import OurFocus from '@/app/Component/AboutUsPage/OurFocus'
import OurMission from '@/app/Component/AboutUsPage/OurMission'
import OurStory from '@/app/Component/AboutUsPage/OurStory'
import OurValues from '@/app/Component/AboutUsPage/OurValues'
import Footer from '@/app/Component/General/Footer'
import NavBar from '@/app/Component/HomePage/NavBar'
import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
  return (
    <section>
      <NavBar />
      <HeroAbout />
      <section className="shadow-2xl bg-[#171615A6]">
        <AboutStats />
        <OurStory />
        <OurFocus />
        <section className="flex justify-center items-center w-full py-4">
          <Image src={'/line.svg'} alt="line" width={1000} height={10} className="h-4 w-[100vw]" />
        </section>

        <OurMission />

        <section className="flex justify-center items-center w-full py-4">
          <Image src={'/line.svg'} alt="line" width={1000} height={10} className="h-4 w-[100vw]" />
        </section>

        <OurValues />

        <section className="flex justify-center items-center w-full py-4">
          <Image src={'/line.svg'} alt="line" width={1000} height={10} className="h-4 w-[100vw]" />
        </section>

        <Footer />
      </section>
    </section>
  )
}
