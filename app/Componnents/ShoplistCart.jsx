import Image from 'next/image'
import React from 'react'
import colorimg from '../../public/Group 94.png'
import { IoStar } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { FaRegHeart, FaSearchPlus } from "react-icons/fa";
import Link from 'next/link';

const ShoplistCart = ({ shoplist }) => {
  return (
    <>
      {shoplist.products.map((item) => (
        <div className='w-full md:w-[90%] lg:w-[1141px] h-auto lg:h-[254px] py-[17px] px-[19px] my-4 shadow-md hover:shadow-xl'>
          <div className='flex flex-col lg:flex-row'>
            {/* Image part */}
            <div className='w-full lg:w-[300px]'>
                <Link href={`/shoping/${item.id}`}>
                <Image src={item.thumbnail} alt={item.title} width={300} height={200} className='w-full h-auto lg:w-[300px] lg:h-[200px]' />
                </Link>
            </div>
            {/* Details part */}
            <div className='w-full lg:w-auto px-[20px] lg:px-[32px] my-[20px] lg:my-[32px]'>
              <div className='flex flex-col lg:flex-row items-center gap-y-4 lg:gap-x-6'>
                <h4 className='text-[18px] lg:text-[20px] text-[#111C85] leading-[23px] font-bold'>{item.title}</h4>
                <Image src={colorimg} alt='colorimg' className='w-[60px] h-[20px]' />
              </div>
              <div className='flex flex-wrap items-center gap-x-4 my-[10px] lg:my-[15px]'>
                <span className='text-[15px] text-[#111C85] leading-[18px] font-bold'>${item.price}</span>
                <del className='text-[15px] text-[#FF2AAA] leading-[18px]'>$26.00</del>
                <div className='flex items-center text-[#FFC416]'>
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoIosStarHalf />
                </div>
              </div>
              <p className='text-[15px] lg:text-[17px] text-[#9295AA] leading-[23px] pb-[15px] lg:pb-[25px]'>{item.description}</p>
              <div className='flex items-center gap-x-6 lg:gap-x-8 text-[20px] lg:text-[25px] text-[#535399]'>
                <MdShoppingCart />
                <FaRegHeart />
                <FaSearchPlus />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ShoplistCart;
