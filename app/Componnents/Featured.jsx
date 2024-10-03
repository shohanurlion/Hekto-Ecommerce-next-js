import getAlldata from '@/lib/getAlldata'
import React from 'react'
import FeatureCarousel from './FeatureCarousel'
import Container from './Container'

const Featured =async () => {
    const cardData = await getAlldata()
  return (
    <section className='mt-[129px] mb-[71px]'>
        <Container>
        <div className="mb-[48px]">
            <h2 className='header'>Featured Products</h2>
        </div>
        <FeatureCarousel cardData={cardData}/>
        </Container>
    </section>
  )
}

export default Featured