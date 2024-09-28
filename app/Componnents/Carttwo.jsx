import Image from 'next/image'
import React from 'react'
import cartimg from '../../public/image 15.png'
import { CiShoppingCart,CiHeart  } from "react-icons/ci";
import { AiOutlineZoomIn } from "react-icons/ai";
const Carttwo = () => {
  return (
    <>
      <div className="relative w-72 bg-white rounded-lg overflow-hidden shadow-lg group transition-all duration-300 ease-in-out hover:bg-gray-50">

        {/* Icons (Initially Hidden, Appear on Hover) */}
        <div className="absolute top-4 left-4 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <i className="fas fa-shopping-cart text-blue-500 hover:text-blue-700"><CiShoppingCart /></i>
          <i className="fas fa-heart text-blue-500 hover:text-blue-700"><CiHeart /></i>
          <i className="fas fa-plus text-blue-500 hover:text-blue-700"><AiOutlineZoomIn /></i>
        </div>

        {/* Image Section */}
        <div className="p-4 flex justify-center">
          <Image src={cartimg} alt='cart' />
          {/* View Details Button (Initially Hidden, Appears on Hover) */}
          <div className="absolute bottom-16 left-1/2 top-[52%] transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">
              View Details
            </button>
          </div>
        </div>



        {/* Info Section */}
        <div className="bg-blue-600 text-white text-center py-4">
          <h3 className="text-lg font-semibold">Cantilever chair</h3>
          <div className="flex justify-center space-x-2 my-2">
            <span className="bg-pink-500 w-3 h-3 rounded-full inline-block"></span>
            <span className="bg-green-500 w-3 h-3 rounded-full inline-block"></span>
            <span className="bg-blue-500 w-3 h-3 rounded-full inline-block"></span>
          </div>
          <p>Code - Y523201</p>
          <p className="text-lg font-bold">$42.00</p>
        </div>
      </div>
    </>
  )
}

export default Carttwo