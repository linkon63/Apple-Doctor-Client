import React from 'react';
import Footer from '../Sheared/Footer/Footer/Footer';
import TopNavbar from '../Sheared/Navbar/TopNavbar'
const PagesLayout = ({ children }) => {
    return (
        <>
            <TopNavbar />
            {children}
            <Footer />
        </>
    );
};

export default PagesLayout;