'use client'
import Image from 'next/image'
import Link from 'next/link'


interface Card {
  imageUrl: string,
  cardTitle: string,
  description: string,
  studentLevel: string,
  isFlag: boolean
  id: number,
  link: string,
  duration: string
}


export default function CourseCard({ imageUrl, cardTitle, description, studentLevel, isFlag, id, link, duration }: Card) {
  const href = link?.startsWith('http://') || link?.startsWith('https://') ? link : `https://${link}`


  return (
    <section
      className="rounded-xl  font-Inter border flex flex-col justify-between border-[#86868659] text-[#EAF5F4A6] h-full"
      style={{
        background:
          "linear-gradient(rgba(23, 22, 21, 80), rgba(51, 51, 51, 0.20))",
      }}
    >
      <section>
        <Image
          src={imageUrl}
          alt="sise image 1"
          quality={100}
          width={300}
          height={300}
          className="object-cover w-full  h-[186.8px] rounded-t-xl"
        />
      </section>
      <section className="px-4 py-6 flex flex-col gap-y-10 relative flex-1">
        {isFlag && (
          <section className="absolute top-[-0.8rem] left-0">
            <Image
              src={"/Institute/flagship.svg"}
              alt="calendar_today"
              width={150}
              height={150}
              className=""
            />
          </section>
        )}
        <section className="flex flex-col gap-2">
          <h3 className="text-[#FFFFFF] font-semibold text-[16px] leading-[18.36px] md:w-[18vw] ">
            {cardTitle}
          </h3>
          <p className="text-[12px] self-stretch justify-start text-emerald-50/60  font-normal  md:leading-[16px] leading-[12px] ">
            {description}
          </p>

          {/* <section className={`flex gap-4 ${id === 1 && ("md:pt-4")}`}> */}
          <section className={`flex gap-4 md:absolute top-[60%]`}>
            <div className="flex text-[10px] gap-2">
              <Image
                src={"/Institute/school.svg"}
                alt="school"
                width={15}
                height={15}
                className=""
              />
              <span>{studentLevel}</span>
            </div>

            <div className="flex text-[10px] gap-2">
              <Image
                src={"/Institute/calendar_today.svg"}
                alt="calendar_today"
                width={15}
                height={15}
                className=""
              />
              <span>{duration}</span>
            </div>
          </section>
        </section>

        <section
          className={`flex justify-between items-center w-full ${id === 1 && "md:absolute bottom-6 md:px-4 left-0"
            }  ${id === 4 && "md:absolute bottom-6 md:px-4 left-0"}`}
        >
          <div className="flex text-[10px] gap-2">
            <Image
              src={"/Institute/students.svg"}
              alt="calendar_today"
              width={40}
              height={40}
              className=""
            />
            <span>limited slots left</span>
          </div>

          <div>
            <Link
              href={href}
              className="bg-[#48B96B] hover:bg-[#6CC788] text-[#171615] px-4 py-1 text-[11.8px] font-semibold rounded-sm inline-block"
            >
              Enroll Now
            </Link>
          </div>
        </section>
      </section>
    </section>
  );
}
