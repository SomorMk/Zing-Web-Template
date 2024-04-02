import React from 'react'
import { Container } from './SubComponents/SubComponents'

const Footer:React.FC = () => {
  return (
    <footer className='py-5 bg-[#112B3C]'>
        <Container>
            <h4 className='text-white text-center'>This Project is specially build for <span className='font-bold text-primary'>Somykoron!</span></h4>
        </Container>
    </footer>
  )
}

export default Footer