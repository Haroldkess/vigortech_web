import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// z - [-1]
const Footer = () => {
    return (
        <footer className="max-w-7xl  py-20 px-6  md:px-0 relative bg-[#171615A6]  overflow-hidden ">
            <section className="absolute top-[-4em] left-[4em] w-full h-full z-[-1]  blur-3xl">
                <Image src="/footer_bg.svg" alt="VigorTech logo" width={1000} height={1000} className="mb-4 object-cover w-[50vw] " />
            </section>
            <div className="flex  flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-0  py-12 px-20  ">
                <div className="max-w-xs ">
                    <section className="">
                        <Image
                            alt="VigorTech logo with green checkmark and text"
                            className="mb-4"
                            height={50}
                            width={150}
                            src="/logo.svg"
                        />
                        <p className="text-[#EAF5F4A6] text-sm leading-relaxed">
                            Empowering businesses through innovative technology solutions,
                            educational resources, and strategic investments
                        </p>
                    </section>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-24 gap-y-6 text-sm text-gray-300">
                    <div className="space-y-3">
                        <h3 className="text-[#EAF5F4A6]">Company</h3>
                        <ul className="space-y-5">
                            <li><a className="hover:text-white" href="#">About us</a></li>
                            <li><a className="hover:text-white" href="#">Blog</a></li>
                            <li><a className="hover:text-white" href="#">Career</a></li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-[#EAF5F4A6]">Products</h3>
                        <ul className="space-y-5">
                            <li><a className="hover:text-white" href="#">Technology</a></li>
                            <li><a className="hover:text-white" href="#">Education</a></li>
                            <li><a className="hover:text-white" href="#">Finance</a></li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-[#EAF5F4A6]">Social media</h3>
                        <ul className="space-y-5">
                            <li><a className="hover:text-white" href="#">X (Twitter)</a></li>
                            <li><a className="hover:text-white" href="#">Instagram</a></li>
                            <li><a className="hover:text-white" href="#">Facebook</a></li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-[#EAF5F4A6]">Support</h3>
                        <ul className="space-y-5">
                            <li><a className="hover:text-white" href="#">Contact us</a></li>
                            <li><a className="hover:text-white" href="#">Community</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="px-20">
                <hr className="border-gray-700 my-8 " />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm gap-4 px-20">
                <p>©2021 Vigortech, Inc. All rights reserved</p>
                <div className="flex space-x-6 text-gray-400 text-lg">
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
    );
};

export default Footer;
