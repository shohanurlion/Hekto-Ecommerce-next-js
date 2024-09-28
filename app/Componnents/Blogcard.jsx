import Image from 'next/image'
import React from 'react'
import Blogimg from "../../public/JIUjvqe2ZHg.png"
import pen from "../../public/Vector.png"
import clender from "../../public/uil_calendar-alt.png"
const Blogcard = () => {
  return (
    <>
        <div className="w-[370px] h-[493px] bg-white shadow-md rounded-lg overflow-hidden">
        <Image src={Blogimg} alt='blogcard'/>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span className="flex items-center mr-4">
           <Image src={pen} alt='pen'/>
            SaberAli
          </span>
          <span className="flex items-center">
          <Image src={clender} alt='pen'/>
            21 August, 2020
          </span>
        </div>
        <h3 className="text-xl font-semibold text-blue-900 mb-2">
          Top esssential Trends in 2021
        </h3>
        <p className="text-gray-500 mb-4">
          More off this less hello samlande lied much over tightly circa horse
          taped mightly
        </p>
        <a href="#" className="text-blue-500 font-semibold underline">
          Read More
        </a>
      </div>
    </div>
    </>
  )
}

export default Blogcard