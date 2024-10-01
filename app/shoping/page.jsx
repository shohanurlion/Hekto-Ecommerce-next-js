import React from 'react'
import Shopingcart from '../Componnents/Shopingcart'
import getAlldata from '@/lib/getAlldata'

const Page = async () => {
    const allproduct = await getAlldata()
    
  return (
   <>
   <div className='container'>
    <Shopingcart allproduct={allproduct}/>
   </div>
   </>
  )
}

export default Page