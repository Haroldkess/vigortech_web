import React from 'react'
import SectionTitle from '../General/SectionTitle';
import Image from 'next/image';

export default function Team() {



    return (
        <div className=" text-white min-h-screen flex flex-col items-center justify-center px-4 py-12">
            <div className="text-center max-w-4xl w-full">

                <section>
                    <div className="flex justify-center mb-6">
                        <SectionTitle title="The team" />
                    </div>
                    <h2 className="text-center text-white font-extrabold text-2xl md:text-4xl mb-3 leading-tight">
                        Meet the team
                    </h2>
                    <p className="text-center text-gray-400 max-w-xl mx-auto mb-12 text-sm leading-relaxed">
                        The experts driving our vision forward
                    </p>

                </section>


                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12 ">
                    <section className="relative group overflow-hidden rounded-xl">
                        <Image src="/Teams/co-founder.png" alt="Thoughtful man with glasses"
                            className="rounded-xl w-full object-cover transition-transform duration-500 group-hover:scale-105" height={350}
                            width={300} />

                    
                        <section
                            className="absolute bottom-0 left-[-6em] right-0 p-4 bg-black/5 rounded-b-xl opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                            <h3 className="text-center text-lg font-semibold mt-4 text-white">
                                Harold Osuji
                            </h3>
                            <p className="bg-clip-text text-transparent font-semibold text-center" style={{
                                backgroundImage: "linear-gradient(to right, #48B96B, #48B96B, #CCDC35, #6CC788)",
                            }}>
                                Co-Founder
                            </p>
                        </section>
                    </section>

                    <section className='relative group overflow-hidden rounded-xl'>
                        <Image src="/Teams/VA.png"
                            alt="Smiling woman with braided hair" className="rounded-xl w-full object-cover transition-transform duration-500 group-hover:scale-105" height="350"
                            width="300" />


                        <section
                            className="absolute bottom-0 left-[-6em] right-0 p-4 bg-black/5 rounded-b-xl opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                            <h3 className="text-center text-lg font-semibold mt-4 text-white">
                                Agu Precious
                            </h3>
                            <p className="bg-clip-text text-transparent font-semibold text-center" style={{
                                backgroundImage: "linear-gradient(to right, #48B96B, #48B96B, #CCDC35, #6CC788)",
                            }}>
                                Virtual Assistant
                            </p>
                        </section>
                    </section>

                    <section className='relative group overflow-hidden rounded-xl'>
                        <Image src="/Teams/cto.png"
                            alt="Man with afro hairstyle" className="rounded-xl w-full object-cover transition-transform duration-500 group-hover:scale-105" height="350" width="300" />


                        <section
                            className="absolute bottom-0 left-[-6em] right-0 p-4 bg-black/5 rounded-b-xl opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                            <h3 className="text-center text-lg font-semibold mt-4 text-white">
                                Onomuefor Nelson
                            </h3>
                            <p className="bg-clip-text text-transparent font-semibold text-center" style={{
                                backgroundImage: "linear-gradient(to right, #48B96B, #48B96B, #CCDC35, #6CC788)",
                            }}>
                                CTO
                            </p>
                        </section>
                    </section>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl mx-auto mb-12">
                    <section className='relative group overflow-hidden rounded-xl'>
                        <Image src="/Teams/QA.png"
                            alt="Man with glasses in plaid shirt" className="rounded-xl w-full object-cover transition-transform duration-500 group-hover:scale-105" height="350"
                            width="300" />


                        <section
                            className="absolute bottom-0 left-[-6em] right-0 p-4 bg-black/5 rounded-b-xl opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                            <h3 className="text-center text-lg font-semibold mt-4 text-white">
                                Boi Uche
                            </h3>
                            <p className="bg-clip-text text-transparent font-semibold text-center" style={{
                                backgroundImage: "linear-gradient(to right, #48B96B, #48B96B, #CCDC35, #6CC788)",
                            }}>
                                QA Engineer
                            </p>
                        </section>
                    </section>

                    <section className='relative group overflow-hidden rounded-xl'>
                        <Image src="/Teams/PD.png"
                            alt="Man with beard and vest" className="rounded-xl w-full object-cover transition-transform duration-500 group-hover:scale-105" height="350" width="300" />


                        <section
                            className="absolute bottom-0 left-[-6em] right-0 p-4 bg-black/5 rounded-b-xl opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                            <h3 className="text-center text-lg font-semibold mt-4 text-white">
                                Coleman Osuji
                            </h3>
                            <p className="bg-clip-text text-transparent font-semibold text-center" style={{
                                backgroundImage: "linear-gradient(to right, #48B96B, #48B96B, #CCDC35, #6CC788)",
                            }}>
                                Product designer
                            </p>
                        </section>
                    </section>
                </div>


                <div className="flex justify-center">
                    <button type="button"
                        className="inline-flex items-center gap-2 border border-[#1f4f2e] rounded px-5 py-2 text-white text-sm font-medium hover:bg-[#1f4f2e] transition">
                        Join the team
                        <i className="fas fa-arrow-up-right-from-square"></i>
                    </button>
                </div>
            </div >
        </div >
    )
}
