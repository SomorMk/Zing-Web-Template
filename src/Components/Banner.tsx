import React from 'react'
import { Container, Flex, Image, MainHeading, Peragraph } from './SubComponents/SubComponents'
import BannerImage from '/images/banner.png'
import { CiSearch } from "react-icons/ci";

const Banner: React.FC = () => {
    return (
        <section className='pt-10 pb-10 lg:pt-24 lg:pb-24'>
            <Container>
                <Flex className='flex-col'>
                    <div className='text-center order-2 lg:order-1'>
                        <MainHeading>Amazing furniture for your home</MainHeading>
                        <Peragraph className='max-w-full sm:max-w-[750px] mx-auto mt-8 sm:mt-12'>We think the chair is the most important piece of furniture in your home. Because if you love the chair you are sitting in chances are you will love the rest of the room.</Peragraph>
                    </div>
                    <div className='mb-[70px] lg:mb-0 lg:mt-[120px] relative order-1 lg:order-2'>
                        <Image src={BannerImage} alt='Banner Image' className='w-full max-w-full rounded-lg' />
                        <div className='w-[80%] sm:w-1/2 absolute bottom-[-25px] lg:bottom-[-40px] lg:top-[-40px] left-[50%] translate-x-[-50%] drop-shadow-2xl rounded-lg'>
                            <input type="text" placeholder='Search your product' className='px-5 h-[50px] lg:px-11 lg:h-[80px] bg-white w-full rounded-lg placeholder:text-xs sm:placeholder:text-base' />
                            <span className='absolute top-[50%] right-5 translate-y-[-50%] cursor-pointer'><CiSearch className='text-xl sm:text-2xl text-secondary' /></span>
                        </div>
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Banner