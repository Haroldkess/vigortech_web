import React from 'react'
import CourseCard from './CourseCard'

export default function Courses() {

    const contentCards = [
        {
            id: 1,
            image: "/Institute/img1.png",
            title: "Full-Stack Flutter and Dart Development",
            description:
                "We bring it all together: clean UI, solid business logic, robust backend, and smooth deployment.",
            level: "Intermediate",
        },
        {
            id: 2,
            image: "/Institute/img2.png",
            title: "Introduction to Dart Programming Language",
            description:
                "Learn the language that powers flutter. If you want to build fast, modern applications, Dart is your starting point.",
            level: "Beginner",
        },
        {
            id: 3,
            image: "/Institute/img3.png",
            title: "Flutter for Beginners: Cross-Platform App Development",
            description:
                "Launch your first application without years of experience. In this course, we’ll Walk you through building your first app.",
            level: "Beginner",
        },
        {
            id: 4,
            image: "/Institute/img2.png",
            title: "Building Backend Systems with Dart",
            description:
                "With this course, you’ll master backend development using Dart, create fast APIs, handle data, and app end-to-end.",
            level: "Beginner",
        },
        {
            id: 4,
            image: "/Institute/img3.png",
            title: "Advanced Cross-Platform Development",
            description:
                "We cover state management, API integration, and building scalable architecture. This is that next leap",
            level: "Intermediate",
        },
    ];

  return (
    <section className='px-20'>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-2 lg:gap-8">
                  {contentCards.map((card, index) => (
                      <CourseCard
                          key={index}
                          cardTitle={card.title}
                          description={card.description}
                          imageUrl={card.image}
                       studentLevel={card.level}
                      />
                  ))}
              </div>
          
          
     
    </section>
  )
}
