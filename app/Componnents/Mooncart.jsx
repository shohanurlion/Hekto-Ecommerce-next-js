import React from 'react'
import Image from 'next/image';
import imges from '../../public/image 20.png'
const Mooncart = () => {
  return (
   <>
     <div className=" w-[269px] h-[345px] relative flex flex-col items-center p-6 bg-[#692323] rounded-lg">
      {/* Chair Image */}
      <div className=" flex justify-center w-[269px] h-[269px] bg-[white] rounded-[50%] relative group">
        <Image
          src={imges}
          alt="Mini LCW Chair"
          width={269}
          height={269}
          className="object-contain"
        />
        {/* Hover Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-green-500 text-white py-2 px-4 rounded-md">
            View Shop
          </button>
        </div>
      </div>

      {/* Product Name */}
      <h3 className="mt-4 text-lg font-medium text-gray-800">Mini LCW Chair</h3>

      {/* Product Price */}
      <p className="mt-2 text-gray-600">$56.00</p>
    </div>
   </>
  )
}

export default Mooncart