import React from 'react'
import Image from 'next/image';
import image from '../../public/image 15.png'; // Make sure the path is correct
const Cartone = () => {
  return (
   <>
    <div className="relative group max-w-sm p-4 bg-white rounded-lg shadow-md">
      {/* Product Image */}
      <div className="overflow-hidden">
        <Image
          src={image}
          alt="Comfort Handy Craft"
          className="w-full h-auto object-cover"
          width={500} // You should specify width and height for Next.js Image
          height={500}
        />
      </div>

      {/* Sale Ribbon (Appears Always) */}
      <div className="absolute top-2 left-2 bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded-sm">
        Sale
      </div>

      {/* Hover Icons (Hidden by default, show on hover) */}
      <div className="absolute left-2 top-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex flex-col space-y-2">
          {/* Cart Icon */}
          <div className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h18l-1 13H4L3 3zM10 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm8 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              />
            </svg>
          </div>

          {/* Heart Icon */}
          <div className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8c0-3.866-3.582-7-8-7S5 4.134 5 8c0 2.226 1.02 4.01 2.667 5.341L12 18.5l4.333-5.159C19.98 12.01 21 10.226 21 8z"
              />
            </svg>
          </div>

          {/* Zoom Icon */}
          <div className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11.25A3.75 3.75 0 1111.25 7.5m6.856 12.106l-3.75-3.75M18.75 11.25A7.5 7.5 0 1111.25 3.75"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className=" flex justify-between mt-4 text-center">
        <h2 className="text-lg font-semibold">Comfort Handy Craft</h2>
        <div className="flex justify-center space-x-2 text-gray-600">
          <span className="text-lg font-bold text-gray-900">$42.00</span>
          <span className="text-red-500 line-through">$65.00</span>
        </div>
      </div>
    </div>
   </>
  )
}

export default Cartone