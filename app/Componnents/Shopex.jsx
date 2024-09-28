import Image from 'next/image'
import React from 'react'
import cars from '../../public/Group (1).png'
const Shopex = () => {
  return (
   <>
   <div className='w-[270px]'>
   <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        {/* image*/}
        <Image src={cars} alt='car'/>
      </div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">24/7 Support</h3>
      <p className="text-gray-400 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
      </p>
    </div>
   </div>
    
   </>
  )
}

export default Shopex