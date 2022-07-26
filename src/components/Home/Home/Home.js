import React from 'react';
import TopNavbar from '../../Sheared/Navbar/TopNavbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import Services from '../Services/Services/Services';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import Testimonilas from '../Testimonials/Testimonials/Testimonilas';
import About from '../About/About';
import ContactInfo from '../ContactInfo/ContactInfo';
import Footer from '../../Sheared/Footer/Footer/Footer';


const Home = () => {
    return (
        <>
            <TopNavbar />
            <HeaderMain></HeaderMain>
            <Services></Services>
            <ServiceDetails></ServiceDetails>
            <Testimonilas></Testimonilas>
            <About></About>
            <ContactInfo></ContactInfo>
            <Footer></Footer>
        </>
    );
};

export default Home;