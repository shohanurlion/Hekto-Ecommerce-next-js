import React from 'react'
import ShoplistCart from '../Componnents/ShoplistCart'
import Container from '../Componnents/Container'
import getAlldata from '@/lib/getAlldata'

const page = async () => {
  const shoplist = await getAlldata()
  
  return (
    <>
    <section className='mt-[90px]'>
    <Container>
       <ShoplistCart shoplist={shoplist}/> 
    </Container>
    </section>
    </>
  )
}

export default page