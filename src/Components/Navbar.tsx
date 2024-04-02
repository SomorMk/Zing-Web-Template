import React from 'react'
import { Container, Flex, Image } from './SubComponents/SubComponents'
import Logo from '/images/logo.png'
import { Link } from 'react-router-dom'

const Navbar:React.FC = () => {
  return (
    <nav className='py-5 shadow-lg sticky top-0 left-0 bg-white z-10'>
        <Container>
            <Flex className='justify-between'>
                <div>
                    <Link to={'/'}><Image src={Logo} alt='Logo' /></Link>
                </div>
                <div>
                    <ul className='flex gap-x-5 lg:gap-x-10'>
                        <li><Link to={'/'} className='text-xs lg:text-base text-secondary font-medium'>Contact</Link></li>
                        <li><Link to={'/'} className='text-xs lg:text-base text-white font-medium py-[8px] px-2 lg:py-[10px] lg:px-5 bg-primary rounded-lg'>Buy Online</Link></li>
                    </ul>
                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar