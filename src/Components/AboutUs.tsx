import React from 'react'
import { AboutUsItems, Container, Flex, Image, SectionHead } from './SubComponents/SubComponents'
import AboutImage1 from '/images/about (1).png'
import AboutImage2 from '/images/about (2).png'
import AboutImage3 from '/images/about (3).png'
import AboutImage4 from '/images/about (4).png'

const AboutUs: React.FC = () => {
    return (
        <section className='pt-[50px] lg:pt-0 pb-[100px]'>
            <Container>
                <div>
                    <SectionHead name='About us' info='Comfort is key and how you feel about your chair will affect how you feel and your mood.' />
                </div>

                <Flex className='flex-col lg:flex-row justify-between items-center mt-8 lg:mt-20'>

                    <div className='w-full lg:w-1/2 order-2 lg:order-1'>
                        <Flex className='flex flex-wrap justify-between gap-y-10'>
                            <div className='w-full sm:w-[47%]'>
                                <AboutUsItems count={1} name='Mission' info='It makes people at ease and feel like they want to open up.' />
                            </div>
                            <div className='w-full sm:w-[47%]'>
                                <AboutUsItems count={2} name='Motivation' info='The perfect mix of art that complements the room style.' />
                            </div>
                            <div className='w-full sm:w-[47%]'>
                                <AboutUsItems count={3} name='Vision' info='Along with a healthy dose of negative space to give the eyes spots to rest.' />
                            </div>
                            <div className='w-full sm:w-[47%]'>
                                <AboutUsItems count={4} name='Goal' info='Art that has meaning to the people who live in the space.' />
                            </div>
                        </Flex>
                    </div>

                    <div className='w-full lg:w-1/2 order-1 lg:order-2 mb-10 lg:mb-0'>
                        <Flex className=' justify-between'>
                            <Flex className='w-[48%] flex-col gap-y-5 lg:gap-y-10'>
                                <div className='w-full overflow-hidden'><Image src={AboutImage1} alt='About Image 1' className='w-full max-w-full hover:grayscale hover:scale-[1.05] hover:rotate-[-2deg] duration-300' /></div>
                                <div className='w-full overflow-hidden'><Image src={AboutImage4} alt='About Image 2' className='w-full max-w-full hover:grayscale hover:scale-[1.05] hover:rotate-[-2deg] duration-300' /></div>
                            </Flex>
                            <Flex className='w-[48%] flex-col gap-y-5 lg:gap-y-10 lg:translate-y-[-100px]'>
                                <div className='w-full overflow-hidden'><Image src={AboutImage2} alt='About Image 1' className='w-full max-w-full hover:grayscale hover:scale-[1.05] hover:rotate-[2deg] duration-300' /></div>
                                <div className='w-full overflow-hidden'><Image src={AboutImage3} alt='About Image 2' className='w-full max-w-full hover:grayscale hover:scale-[1.05] hover:rotate-[2deg] duration-300' /></div>
                            </Flex>
                        </Flex>
                    </div>

                </Flex>
            </Container>
        </section>
    )
}

export default AboutUs