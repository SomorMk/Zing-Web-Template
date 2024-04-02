import React from 'react'
import { Container, Flex, Image } from './SubComponents/SubComponents'
import ReviewImage from '/images/review.png'
import ReviewText from './SubComponents/ReviewItem'

const Review:React.FC = () => {
  return (
    <section className='py-14 lg:py-20 bg-[#112B3C]'>
        <Container>
            <h2 className='text-2xl lg:text-6xl text-white font-bold text-center'>What do customers say...</h2>
            <Flex className='w-full sm:w-[90%] lg:w-[70%] mx-auto items-center mt-14 flex-col sm:flex-row gap-x-5'>
                <div className='w-full sm:w-1/2 '>
                    <Image src={ReviewImage} alt='Review Image' className='max-w-[60%] lg:max-w-full mx-auto' />
                </div>
                <div className='w-full sm:w-1/2 mt-10 sm:mt-0'>
                    <ReviewText />
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Review