"use client";
import Image from "next/image";
import React from "react";
import SectionTitle from "../General/SectionTitle";

const JobBoard = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Engineering",
      type: "Full-time",
      description:
        "We're looking for a Senior Software Engineer to join our team to develop high-performance web applications and contribute to our technology ecosystem.",
      date: "Posted April 28, 2025",
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      type: "Full-time",
      description:
        "Join our product team to drive the vision and strategy for our enterprise software solutions. You'll work closely with engineering, design, and business teams.",
      date: "Posted April 28, 2025",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      department: "Design",
      type: "Full-time",
      description:
        "We're looking for a talented UX/UI Designer who can create beautiful, intuitive interfaces for our products. You'll work closely with our product and engineering teams.",
      date: "Posted May 1, 2025",
    },
  ];

  return (
    <section className="md:px-20 px-6 md:py-12 sm:py-16">
      <div className="mb-8 max-w-3xl">
        <SectionTitle title="Open positions" />

        <h1 className="text-xl md:text-3xl font-semibold py-4 leading-tight mb-2">
          Want to join team Vigor?
        </h1>
        <p className="text-[#EAF5F4A6] text-sm max-w-xl">
          Check out our open form below and fill application form by clicking on
          it
        </p>
      </div>

      {/* Job Listings */}
      <section className="md:space-y-8 space-y-10 w-full">
        {jobs.map((job) => (
          <article
            key={job.id}
            className=" rounded-xl p-8 border border-[#2A2A2A]  space-y-8"
            style={{
              background:
                "linear-gradient(rgba(23, 22, 21, 80), rgba(51, 51, 51, 0.20))",
            }}
            aria-label={`${job.title} job listing`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-white font-semibold text-lg leading-tight">
                  {job.title}
                </h2>
                <div className="flex items-center gap-2 mt-1 text-[#EAF5F4A6] text-sm">
                  <Image
                    src={"/Career/work.svg"}
                    alt={"work"}
                    width={20}
                    height={20}
                  />
                  <span>{job.department}</span>
                </div>
              </div>
              <span className="text-[#EAF5F4A6] text-xs whitespace-nowrap">
                {job.type}
              </span>
            </div>
            <p className="text-[#EAF5F4A6] text-sm max-w-5xl">
              {job.description}
            </p>
            <div className="flex  flex-col md:flex-row  items-start md:items-center gap-2 text-[#EAF5F4A6] text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="">Remote</span>
                <span aria-hidden="true">|</span>
                <div className="flex items-center gap-2 ">
                  <Image
                    src={"/Career/calendar_today.svg"}
                    alt={"calendar_today"}
                    width={20}
                    height={20}
                  />
                  <span>{job.date}</span>
                </div>
              </div>

              <div className="md:ml-auto flex items-center gap-1 cursor-pointer text-[#EAF5F4A6] hover:text-white ">
                <span className="text-xs">View details</span>
                <Image
                  src={"/Career/arrow_outward.svg"}
                  alt={"arrow_outward"}
                  width={15}
                  height={15}
                />
              </div>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default JobBoard;
