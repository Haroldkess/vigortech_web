import React from 'react'

export default function SectionTitle({ title }: { title: string }) {
    return (
        <span className="inline-flex drop-shadow-2xl  backdrop-blur-md bg-[#6CC78840] items-center gap-2 border border-[#48B96B] rounded-full px-4 py-1  text-sm font-semibold">
            <span className="bg-[#4CCC73] w-4 h-4 rounded-full border-1  border-[#ADFBC5] flex items-center justify-center">

                <span className="w-2 h-2 rounded-full bg-[#ADFBC5] block"></span>
            </span>
            {title}
        </span>
    )
}
