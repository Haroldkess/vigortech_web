import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAngleDown } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="flex justify-center items-center w-full mt-10 ">
      <section className="  bg-transparent w-[85vw] text-white px-8 py-4 border shadow-2xl border-[#868686D9] rounded-2xl">
        <section className="flex justify-between items-center">
          <section>
            <Image
              src={"/logo.png"}
              alt="logo"
              width={200}
              height={200}
              className="w-[150px] "
            />
          </section>

          <section className="flex items-center gap-x-20">
            <section>
              <ul className="flex gap-4 items-center">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <section className="flex gap-2 items-center">
                    Company <FaAngleDown />
                  </section>
                </li>
                <li>
                  <Link href="/contact">
                    <section className="flex gap-2 items-center">
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

            <section>
              <button className="bg-[#48B96B] px-8 py-2 text-[#171615] rounded-md">
                Explore our products
              </button>
            </section>
          </section>
        </section>
      </section>
    </nav>
  );
}
