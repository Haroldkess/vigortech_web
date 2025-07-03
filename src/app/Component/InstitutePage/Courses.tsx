import React from 'react'
import CourseCard from './CourseCard'

export default function Courses() {

    const contentCards = [
        {
            id: 1,
            image: "/Institute/img1.svg",
            title: "Full-Stack Flutter and Dart Development",
            description:
                "We bring it all together: clean UI, solid business logic, robust backend, and smooth deployment.",
            level: "Intermediate",
            isFlag:true
        },
        {
            id: 2,
            image: "/Institute/img2.svg",
            title: "Introduction to Dart Programming Language",
            description:
                "Learn the language that powers flutter. If you want to build fast, modern applications, Dart is your starting point.",
            level: "Beginner",
            isFlag: false
        },
        {
            id: 3,
            image: "/Institute/img3.svg",
            title: "Flutter for Beginners: Cross-Platform App Development",
            description:
                "Launch your first application without years of experience. In this course, we’ll Walk you through building your first app.",
            level: "Beginner",
            isFlag: false
        },
        {
            id: 4,
            image: "/Institute/img2.svg",
            title: "Building Backend Systems with Dart",
            description:
                "With this course, you’ll master backend development using Dart, create fast APIs, handle data, and app end-to-end.",
            level: "Beginner",
            isFlag: false
        },
        {
            id: 5,
            image: "/Institute/img3.svg",
            title: "Advanced Cross-Platform Development",
            description:
                "We cover state management, API integration, and building scalable architecture. This is that next leap",
            level: "Intermediate",
            isFlag: false
        },
    ];

  return (
    <section className='md:px-6 px-4 w-full md:pt-10'>

        <section className='py-10 flex flex-col md:flex-row w-full justify-between items-center'>
              <h3 className='text-white font-semibold text-3xl'>Available Courses</h3>

              <p className='text-[#EAF5F4A6] text-base'>5 Courses</p>
        </section>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-2 lg:gap-8 gap-y-10">
                  {contentCards.map((card, index) => (
                      <CourseCard
                          key={card.id}
                          cardTitle={card.title}
                          description={card.description}
                          imageUrl={card.image}
                       studentLevel={card.level}
                          isFlag={card.isFlag}
                      />
                  ))}
              </div>
          
          
     
    </section>
  )
}
