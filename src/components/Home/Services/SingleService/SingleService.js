import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css';
const SingleService = ({ service }) => {

    return (
        <div className='col-md-4'>
            <div className="card mb-2 w-100 text-center card-style">
                <img src={service.image} className="card-img-top cardImg" style={{ height: '250px' }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <center> <Link to={`/orderService/${service._id}`} className="btn btn-primary text-center">Order Service</Link></center>
                </div>
            </div>
        </div>
    );
};

export default SingleService;