"use client"
import Link from 'next/link';
import Image from "next/image";
import logo from '../../public/Hekto.png';
import Menu from './Menu';
import SearchBar from './SearchBar';
import Container from './Container';
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className={isSticky ? 'navbar sticky' : 'navbar'}>
      <Container>
      <div className='h-20'>
          {/* Mobile Navbar */}
          <div className='h-full flex items-center justify-between lg:hidden'>
            <Image src={logo} alt='Logo' width={100} height={40} />
            <Menu />
          </div>

          {/* Larger Screen Navbar */}
          <div className='hidden lg:flex items-center justify-between gap-8 h-full'>
            <div className='flex items-center justify-between w-full lg:w-[50%] gap-6'>
              <Image src={logo} alt='Logo' width={100} height={40} />
              <div className='hidden lg:flex gap-6'>
                <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
                <Link href="/" className="hover:text-blue-500 transition-colors">Pages</Link>
                <Link href="/shoping" className="hover:text-blue-500 transition-colors">Products</Link>
                <Link href="/blogpage" className="hover:text-blue-500 transition-colors">Blog </Link>
                <Link href="/shoplist" className="hover:text-blue-500 transition-colors">Shop</Link>
                <Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
              </div>
            </div>
            <div className='hidden lg:flex w-full lg:w-[50%] justify-end'>
              <SearchBar/>
            </div>
          </div>
        </div>
      </Container>
      
      </div>
    </>
  );
};

export default Navbar;
