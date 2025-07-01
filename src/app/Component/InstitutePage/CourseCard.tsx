'use client'
import Image from 'next/image'


interface Card {
  imageUrl: string,
  cardTitle: string,
  description: string,
  studentLevel: string,
  isFlag: boolean
}


export default function CourseCard({ imageUrl, cardTitle, description, studentLevel, isFlag }: Card) {


  return (
    <section className="rounded-xl font-Inter border  border-[#86868659] text-[#EAF5F4A6]" style={{ background: 'linear-gradient(rgba(23, 22, 21, 80), rgba(51, 51, 51, 0.20))', }}>
      <section>
        <Image src={imageUrl} alt='sise image 1' width={1000} height={1000} className='object-cover w-full' />
      </section>
      <section className='px-4 py-6 flex flex-col gap-y-10 relative'>
        {
          isFlag &&
          <section className='absolute top-[-0.8rem] left-0'>
            <Image src={'/Institute/flagship.svg'} alt='calendar_today' width={150} height={150} className='' />
          </section>
        }
        <section className='flex flex-col gap-2'>
          <h3 className='text-[#FFFFFF] font-medium text-[16px]'>{cardTitle}</h3>
          <p className='text-[12px]'>{description}</p>

          <section className='flex gap-4'>
            <div className='flex text-[10px] gap-2'>
              <Image src={'/Institute/school.svg'} alt='school' width={15} height={15} className='' />
              <span>{studentLevel}</span>
            </div>

            <div className='flex text-[10px] gap-2'>
              <Image src={'/Institute/calendar_today.svg'} alt='calendar_today' width={15} height={15} className='' />
              <span>12 weeks</span>
            </div>
          </section>
        </section>

        <section className='flex justify-between items-center w-full'>
          <div className='flex text-[10px] gap-2'>
            <Image src={'/Institute/students.svg'} alt='calendar_today' width={40} height={40} className='' />
            <span>200+ Enrolled</span>
          </div>

          <div>
            <button className='bg-[#48B96B] text-[#171615] px-4 py-1 text-[11.8px] font-semibold rounded-sm'>Enroll Now</button>
          </div>
        </section>
      </section>
    </section>
  )
}
