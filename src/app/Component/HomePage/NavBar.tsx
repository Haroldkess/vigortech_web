"use client";
import { FaAngleDown } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import React, { useState } from "react";

export default function NavBar() {
  const [showMenu, setMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<
    "company" | "products" | null
  >(null);

  return (
    <>
      <nav className="flex fixed flex-col justify-center items-center w-full mt-10  gap-y-2 z-50 ">
        <section className="bg-transparent bg-[rgba(23, 22, 21, 0.20)] drop-shadow-xl lg:w-[1272px] md:w-[90vw] w-[95vw] backdrop-blur-sm z-50 rounded-xl text-white  p-[16px]  border shadow-2xl border-[#868686D9] h-[88px]">
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
                  <li onMouseEnter={() => setActiveDropdown("company")}>
                    <section className="flex gap-1 items-center">
                      Company <FaAngleDown />
                    </section>
                  </li>
                  <li onMouseEnter={() => setActiveDropdown("products")}>
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
                <button className=" h-[40px] w-[200px] px-[20px] py-[10px] text-[16px] font-[500] flex justify-center items-center text-[#171615] rounded-md bg-[#48B96B] hover:bg-[#6CC788]">
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
          <section className="lg:hidden md:w-[90vw] w-[95vw]  text-white/65 px-10 py-8 border shadow-2xl border-[#868686D9] rounded-2xl z-50 bg-transparent bg-[rgba(23, 22, 21, 0.20)] drop-shadow-xl  backdrop-blur-sm z-50 rounded-xl text-white  px-8 py-4 border shadow-2xl border-[#868686D9]  ">
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

        {/* company */}
        {activeDropdown === "company" && (
          <section
            className="relative left-10 top-[-0.5em]  "
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <section className="hidden lg:block w-[30vw] text-white/65 px-6 py-4 border shadow-2xl border-[#868686D9] rounded-2xl z-50 bg-transparent bg-[rgba(23, 22, 21, 0.50)] drop-shadow-xl  backdrop-blur-sm z-50 rounded-xl  border shadow-2xl border-[#868686D9]  ">
              <section>
                <ul className="flex flex-col gap-y-4 text-base text-white">
                  <li className="hover:outline hover:bg-green-600/5  hover:outline-offset-[-1px] hover:outline-green-500/5 rounded-xl">
                    <Link href="/career">
                      <div className="h-24 px-3 py-4 inline-flex justify-start items-center gap-4">
                        <div className="w-[30vw] inline-flex flex-col justify-start items-start gap-1">
                          <div className="  text-white font-inter text-[16px] font-[600] leading-[24px] tracking-[0.08px]">
                            About Us
                          </div>
                          <div className="  text-white/65 font-inter text-[14px] font-[400] leading-[20px] tracking-[0.014px]">
                            Get to know everything about us
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>

                  <li className="hover:outline hover:bg-green-600/5  hover:outline-offset-[-1px] hover:outline-green-500/5 rounded-xl">
                    <Link href="/career">
                      <div className="h-24 px-3 py-4 inline-flex justify-start items-center gap-4">
                        <div className="w-[30vw] inline-flex flex-col justify-start items-start gap-1">
                          <div className="  text-white font-inter text-[16px] font-[600] leading-[24px] tracking-[0.08px]">
                            Blog
                          </div>
                          <div className="  text-white/65 font-inter text-[14px] font-[400] leading-[20px] tracking-[0.014px]">
                            Get to know latest news in the in tech space
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>

                  <li className="hover:outline hover:bg-green-600/5  hover:outline-offset-[-1px] hover:outline-green-500/5 rounded-xl">
                    <Link href="/career">
                      <div className="h-24 px-3 py-4 inline-flex justify-start items-center gap-4">
                        <div className="w-[30vw] inline-flex flex-col justify-start items-start gap-1">
                          <div className="  text-white font-inter text-[16px] font-[600] leading-[24px] tracking-[0.08px]">
                            Career
                          </div>
                          <div className="  text-white/65 font-inter text-[14px] font-[400] leading-[20px] tracking-[0.014px]">
                            What to the join our team? Find out about openings
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </section>
            </section>
          </section>
        )}

        {/* products */}
        {activeDropdown === "products" && (
          <section
            className="relative left-48 top-[-0.5em]  "
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <section className="hidden lg:block w-[35vw] text-white/65 px-6 py-4 border shadow-2xl border-[#868686D9] rounded-2xl z-50 bg-transparent bg-[rgba(23, 22, 21, 0.50)] drop-shadow-xl  backdrop-blur-sm z-50 rounded-xl  border shadow-2xl border-[#868686D9]  ">
              <section>
                <ul className="flex flex-col gap-y-4 text-base text-white">
                  <li className="hover:outline hover:bg-green-600/5  hover:outline-offset-[-1px] hover:outline-green-500/5 rounded-xl">
                    <Link href="/career">
                      <div className="h-24 px-3 py-4 inline-flex justify-start items-center gap-4">
                        <div className="w-[30vw] inline-flex flex-col justify-start items-start gap-1">
                          <div className="  text-white font-inter text-[16px] font-[600] leading-[24px] tracking-[0.08px]">
                            Technology
                          </div>
                          <div className="  text-white/65 font-inter text-[14px] font-[400] leading-[20px] tracking-[0.014px]">
                            From cloud infrastructure to AI-powered
                            applications, our team of experts is ready to help
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>

                  <li className="hover:outline hover:bg-green-600/5  hover:outline-offset-[-1px] hover:outline-green-500/5 rounded-xl">
                    <Link href="/career">
                      <div className="h-24 px-3 py-4 inline-flex justify-start items-center gap-4">
                        <div className="w-[30vw] inline-flex flex-col justify-start items-start gap-1">
                          <div className="  text-white font-inter text-[16px] font-[600] leading-[24px] tracking-[0.08px]">
                            Education
                          </div>
                          <div className="  text-white/65 font-inter text-[14px] font-[400] leading-[20px] tracking-[0.014px]">
                            Empowering people with the knowledge and skills they
                            need to thrive in a rapidly changing world.
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>

                  <li className="hover:outline hover:bg-green-600/5  hover:outline-offset-[-1px] hover:outline-green-500/5 rounded-xl">
                    <Link href="/career">
                      <div className="h-24 px-3 py-4 inline-flex justify-start items-center gap-4">
                        <div className="w-[30vw] inline-flex flex-col justify-start items-start gap-1">
                          <div className="  text-white font-inter text-[16px] font-[600] leading-[24px] tracking-[0.08px]">
                            Finance
                          </div>
                          <div className="  text-white/65 font-inter text-[14px] font-[400] leading-[20px] tracking-[0.014px]">
                            empowering people to take control of their financial
                            futures.
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </section>
            </section>
          </section>
        )}
      </nav>
    </>
  );
}
