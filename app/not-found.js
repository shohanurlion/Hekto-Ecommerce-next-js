import React from 'react'
import Container from './Componnents/Container'
import Image from 'next/image'
import pageimg from '../public/Group 123.png'
import Link from 'next/link'
import addimg from '../public/image 1174.png'
const notfound = () => {
  return (
    <>
    <Container>
        <div className='w-[100%]'>
            <div className=''>
                <Image src={pageimg} alt='404pageimg' className='w-[50%] mx-auto'/>
            </div>
            <div className=' flex items-center justify-center pb-10'>
              <Link href={`/`}>
              <button className='py-[9px] px-[30px] bg-[#FB2E86] text-[16px] text-[white]'>Back To Home</button>
              </Link>
            </div>
            <div className='flex items-center justify-center py-6'>
              <Image src={addimg} alt='addimg' className='w-[60%]'/>
            </div>
        </div>

    </Container>
    </>
  )
}

export default notfound