import AboutStats from '@/app/Component/AboutUsPage/AboutStat'
import HeroAbout from '@/app/Component/AboutUsPage/HeroAbout'
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
        <Footer/>
      </section>
    </section>
  )
}
