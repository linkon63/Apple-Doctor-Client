import { DoubleArrow } from '@material-ui/icons';
import React from 'react';

const About = () => {
    return (
        <div className='pb-5' style={{backgroundColor:'#f2ffe7de'}}>
            <h2 className='text-dark ml-5 pt-5'><DoubleArrow></DoubleArrow> About the service</h2>
            <div className='m-5 pb-5' style={{backgroundColor:'#4273b9'}}>
                <div className='container'>
                    <div className='pt-5'>
                        <p className='text-dark'>Our service center is equipped with the latest equipment for the diagnosis and repair of computer equipment and mobile devices. All the masters have a rich experience in repairing Apple technology..</p>
                        <p className='text-dark'>If your iPhone, MacBook, iMac, iPad or other device has broken down, call us. We will return your device to working condition.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;