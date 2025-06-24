import Image from 'next/image'
import React from 'react'

export default function Location() {
  return (
    <section className='w-full flex justify-center relative px-4 md:px-0 top-[-3em]'>
          <Image src={'/Career/location.png'} alt='location' width={1000} height={1000} className='object-cover w-[700px]' />
   </section>
  )
}
