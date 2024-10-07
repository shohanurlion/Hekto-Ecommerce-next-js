import Container from '@/app/Componnents/Container'
import React from 'react'

function page() {
  return (
   <>
   
    <Container className='flex justify-center'>
        <div className='w-[544px] h-[474px] flex items-center justify-center border-2 border-[black]'>
        <div className='w-[433px] h-[374px]'>
            <div className=' text-center py-4'>
                <h3>Login</h3>
                <p className='text-[#9096B2] text-[17px]'>Please login using account detail bellow.</p>
            </div>
            <form action="" className='space-y-4'>
                <input type="email" placeholder='Email' className='w-full border-2 border-[#A4B6C8B2] px-[10px] py-[13px] outline-none'/>
                <input type="password" placeholder='Email' className='w-full border-2 border-[#A4B6C8B2] px-[10px] py-[13px] outline-none'/>
                <p className='text-[#9096B2] text-[17px]'>Forgot your password?</p>
                <input type="submit" value="Send Mail" className='w-full px-[40px] py-[9px] bg-[#FB2E86] text-[#FFFFFF] mt-[10px]'></input>
                <p className='text-[#9096B2] text-[17px]'>Don’t have an Account?Create account</p>
            </form>
        </div>
        </div>
        
    </Container>

   </>
  )
}

export default page