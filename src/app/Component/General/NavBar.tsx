"use client";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import React, { useState } from "react";

export default function NavBar() {
  const [showMenu, setMenu] = useState(false);
  const [dropCompany, setDropCompany] = useState(false);
  const [dropProduct, setDropProduct] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<
    "company" | "products" | null
  >(null);

  return (
    <>
      <nav className="flex fixed flex-col justify-center items-center w-full mt-10  gap-y-2 z-50 ">
        <section className="bg-transparent bg-[rgba(23, 22, 21, 0.20)] drop-shadow-xl lg:w-[1272px] md:w-[90vw] w-[95vw]  backdrop-blur-sm z-50 rounded-xl text-white  p-[16px]  border shadow-2xl border-[#868686D9] h-[64px] lg:h-[88px]">
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
                    Company{" "}
                    {dropCompany ? (
                      <FaAngleUp onClick={() => setDropCompany(false)} />
                    ) : (
                      <FaAngleDown onClick={() => setDropCompany(true)} />
                    )}
                  </section>
                  {dropCompany && (
                    <section className="flex flex-col gap-4 mt-2 text-white">
                      <p>About Us</p>
                      <p>Blog</p>
                      <p>Career</p>
                    </section>
                  )}
                </li>
                <li>
                  <section className="flex gap-2 items-center justify-between w-full">
                    Products{" "}
                    {dropProduct ? (
                      <FaAngleUp onClick={() => setDropProduct(false)} />
                    ) : (
                      <FaAngleDown onClick={() => setDropProduct(true)} />
                    )}
                  </section>
                  {dropProduct && (
                    <section className="flex flex-col gap-4 mt-2 text-white">
                      <p>Technology</p>
                      <p>Education</p>
                      <p>Finance</p>
                    </section>
                  )}
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
            <section className="hidden lg:block w-[35vw] text-white/65 px-6 py-4 border shadow-2xl border-[#868686D9] rounded-2xl z-50 bg-transparent bg-[rgba(23, 22, 21, 0.75)] drop-shadow-xl  backdrop-blur-sm z-50 rounded-xl  border shadow-2xl border-[#868686D9]  ">
              <section>
                <ul className="flex flex-col gap-y-4 text-base text-white">
                  <li className="hover:outline hover:bg-green-600/5  hover:outline-offset-[-1px] hover:outline-green-500/5 rounded-xl">
                    <Link href="/career">
                      <div className="h-24 px-3 py-4 inline-flex justify-start items-center gap-4">
                        <div className=" inline-flex flex-col justify-start items-start gap-1">
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
                        <div className=" inline-flex flex-col justify-start items-start gap-1">
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
                        <div className=" inline-flex flex-col justify-start items-start gap-1">
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
                  
                  {/* Technology */}
                  <li className="group hover:outline hover:bg-green-600/5 hover:outline-offset-[-1px] hover:outline-green-500/5 rounded-xl">
                    <Link href="/career">
                      <div className="h-24 px-3 py-4 inline-flex justify-start items-center gap-4">
                        <section className="w-[26px] h-[26px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <defs>
                              <linearGradient
                                id="gradient-fill"
                                x1="12"
                                y1="3"
                                x2="12"
                                y2="21"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#48B96B" />
                                <stop offset="1" stopColor="#B2FAC8" />
                              </linearGradient>
                            </defs>
                            <mask
                              id="icon-mask"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            >
                              <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#icon-mask)">
                              {/* Default Path */}
                              <path
                                d="M9 15V9H15V15H9ZM11 13H13V11H11V13ZM9 21V19H7C6.45 19 5.97917 18.8042 5.5875 18.4125C5.19583 18.0208 5 17.55 5 17V15H3V13H5V11H3V9H5V7C5 6.45 5.19583 5.97917 5.5875 5.5875C5.97917 5.19583 6.45 5 7 5H9V3H11V5H13V3H15V5H17C17.55 5 18.0208 5.19583 18.4125 5.5875C18.8042 5.97917 19 6.45 19 7V9H21V11H19V13H21V15H19V17C19 17.55 18.8042 18.0208 18.4125 18.4125C18.0208 18.8042 17.55 19 17 19H15V21H13V19H11V21H9ZM17 17V7H7V17H17Z"
                                className="fill-[#EAF5F4A6] group-hover:opacity-0 transition-opacity duration-300"
                              />
                              {/* Hover Gradient Path */}
                              <path
                                d="M9 15V9H15V15H9ZM11 13H13V11H11V13ZM9 21V19H7C6.45 19 5.97917 18.8042 5.5875 18.4125C5.19583 18.0208 5 17.55 5 17V15H3V13H5V11H3V9H5V7C5 6.45 5.19583 5.97917 5.5875 5.5875C5.97917 5.19583 6.45 5 7 5H9V3H11V5H13V3H15V5H17C17.55 5 18.0208 5.19583 18.4125 5.5875C18.8042 5.97917 19 6.45 19 7V9H21V11H19V13H21V15H19V17C19 17.55 18.8042 18.0208 18.4125 18.4125C18.0208 18.8042 17.55 19 17 19H15V21H13V19H11V21H9ZM17 17V7H7V17H17Z"
                                fill="url(#gradient-fill)"
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              />
                            </g>
                          </svg>
                        </section>

                        <div className="inline-flex flex-col justify-start items-start gap-1">
                          <div className="text-white font-inter text-[16px] font-[600] leading-[24px] tracking-[0.08px]">
                            Technology
                          </div>
                          <div className="text-white/65 font-inter text-[14px] font-[400] leading-[20px] tracking-[0.014px]">
                            From cloud infrastructure to AI-powered
                            applications, our team of experts is ready to help
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                  {/* Education */}
                  <li className="group hover:outline hover:bg-green-600/5 hover:outline-offset-[-1px] hover:outline-green-500/5 rounded-xl">
                    <Link href="/career">
                      <div className="h-24 px-3 py-4 inline-flex justify-start items-center gap-4">
                        <section className="w-[24px] h-[24px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <defs>
                              <linearGradient
                                id="educationGradient"
                                x1="12"
                                y1="3"
                                x2="12"
                                y2="21"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#48B96B" />
                                <stop offset="1" stopColor="#B2FAC8" />
                              </linearGradient>
                            </defs>

                            <mask
                              id="mask0_education"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            >
                              <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>

                            <g mask="url(#mask0_education)">
                              {/* Default Fill Path */}
                              <path
                                d="M12 21L5 17.2V11.2L1 9L12 3L23 9V17H21V10.1L19 11.2V17.2L12 21ZM12 12.7L18.85 9L12 5.3L5.15 9L12 12.7ZM12 18.725L17 16.025V12.25L12 15L7 12.25V16.025L12 18.725Z"
                                className="fill-[#EAF5F4A6] group-hover:opacity-0 transition-opacity duration-300"
                              />
                              {/* Hover Gradient Path */}
                              <path
                                d="M12 21L5 17.2V11.2L1 9L12 3L23 9V17H21V10.1L19 11.2V17.2L12 21ZM12 12.7L18.85 9L12 5.3L5.15 9L12 12.7ZM12 18.725L17 16.025V12.25L12 15L7 12.25V16.025L12 18.725Z"
                                fill="url(#educationGradient)"
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              />
                            </g>
                          </svg>
                        </section>

                        <div className="inline-flex flex-col justify-start items-start gap-1">
                          <div className="text-white font-inter text-[16px] font-[600] leading-[24px] tracking-[0.08px]">
                            Education
                          </div>
                          <div className="text-white/65 font-inter text-[14px] font-[400] leading-[20px] tracking-[0.014px]">
                            Empowering people with the knowledge and skills they
                            need to thrive in a rapidly changing world.
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                  {/* Finance */}
                  <li className="group hover:outline hover:bg-green-600/5 hover:outline-offset-[-1px] hover:outline-green-500/5 rounded-xl">
                    <Link href="/career">
                      <div className="h-24 px-3 py-4 inline-flex justify-start items-center gap-4">
                        <section className="w-[24px] h-[24px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <defs>
                              <linearGradient
                                id="financeGradient"
                                x1="12"
                                y1="3"
                                x2="12"
                                y2="21"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#48B96B" />
                                <stop offset="1" stopColor="#B2FAC8" />
                              </linearGradient>
                            </defs>

                            <mask
                              id="mask0_finance"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            >
                              <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>

                            <g mask="url(#mask0_finance)">
                              {/* Default Fill */}
                              <path
                                d="M15 16H19V12H17.5V14.5H15V16ZM12 15C12.8333 15 13.5417 14.7083 14.125 14.125C14.7083 13.5417 15 12.8333 15 12C15 11.1667 14.7083 10.4583 14.125 9.875C13.5417 9.29167 12.8333 9 12 9C11.1667 9 10.4583 9.29167 9.875 9.875C9.29167 10.4583 9 11.1667 9 12C9 12.8333 9.29167 13.5417 9.875 14.125C10.4583 14.7083 11.1667 15 12 15ZM5 12H6.5V9.5H9V8H5V12ZM2 19V5H22V19H2ZM4 17H20V7H4V17Z"
                                className="fill-[#EAF5F4A6] group-hover:opacity-0 transition-opacity duration-300"
                              />
                              {/* Hover Gradient Fill */}
                              <path
                                d="M15 16H19V12H17.5V14.5H15V16ZM12 15C12.8333 15 13.5417 14.7083 14.125 14.125C14.7083 13.5417 15 12.8333 15 12C15 11.1667 14.7083 10.4583 14.125 9.875C13.5417 9.29167 12.8333 9 12 9C11.1667 9 10.4583 9.29167 9.875 9.875C9.29167 10.4583 9 11.1667 9 12C9 12.8333 9.29167 13.5417 9.875 14.125C10.4583 14.7083 11.1667 15 12 15ZM5 12H6.5V9.5H9V8H5V12ZM2 19V5H22V19H2ZM4 17H20V7H4V17Z"
                                fill="url(#financeGradient)"
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              />
                            </g>
                          </svg>
                        </section>

                        <div className="inline-flex flex-col justify-start items-start gap-1">
                          <div className="text-white font-inter text-[16px] font-[600] leading-[24px] tracking-[0.08px]">
                            Finance
                          </div>
                          <div className="text-white/65 font-inter text-[14px] font-[400] leading-[20px] tracking-[0.014px]">
                            Empowering people to take control of their financial
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
