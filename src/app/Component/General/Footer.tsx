import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FooterLink from "./FooterLinks";

const Footer = () => {
  const footerLinks = {
    Company: [
      { label: "About us", href: "/about-us", isReady: true },
      { label: "Blog", href: "#", isReady: false },
      { label: "Career", href: "/career", isReady: true },
    ],
    Products: [
      { label: "Technology", href: "/focus-area#tech", isReady: true },
      { label: "Education", href: "/focus-area#education", isReady: true },
      { label: "Finance", href: "/focus-area#finance", isReady: true },
    ],
    "Social Media": [
      {
        label: "X (Twitter)",
        href: "https://x.com/vigortech?s=21",
        isReady: true,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/vigortechofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        isReady: true,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/share/15kqtd4Kyc/?mibextid=wwXIfr",
        isReady: true,
      },
    ],
    Support: [
      { label: "Contact us", href: "/contact-us", isReady: true },
      { label: "Community", href: "#", isReady: false },
    ],
  };

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

          <div className="grid md:grid-cols-4 grid-cols-1 md:gap-x-24 md:gap-y-6 gap-y-10 text-sm text-gray-300 z-50">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="space-y-3">
                <h3 className="text-[#EAF5F4A6]">{section}</h3>
                <ul className="space-y-5 text-white">
                  {links.map((link) => (
                    <li key={link.label}>
                      <FooterLink href={link.href} isReady={link.isReady}>
                        {link.label}
                      </FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="md:px-8 px-4">
          <hr className=" border-[#868686A6] my-8 " />
        </div>

        <div className="flex flex-col sm:flex-row md:justify-between md:items-center text-[#EAF5F4A6] text-sm px-4 md:px-10 gap-4 z-50">
          <p>©2021 Vigortech, Inc. All rights reserved</p>
          <div className="flex space-x-6 text-[#EAF5F4A6] text-lg">
            <a
              aria-label="Facebook"
              className="hover:text-white"
              href="https://www.facebook.com/share/15kqtd4Kyc/?mibextid=wwXIfr"
            >
              <FaFacebookF />
            </a>
            <a
              aria-label="Instagram"
              className="hover:text-white"
              href="https://www.instagram.com/vigortechofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            >
              <FaInstagram />
            </a>
            <a
              aria-label="X Twitter"
              className="hover:text-white"
              href="https://x.com/vigortech?s=21"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
