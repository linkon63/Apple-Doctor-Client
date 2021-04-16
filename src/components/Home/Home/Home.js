import React from 'react';
import Footer from '../../Sheared/Footer/Footer/Footer';
import Navber from '../../Sheared/Navber/Navber/Navber';
import About from '../About/About';
import ContactInfo from '../ContactInfo/ContactInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import Services from '../Services/Services/Services';
import Testimonilas from '../Testimonials/Testimonials/Testimonilas';


const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <HeaderMain></HeaderMain>
            <Services></Services>
            <ServiceDetails></ServiceDetails>
            <Testimonilas></Testimonilas>
            <About></About>
            <ContactInfo></ContactInfo>
            <Footer></Footer>
        </div>
    );
};

export default Home;