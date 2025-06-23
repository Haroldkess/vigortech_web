import React from 'react'
import CourseCard from './CourseCard'

export default function Courses() {
  return (
    <section className='px-20'>
      <section className='grid grid-cols-4 gap-10'>
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
          
      </section>
    </section>
  )
}
