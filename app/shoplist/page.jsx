import React from 'react'
import ShoplistCart from '../Componnents/ShoplistCart'
import Container from '../Componnents/Container'
import getAlldata from '@/lib/getAlldata'

const page = async () => {
  const shoplist = await getAlldata()
  
  return (
    <>
    <Container>
       <ShoplistCart shoplist={shoplist}/> 
    </Container>
    
    </>
  )
}

export default page