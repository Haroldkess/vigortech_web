import React from 'react'
import CourseCard from './CourseCard'
import Image from 'next/image';

export default function Courses() {

    const contentCards = [
        {
            id: 1,
            image: "/Institute/img1.svg",
            title: "Full-Stack Flutter and Dart Development (Live training)",
            description:
                "We bring it all together: clean UI, solid business logic, robust backend, and smooth deployment.",
            level: "Intermediate",
            isFlag:true,
            duration: "10 weeks",
            link: "https://paystack.shop/pay/wf4-idxeis"
        },
        // {
        //     id: 2,
        //     image: "/Institute/img2.svg",
        //     title: "Introduction to Dart Programming Language",
        //     description:
        //         "Learn the language that powers flutter. If you want to build fast, modern applications, Dart is your starting point.",
        //     level: "",
        //     isFlag: false
        // },
        {
            id: 3,
            image: "/Institute/img3.svg",
            title: "Full-Stack Flutter and Dart Mentorship",
            description:
                "Learn from beginner to expert. Get direct internship placement (Build your cv & portfolio) and land your first job/client",
            level: "All Levels",
            isFlag: false,
            duration: "40 weeks",
            link: "https://paystack.shop/pay/cex43tpw55"
        },
        // {
        //     id: 4,
        //     image: "/Institute/img2.svg",
        //     title: "Building Backend Systems with Dart",
        //     description:
        //         "With this course, you’ll master backend development using Dart, create fast APIs, handle data, and app end-to-end.",
        //     level: "Beginner",
        //     isFlag: false
        // },
        // {
        //     id: 5,
        //     image: "/Institute/img3.svg",
        //     title: "Advanced Cross-Platform Development",
        //     description:
        //         "We cover state management, API integration, and building scalable architecture. This is that next leap",
        //     level: "Intermediate",
        //     isFlag: false
        // },
    ];

  return (
    <section className="md:px-6 px-4 w-full md:pt-10 mb-10">
      <section className="py-10 flex flex-col md:flex-row w-full justify-between items-center">
        <h3 className="text-white font-semibold text-[22px] leading-[28px] md:text-[32px] md:leading-[52px]">
          Available Courses
        </h3>

        <p className="text-[#EAF5F4A6] text-base">2 Courses</p>
      </section>



      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 lg:gap-8 gap-y-10 h-full z-20">
        {contentCards.map((card) => (
          <CourseCard
            key={card.id}
            cardTitle={card.title}
            description={card.description}
            imageUrl={card.image}
            studentLevel={card.level}
            isFlag={card.isFlag}
            id={card.id}
            duration={card.duration}
            link={card.link}
          />
        ))}
      </div>

       <section className="absolute left-0 top-[-20em] md:top-[30vw] translate-x-[80vw] z-5">
                  <Image
                    src={"/bgEarth.png"}
                    alt="Background Earth Left"
                    width={1000}
                    height={1000}
                    className="w-[600px] object-cover md:w-[50vw] max-w-none z-50"
                    priority
                  />
                </section>
    </section>
  );
}
