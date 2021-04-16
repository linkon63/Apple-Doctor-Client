import { DoubleArrow } from '@material-ui/icons';
import React from 'react';

const About = () => {
    return (
        <div style={{backgroundColor:'#4273b9', height:'280px'}}>
            <h2 className='text-white ml-5 pt-5'><DoubleArrow></DoubleArrow> About the service</h2>
            <div className='container'>
                <div className='pt-5'>
                    <p className='text-white'>Our service center is equipped with the latest equipment for the diagnosis and repair of computer equipment and mobile devices. All the masters have a rich experience in repairing Apple technology..</p>
                    <p className='text-white'>If your iPhone, MacBook, iMac, iPad or other device has broken down, call us. We will return your device to working condition.</p>
                </div>
            </div>
        </div>
    );
};

export default About;