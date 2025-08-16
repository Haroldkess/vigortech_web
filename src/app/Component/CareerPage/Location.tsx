import Image from 'next/image'
import React from 'react'

export default function Location() {
  return (
    <section className='w-full flex justify-center relative px-4 md:px-0 top-[-10em]'>
          <Image src={'/Career/location.png'} quality={100} alt='location' width={1000} height={1000} className='object-cover md:w-[70vw]' />
   </section>
  )
}
