import React from 'react'
import { Container, Flex, Image, SectionHead } from './SubComponents/SubComponents'
import ContactImage1 from '/images/contact (1).png'
import ContactImage2 from '/images/contact (2).png'
import ContactImage3 from '/images/contact (3).png'
import ContactImage4 from '/images/contact (4).png'
import ContactForm from './SubComponents/ContactForm'

const Contact: React.FC = () => {
    return (
        <section className='pt-[50px] lg:py-[50px]'>
            <Container>
                <div>
                    <Flex className='flex-col lg:flex-row justify-between items-center'>

                        <div className='w-full lg:w-[40%] order-2 lg:order-1 my-[50px]'>
                            <Flex className=' justify-between'>
                                <Flex className='w-[58%] flex-col gap-y-10'>
                                    <div className='w-full overflow-hidden'><Image src={ContactImage1} alt='About Image 1' className='w-full max-w-full hover:grayscale hover:scale-[1.05] hover:rotate-[2deg] duration-300' /></div>
                                    <div className='w-full overflow-hidden'><Image src={ContactImage4} alt='About Image 2' className='w-full max-w-full hover:grayscale hover:scale-[1.05] hover:rotate-[2deg] duration-300' /></div>
                                </Flex>
                                <Flex className='w-[38%] flex-col gap-y-6 sm:gap-y-4 lg:gap-y-5 xl:gap-y-4'>
                                    <div className='w-full overflow-hidden'><Image src={ContactImage2} alt='About Image 1' className='w-full max-w-full hover:grayscale hover:scale-[1.05] hover:rotate-[-2deg] duration-300' /></div>
                                    <div className='w-full overflow-hidden'><Image src={ContactImage3} alt='About Image 2' className='w-full max-w-full hover:grayscale hover:scale-[1.05] hover:rotate-[-2deg] duration-300' /></div>
                                </Flex>
                            </Flex>
                        </div>

                        <div className='w-full lg:w-[50%] order-1 lg:order-2'>
                            <SectionHead name='Contact us' info='Our team would love to hear from you!' />

                            <div className='mt-10'>
                                <ContactForm />
                            </div>
                        </div>

                    </Flex>
                </div>
            </Container>
        </section>
    )
}

export default Contact