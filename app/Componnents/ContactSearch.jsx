import Image from 'next/image'
import React from 'react'
import imagep from '../../public/Group 124.png'

const ContactSearch = () => {
  return (
   <>
   <div className='lg:flex'>
        {/* Search part */}
        <div className='px-2 lg:w-[50%]'>
            <h3>Get In Touch</h3>
            <p className='py-4 text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
           <form action="">
            <div className=' space-y-4 sm:space-y-0 sm:flex gap-x-4'>
            <input type="text" placeholder='Your Name*' className='w-full border-2 border-[#A4B6C8B2] px-[10px] py-[13px] outline-none'/>
            <input type="text" placeholder='Your E-mail' className='w-full border-2 border-[#A4B6C8B2] px-[10px] py-[13px] outline-none'/>
            </div>
            <input type="text" placeholder='Subject*' className='w-full border-2 border-[#A4B6C8B2] px-[10px] py-[13px] my-[35px] outline-none' />
            <textarea name="Massage" id=""  placeholder='Type Your Messege*' className='w-full border-2 border-[#A4B6C8B2] px-[10px] py-[13px] outline-none'></textarea>
            <input type="submit" value="Send Mail" className='px-[40px] py-[9px] bg-[#FB2E86] text-[#FFFFFF] mt-[10px]'></input>
           </form>
        </div>
        {/* Image part */}
        <div className='px-2 py-6 lg:w-[50%]'>
            <Image src={imagep} alt='image'/>
        </div>
   </div>
   </>
  )
}

export default ContactSearch