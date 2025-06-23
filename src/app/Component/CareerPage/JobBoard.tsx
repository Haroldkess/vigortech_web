"use client";
import Image from "next/image";
import React from "react";



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
        <section className="px-20  py-12 sm:py-16">
     
            <div className="mb-8 max-w-3xl">
                <span className="inline-flex items-center gap-2 text-sm font-medium bg-[#2f4f2f] rounded-full px-3 py-1 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80] block" />
                    Open positions
                </span>
                <h1 className="text-3xl font-semibold leading-tight mb-2">
                    Want to join team Vigor?
                </h1>
                <p className="text-[#EAF5F4A6] text-sm max-w-xl">
                    Check out our open form below and fill application form by clicking on it
                </p>
            </div>

            {/* Job Listings */}
            <section className="space-y-8 w-full" >
                {jobs.map((job) => (
                    <article
                        key={job.id}
                        className=" rounded-xl p-8 border border-[#2A2A2A]  space-y-4" style={{ background: 'linear-gradient(rgba(23, 22, 21, 80), rgba(51, 51, 51, 0.20))', }}
                        aria-label={`${job.title} job listing`}
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-white font-semibold text-lg leading-tight">
                                    {job.title}
                                </h2>
                                <div className="flex items-center gap-2 mt-1 text-gray-400 text-sm">
                                    <Image src={'/Career/work.svg'} alt={'work'} width={20} height={20} />
                                    <span>{job.department}</span>
                                </div>
                            </div>
                            <span className="text-[#EAF5F4A6] text-xs whitespace-nowrap">{job.type}</span>
                        </div>
                        <p className="text-[#EAF5F4A6] text-sm max-w-5xl">{job.description}</p>
                        <div className="flex flex-wrap items-center gap-2 text-[#EAF5F4A6] text-xs sm:text-sm">
                            <span className="whitespace-nowrap">Remote</span>
                            <span aria-hidden="true">|</span>
                            <div className="flex items-center gap-2 whitespace-nowrap">
                                <Image src={'/Career/calendar_today.svg'} alt={'calendar_today'} width={20} height={20} />
                                <span>{job.date}</span>
                            </div>
                            <div className="ml-auto flex items-center gap-1 cursor-pointer text-[#EAF5F4A6] hover:text-white whitespace-nowrap">
                                <span className="text-xs">View details</span>
                                <Image src={'/Career/arrow_outward.svg'} alt={'arrow_outward'} width={15} height={15} />
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </section>
    );
};

export default JobBoard;
