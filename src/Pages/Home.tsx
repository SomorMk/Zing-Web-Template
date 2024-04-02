import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import AboutUs from '../Components/AboutUs'
import Contact from '../Components/Contact'
import Review from '../Components/Review'
import Footer from '../Components/Footer'

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <AboutUs />
            <Review />
            <Contact />
            <Footer />
        </>
    )
}

export default Home