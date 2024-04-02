import React from 'react'
import { Flex } from './SubComponents'

const ContactForm: React.FC = () => {
    let handelSubmit = (e: any) => {
        e.preventDefault();
        console.log(e.target);
    }
    return (
        <form onSubmit={handelSubmit}>
            <Flex className='flex-col gap-y-4 lg:gap-y-7'>
                <Flex className='flex-col lg:flex-row gap-y-4 gap-x-7'>
                    <input type="text" placeholder='First Name' required className='w-full border border-secondary px-5 py-2 md:py-4 focus-visible:outline-primary placeholder:text-xs lg:placeholder:text-base placeholder:text-pera' />
                    <input type="text" placeholder='Last Name' required className='w-full border border-secondary px-5 py-2 md:py-4 focus-visible:outline-primary placeholder:text-xs lg:placeholder:text-base placeholder:text-pera' />
                </Flex>
                <input type="email" placeholder='Last Email' required className='w-full border border-secondary px-5 py-2 md:py-4 focus-visible:outline-primary placeholder:text-xs lg:placeholder:text-base placeholder:text-pera' />
                <textarea placeholder='Your Message' required className='w-full h-[100px] lg:h-[180px] border border-secondary px-5 py-2 md:py-4 focus-visible:outline-primary placeholder:text-xs lg:placeholder:text-base placeholder:text-pera' />
                <button type='submit' className='py-3 px-5 w-full bg-primary text-white font-semibold'>Send message</button>
            </Flex>
        </form>
    )
}

export default ContactForm