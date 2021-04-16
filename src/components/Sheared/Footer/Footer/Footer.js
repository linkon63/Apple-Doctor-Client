import { Tab } from '@material-ui/core';
import { Call, Devices, Facebook, Flag, Instagram, Laptop, LinkedIn, PhoneAndroid, PhoneIphone, RadioButtonChecked, RssFeed, Toll, Watch, WhatsApp } from '@material-ui/icons';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footerMain">
            <div className='container'>
                <div className="row">
                    <div className="col-md-3">
                        <h5 className='text-white mt-5 pt-5 text-center'>Apple Service Center BD</h5>
                        <p className='text-secondary ml-3 pt-3 '><strong> <Call></Call> Customer Support</strong></p>
                        <p className='text-secondary ml-3 '><strong> <Toll></Toll> Careers</strong></p>
                        <p className='text-secondary ml-3 '><strong> <RssFeed></RssFeed> Feedback</strong></p>
                        <p className='text-secondary ml-3 '><strong><RadioButtonChecked></RadioButtonChecked> Press</strong></p>
                    </div>
                    <div className="col-md-3">
                        <h5 className='text-white mt-5 pt-5 ml-5'>Store</h5>
                        <p className='text-white ml-5 pt-3 '><strong> <Flag></Flag> Canada</strong></p>
                        <p className='text-white ml-5'><strong> <Flag></Flag> Australia</strong></p>
                        <p className='text-white ml-5'><strong> <Flag></Flag> Bangladesh</strong></p>
                        <p className='text-white ml-5'><strong> <Flag></Flag> India</strong></p>
                    </div>
                    <div className="col-md-3">
                        <h5 className='text-white ml-5 mt-5 pt-5'>Resources</h5>
                        <p className='text-white ml-5 pt-3'><strong><Laptop></Laptop>  Laptop</strong></p>
                        <p className='text-white ml-5'><strong> <PhoneIphone></PhoneIphone> iPhone</strong></p>
                        <p className='text-white ml-5'><strong> <PhoneAndroid></PhoneAndroid> Tablet</strong></p>
                        <p className='text-white ml-5'><strong> <Watch></Watch> Apple Watch</strong></p>
                        <p className='text-white ml-5'><strong> <Devices></Devices> Apple Accessories </strong></p>
                    </div>
                    <div className="col-md-3">
                        <h5 className='text-white mt-5 text-center pt-5'>Our Social Media Pages</h5>
                        <div className="container mt-5">
                           <Facebook color='primary' style={{ fontSize: 50 }}></Facebook>
                            <Instagram color='secondary'  style={{ fontSize: 50 }}></Instagram>
                            <WhatsApp style={{ color:'#1e7e34' ,fontSize: 50 }}></WhatsApp>
                            <LinkedIn style={{ color:'#ffff' ,fontSize: 50 }}></LinkedIn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;