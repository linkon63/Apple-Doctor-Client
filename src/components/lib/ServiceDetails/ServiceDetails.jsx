import React from 'react';
import { AccessAlarm, DoubleArrow, LocalHospital, LocationOn, Streetview } from '@material-ui/icons';
const ServiceDetails = () => {
    return (
        <div style={{ backgroundColor: '#f9f9f9', height: '1150px' }}>
            <div className='container '>
                <div className='row d-flex justify-content-center align-items-center pt-5'>
                    <div className="col-md-5 mb-5">
                        <h1>
                            Offsite repair <small>in a convenient place for you</small>
                        </h1>
                        <p>
                            In 80% of cases, repairs can be performed in any place convenient for you within 15-20 minutes. The service engineer will arrive at the designated place, for example a house, an office, a cafe, will conduct diagnostics and eliminate a malfunction.
                        </p>
                        <div className="row">
                            <div className="col-md-12">
                                <AccessAlarm></AccessAlarm> Anytime <br /> <LocationOn></LocationOn> Anywhere <br />
                                <LocalHospital></LocalHospital> Departure and Diagnostics free  <br />
                                <Streetview></Streetview> Repair in your presence
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 ">
                        <img className='w-100' src="https://i.ibb.co/ygS3dV8/nikolai-chernichenko-s6u-S36-SF91-Y-unsplash.jpg" alt="" />
                    </div>
                </div>
            </div>
            <br /> <br /> <br />
            <h1 className='ml-5'> <DoubleArrow></DoubleArrow> REPAIR SERVICES</h1>
            <div className='container mt-5'>
                <div className='row d-flex justify-content-center align-items-center pt-5'>
                    <div className="col-md-7 ">
                        <img className='w-100' src="https://i.ibb.co/QXhgq2f/clay-banks-c2a0-Tyd-Ml-As-unsplash.jpg" alt="" />
                    </div>
                    <div className="col-md-5">
                        <h1>
                            <small>Repair in the</small> service center
                        </h1>
                        <p>
                            If the malfunction can not be eliminated in the field and for this, stationary equipment is required, we do such repairs to the service center, where everything is necessary to eliminate the most complex malfunctions.
                        </p>
                        <div className="row">
                            <div className="col-md-12">
                                <DoubleArrow></DoubleArrow> Fast delivery by courier <br /><DoubleArrow></DoubleArrow> Stationary equipment <br />
                                <DoubleArrow></DoubleArrow> Repair of any complexity  <br />
                                <DoubleArrow></DoubleArrow>Full privacy
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;