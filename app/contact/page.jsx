import React from 'react'
import Container from '../Componnents/Container'
import victor from '../../public/Group 94.png'
import Image from 'next/image'
import lipel from '../../public/Ellipse 44.png'
import ContactSearch from '../Componnents/ContactSearch'
const contact = () => {
    return (
        <>
            <Container>
                <div className="md:flex justify-between">
                    <div className='px-2 md:w-[50%]'>
                        <h3 className='pb-3'>Information About us</h3>
                        <p className='text-[#8A8FB9] text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                        <div className='py-6'>
                            <Image src={victor} alt='victor' />
                        </div>
                    </div>
                    <div className='px-2 py-6 md:py-0 md:w-[50%] md:flex justify-end'>
                        <div className=''>
                            <h3 className='pb-3'>Contact Way</h3>
                            <div className='flex items-center gap-8 pb-3'>
                                <div className='flex items-center gap-2'>
                                    <Image src={lipel} alt='lipel' className='w-[30px] h-[30px]' />
                                    <div>
                                        <p className='text-[12px]'>Tel: 877-67-88-99</p>
                                        <p className='text-[12px]'>E-Mail: shop@store.com</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Image src={lipel} alt='lipel' className='w-[30px] h-[30px]' />
                                    <div>
                                        <p className='text-[12px]'>Support Forum</p>
                                        <p className='text-[12px]'>For over 24hr</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-8'>
                                <div className='flex items-center gap-2'>
                                    <Image src={lipel} alt='lipel' className='w-[30px] h-[30px]' />
                                    <div>
                                        <p className='text-[12px]'>20 Margaret st, London</p>
                                        <p className='text-[12px]'>Great britain, 3NM98-LK</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Image src={lipel} alt='lipel' className='w-[30px] h-[30px]' />
                                    <div>
                                        <p className='text-[12px]'>Free standard shipping</p>
                                        <p className='text-[12px]'>on all orders.</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <ContactSearch/>
            </Container>
        </>
    )
}

export default contact