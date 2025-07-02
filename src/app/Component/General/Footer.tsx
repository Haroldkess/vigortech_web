import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// z - [-1]
const Footer = () => {
    return (
      <section className="relative  overflow-x-hidden overflow-y-hidden">
        <section className=" absolute top-0 left-0 w-full h-[50vh] z-20">
          <Image
            src="/footer_bg.svg"
            alt="VigorTech logo"
            width={200}
            height={200}
            className="mb-4 object-cover w-[100vw] md:w-[40vw] "
          />
        </section>
        <footer className=" w-full  py-20 px-0  md:px-0 relative bg-[#171615A6]  overflow-x-hidden  ">
          <div className="flex  flex-col lg:flex-row md:justify-between md:items-start gap-y-12 px-4 md:px-8 md:gap-0  py-12   ">
            <div className="max-w-xs ">
              <section className="">
                <Image
                  alt="VigorTech logo with green checkmark and text"
                  className="mb-4"
                  height={50}
                  width={150}
                  src="/logo.png"
                />
                <p className="text-[#EAF5F4A6] text-sm leading-relaxed">
                  Empowering businesses through innovative technology solutions,
                  educational resources, and strategic investments
                </p>
              </section>
            </div>

            <div className="grid md:grid-cols-4 grid-cols-1 md:gap-x-24 md:gap-y-6 gap-y-10 text-sm text-gray-300">
              <div className="space-y-3">
                <h3 className="text-[#EAF5F4A6]">Company</h3>
                <ul className="space-y-5 text-white">
                  <li>
                    <a
                      className="hover:text-white hover:border-b border-white"
                      href="/about-us"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-white hover:border-b border-white"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-white hover:border-b border-white"
                      href="#"
                    >
                      Career
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-[#EAF5F4A6]">Products</h3>
                <ul className="space-y-5 text-white">
                  <li>
                    <a
                      className="hover:text-white hover:border-b border-white"
                      href="#"
                    >
                      Technology
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-white hover:border-b border-white"
                      href="#"
                    >
                      Education
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-white hover:border-b border-white"
                      href="#"
                    >
                      Finance
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-[#EAF5F4A6]">Social media</h3>
                <ul className="space-y-5 text-white">
                  <li>
                    <a className="hover:text-white" href="#">
                      X (Twitter)
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white" href="#">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white" href="#">
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-[#EAF5F4A6]">Support</h3>
                <ul className="space-y-5 text-white">
                  <li>
                    <a className="hover:text-white" href="#">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white" href="#">
                      Community
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:px-20 px-4">
            <hr className=" border-[#868686A6] my-8 " />
          </div>

          <div className="flex flex-col sm:flex-row md:justify-between md:items-center text-[#EAF5F4A6] text-sm px-4 md:px-10 gap-4 ">
            <p>©2021 Vigortech, Inc. All rights reserved</p>
            <div className="flex space-x-6 text-[#EAF5F4A6] text-lg">
              <a aria-label="Facebook" className="hover:text-white" href="#">
                <FaFacebookF />
              </a>
              <a aria-label="Instagram" className="hover:text-white" href="#">
                <FaInstagram />
              </a>
              <a aria-label="X Twitter" className="hover:text-white" href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
        </footer>
      </section>
    );
};

export default Footer;
