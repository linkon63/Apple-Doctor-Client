import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DashboardNavbar from '../../DashboardNavber/DashboardNavber/DashboardNavbar';
import ReviewFrom from '../ReviewForm/ReviewFrom';

const AddReview = () => {

    return (
        <div className='d-flex'>
            <DashboardNavbar></DashboardNavbar>
            <div className='container'>
                <h4 className='text-center mt-4'>Please give us Feedback Thank you</h4>
                <div className="row mt-5 container">
                    <div className='col-md-8 m-auto w-100'>
                        <ReviewFrom></ReviewFrom>
                    </div>
                    <div className='col-md-4 w-100'>
                        <img className='w-100' src="https://i.ibb.co/pR0WVXZ/markus-winkler-f-RAIQHKcc0-unsplash.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;