import AboutStats from '@/app/Component/AboutUsPage/AboutStat'
import HeroAbout from '@/app/Component/AboutUsPage/HeroAbout'
import OurFocus from '@/app/Component/AboutUsPage/OurFocus'
import OurStory from '@/app/Component/AboutUsPage/OurStory'
import Footer from '@/app/Component/General/Footer'
import NavBar from '@/app/Component/HomePage/NavBar'
import React from 'react'

export default function AboutUs() {
  return (
    <section>
      <NavBar />
      <HeroAbout />
      <section className="shadow-2xl bg-[#171615A6]">
        <AboutStats />
        <OurStory />
        <OurFocus/>
        <Footer/>
      </section>
    </section>
  )
}
