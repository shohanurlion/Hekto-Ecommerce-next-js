import React from 'react'
import Container from './Container'
import Link from 'next/link'

const Subtitle = () => {
  return (
    <div className='pb-[126px] pt-[96px] bg-[#F6F5FF]'>
        <Container>
            <div className=''>
                <h3 className='pb-3'>Blog Page</h3>
                <ul className='flex items-center gap-1'>
                    <Link href={`/`}><li className='cursor-pointer'>Home .</li></Link>
                    <li className='cursor-pointer'>Pages .</li>
                    <li className='text-[#FB2E86] cursor-pointer'>Blog Page</li>
                </ul>
            </div>
        </Container>
    </div>
  )
}

export default Subtitle