"use client"; // This must be the first line
import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
const Menu = () => {
    const [open, setOpen] = useState(false);
  return (
   <>
       <div className="">
        <div onClick={() => setOpen((prev) => !prev)} className=''>
        {open ? <RxCross2 /> : <FaBarsStaggered />}
        </div>
      {open && (
        <div className="absolute bg-black text-white left-0 top-[134px] w-full h-[calc(100vh- -100px)] flex flex-col items-center justify-center gap-8 text-xl py-4  z-10">
          <Link href="/">Home</Link>
          <Link href="/">Pages</Link>
          <Link href="/shoping">Products</Link>
          <Link href="/blogpage">Blog</Link>
          <Link href="/">Shop</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </div>
   </>
  )
}

export default Menu