import React from 'react';
import SingleService from '../SingleService/SingleService';
import { DoubleArrow } from '@material-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://apple-doctor-server.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div style={{ backgroundColor: '#e6e4e7' }}>
            <h1 className='ml-5 pt-5'><DoubleArrow></DoubleArrow>SERVICES</h1>
            <div>
                <div className='container text-center pb-5' >
                    <h1 className='text-dark' style={{ fontFamily: 'arial' }}>Select a device to find out the cost of repairs 
                    {!services.length && <div className="spinner-grow" role="status">
                        <span className="sr-only">Loading...</span>
                        </div>}
                    </h1>
                </div>
            </div>
            <div className=' container m-auto'>
                <div className='row text-center' id='services'>
                    {
                        services.map(service => <SingleService service={service}></SingleService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;