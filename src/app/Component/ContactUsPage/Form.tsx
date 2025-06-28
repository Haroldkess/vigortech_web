"use client";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

const ContactForm = () => {
  return (
    <main className="max-w-6xl w-full rounded-2xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-16">
      {/* Contact Info Section */}
      <section className="space-y-6 max-w-md">
        <h2 className="text-2xl font-bold">Get in touch</h2>
        <p className="text-gray-400 leading-relaxed">
          Have a question, need a consultation, or want to learn more about our
          services? Fill out the form and our team will get back to you
          promptly.
        </p>
        <div className="flex items-center space-x-4">
          <Image src={"/contactUs/mail.svg"} alt="" height={20} width={20} />

          <div className="space-y-0.5">
            <p className="font-semibold text-sm">Email</p>
            <p className="text-gray-400 text-sm">vigortechapp@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
        <form className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium mb-1"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter first name"
                className="w-full rounded-md border border-[#88888840] bg-[#171615A6] px-4 py-2 text-gray-500 placeholder:text-[#EAF5F440] focus:outline-none focus:ring-2 focus:ring-[#48B96B]"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium mb-1"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter last name"
                className="w-full rounded-md border border-[#88888840] bg-[#171615A6] px-4 py-2 text-gray-500 placeholder:text-[#EAF5F440] focus:outline-none focus:ring-2 focus:ring-[#48B96B]"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              className="w-full rounded-md border border-[#88888840] bg-[#171615A6] px-4 py-2 text-gray-500 placeholder:text-[#EAF5F440] focus:outline-none focus:ring-2 focus:ring-[#48B96B]"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={8}
              placeholder="Please provide details about your inquiry"
              className="w-full rounded-md border border-[#88888840] bg-[#171615A6] px-4 py-2 text-gray-500 placeholder:text-[#EAF5F440]  focus:outline-none focus:ring-2 focus:ring-[#48B96B]"
            ></textarea>
          </div>

          {/* Newsletter Checkbox */}
          <div className="flex items-start space-x-3">
            <label className="flex items-start gap-3 cursor-pointer relative">
              <input
                type="checkbox"
                id="subscribe"
                name="subscribe"
                className="peer hidden"
              />
              <span className="mt-1 inline-block w-6 h-6 relative rounded-md border border-white  peer-checked:bg-[#48B96B] peer-checked:border-green-500"></span>

              <FaCheck className="hidden peer-checked:block absolute left-[5px] top-[10px] text-white text-sm pointer-events-none" />

              <div className="flex flex-col">
                <label
                  htmlFor="subscribe"
                  className=" text-white text-lg font-medium leading-tight"
                >
                  Subscribe to newsletter
                </label>
                <p className="text-emerald-50/60 text-base font-normal leading-normal tracking-tight">
                  Receive updates about our latest tech innovations and events.
                </p>
              </div>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#48B96B] hover:bg-[#6CC788] transition-colors w-full md:w-1/2 rounded-md px-8 py-2 font-semibold text-black"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactForm;
