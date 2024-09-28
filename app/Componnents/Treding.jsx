import Image from 'next/image'
import React from 'react'
import boximg from '../../public/box for image.png'
const Treding = () => {
  return (
    <>
    <div className="w-[270px] h-[350px] bg-white shadow-lg rounded-lg p-4">
    <Image src={boximg} alt='boxfor img'/>
      <h3 className="text-lg text-center font-semibold text-blue-900 mb-2 pt-3">Cantilever chair</h3>
      <div className="flex items-center justify-center space-x-2">
        <span className="text-xl font-bold text-blue-900">$26.00</span>
        <span className="text-gray-400 line-through">$42.00</span>
      </div>
    </div>

    </>
  )
}

export default Treding