"use client"; // This must be the first line
import React, { useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Menu = () => {
    const [open, setOpen] = useState(false);

    const handleLinkClick = () => {
        setOpen(false); // Close the menu when a link is clicked
    };

    return (
        <>
            <div className="">
                <div onClick={() => setOpen((prev) => !prev)} className=''>
                    {open ? <RxCross2 /> : <FaBarsStaggered />}
                </div>
                {open && (
                    <div className="absolute bg-black text-white left-0 top-[81px] w-full h-[calc(100vh- -100px)] flex flex-col items-center justify-center gap-8 text-xl py-4 z-10">
                        <Link href="/" onClick={handleLinkClick}>Home</Link>
                        <Link href="/pages" onClick={handleLinkClick}>Pages</Link>
                        <Link href="/shoping" onClick={handleLinkClick}>Products</Link>
                        <Link href="/blogpage" onClick={handleLinkClick}>Blog</Link>
                        <Link href="/shoplist" onClick={handleLinkClick}>Shop</Link>
                        <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default Menu;
