 'use client'
import { FaAngleDown } from 'react-icons/fa'
 
 import Image from 'next/image'
import Link from 'next/link'
import { IoIosMenu, IoIosClose } from "react-icons/io";
import React, { useState } from 'react'

export default function NavBar() {
    const [showMenu, setMenu] = useState(false);
  return (
   <>
         
          <nav className="flex fixed flex-col justify-center items-center w-full mt-10  gap-y-2 z-50 ">
              <section className="bg-transparent bg-[rgba(23, 22, 21, 0.20)] drop-shadow-xl lg:w-[90vw] md:w-[90vw] w-[95vw] backdrop-blur-sm z-50 rounded-xl text-white  px-8 py-4 border shadow-2xl border-[#868686D9] ">
                  <section className="flex justify-between items-center bg-[rgba(23, 22, 21, 0.80)] backdrop-blur-md  py-2">
                      <section>
                          <Image
                              src={"/logo.png"}
                              alt="logo"
                              width={200}
                              height={200}
                              className="lg:w-[150px] w-[100px] "
                          />
                      </section>

                      <section className="flex items-center gap-x-20 ">
                          <section>
                              <ul className="lg:flex gap-x-6 items-center hidden">
                                  <li>
                                      <Link href="/">Home</Link>
                                  </li>
                                  <li>
                                      <section className="flex gap-1 items-center">
                                          Company <FaAngleDown />
                                      </section>
                                  </li>
                                  <li>
                                      <section className="flex gap-1 items-center">
                                          Products <FaAngleDown />
                                      </section>
                                  </li>
                                  <li>
                                      <Link href="/courses">Courses</Link>
                                  </li>
                                  <li>
                                      <Link href="/contact">Contact</Link>
                                  </li>
                              </ul>
                          </section>

                          <section className="lg:flex hidden ">
                              <button className="bg-[#48B96B] px-8 py-2 font-semibold  text-[#171615] rounded-md">
                                  Explore our products
                              </button>
                          </section>

                          {/* mobile button*/}
                          <section className="lg:hidden flex">
                              {!showMenu ? (
                                  <IoIosMenu
                                      className="text-[25px]"
                                      onClick={() => setMenu(!showMenu)}
                                  />
                              ) : (
                                  <IoIosClose
                                      className="text-[30px]"
                                      onClick={() => setMenu(!showMenu)}
                                  />
                              )}
                          </section>
                      </section>
                  </section>
              </section>

              {/* mobile menu */}

              {showMenu && (
                  <section className="lg:hidden md:w-[90vw] w-[95vw]  text-white/65 px-10 py-8 border shadow-2xl border-[#868686D9] rounded-2xl">
                      <section>
                          <ul className="flex flex-col gap-y-10 text-xl ">
                              <li>
                                  <Link href="/">Home</Link>
                              </li>
                              <li>
                                  <section className="flex gap-2 items-center justify-between w-full">
                                      Company <FaAngleDown />
                                  </section>
                              </li>
                              <li>
                                  <Link href="/contact">
                                      <section className="flex gap-2 items-center justify-between w-full">
                                          Products <FaAngleDown />
                                      </section>
                                  </Link>
                              </li>
                              <li>
                                  <Link href="/courses">Courses</Link>
                              </li>
                              <li>
                                  <Link href="/contact">Contact</Link>
                              </li>
                          </ul>
                      </section>

                      <section className=" mt-10 w-full ">
                          <button className="bg-[#48B96B] px-8 py-2 w-full font-semibold text-xl text-[#171615] rounded-md">
                              Explore our products
                          </button>
                      </section>
                  </section>
              )}
          </nav>
   </>
  )
}
