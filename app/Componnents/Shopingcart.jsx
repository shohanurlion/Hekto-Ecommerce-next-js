import React from 'react'
import Image from 'next/image';
import { FaShoppingCart, FaSearchPlus, FaHeart } from 'react-icons/fa';
import shopingimg from '../../public/image 1165.png'
import Link from 'next/link';
const Shopingcart = ({ allproduct }) => {

    return (
        <>
            <div className='flex justify-between flex-wrap'>
                {
                    allproduct.products.map((item) => (
                        <Link href={`/shoping/${item.id}`}>
                            <div key={item.id} className="w-[315px] h-[308px] relative flex flex-col items-center p-6 bg-gray-50 mt-4">
                                {/* Chair Image */}
                                <div className="relative group">
                                    <Image
                                        src={item.thumbnail}
                                        alt="Mens Fashion Wear"
                                        width={170}
                                        height={170}
                                    />

                                    {/* Hover Icons - appear on hover */}
                                    <div className="absolute left-[-40px] top-[58%] transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-4">
                                        {/* Cart Icon */}
                                        <div className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                                            <FaShoppingCart className="text-gray-700" size={20} />
                                        </div>

                                        {/* Zoom Icon */}
                                        <div className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                                            <FaSearchPlus className="text-gray-700" size={20} />
                                        </div>

                                        {/* Heart Icon */}
                                        <div className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                                            <FaHeart className="text-gray-700" size={20} />
                                        </div>
                                    </div>
                                </div>

                                {/* Product Title */}
                                <h3 className="mt-4 text-[14px] font-medium text-gray-800 text-center">
                                    {item.title}
                                </h3>

                                {/* Color Indicators */}
                                <div className="flex space-x-2 mt-2">
                                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                                    <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                                    <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                                </div>

                                {/* Product Price */}
                                <div className="flex items-center space-x-2 mt-2">
                                    <p className="text-gray-600">$26.00</p>
                                    <p className="text-red-500 line-through">$42.00</p>
                                </div>
                            </div>
                        </Link>

                    ))
                }
            </div>



        </>
    )
}

export default Shopingcart