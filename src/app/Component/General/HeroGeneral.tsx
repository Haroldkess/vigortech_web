import Image from 'next/image'
import React from 'react'


import { PropsWithChildren } from 'react'

export default function HeroGeneral({ children }: PropsWithChildren) {
    return (
        <header className=" lg:mb-[30vh] mb-40  font-inter pb-40 lg:pb-20  ">
            <section className="relative -z-10 top-[2em] md:top-[10em] h-[70vh] md:h-[50vh] w-full ">
                <section className="flex items-center px-4 md:px-10 lg:px-20 w-full  justify-evenly">

                    {/* bg image 1 */}
                    <section className='absolute top-10 left-[-30em]'>
                        <Image src={'/bgEarth.png'} alt='sise image 1' width={1000} height={1000} className='' />
                    </section>


                    {/* hero content */}
                    <section>
                        {children}
                    </section>

                    {/* bg image 2 */}
                    <section className='absolute top-[-10em] right-[-30em]'>
                        <Image src={'/bgEarth.png'} alt='sise image 1' width={1000} height={1000} className='' />
                    </section>

                </section>
            </section>
        </header>
    )
}
