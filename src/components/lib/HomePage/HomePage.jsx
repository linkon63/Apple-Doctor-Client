import React from 'react'
import Footer from '../../Shared/Footer/Footer/Footer'
import Navbar from '../../Shared/Navbar/Navbar'
import About from '../About/About'
import ContactInfo from '../ContactInfo/ContactInfo'
import ServiceDetails from '../ServiceDetails/ServiceDetails'
import Services from '../Services/Services/Services'
import Testimonials from '../Testimonials/Testimonials/Testimonials'
import HeaderMain from './HeaderMain/HeaderMain.jsx'

export default function HomePage() {
    return (
        <>
            <Navbar />
            <HeaderMain />
            <Services />
            <ServiceDetails />
            <Testimonials />
            <About />
            <ContactInfo />
            <Footer />
        </>
    )
}
