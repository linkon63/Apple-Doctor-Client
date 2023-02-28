import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DashboardNavbar from '../../DashboardNavber/DashboardNavber/DashboardNavbar';
import ShowingReview from './ShowingReview';

const ManageReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://apple-doctor-server-git.onrender.com/reviewsData')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data);
            })
    }, [])
    return (
        <div className='d-flex'>
            <DashboardNavbar></DashboardNavbar>
            <div className='container'>
                <h1 className="text-center text-info mb-5"> <small>Manage User Reviews From Here : {reviews.length}</small>
                    {!reviews.length && <div className="spinner-grow text-center" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    }
                </h1>
                <div className='container row'>
                    {
                        reviews.map(review => <ShowingReview review={review} key={review._id}></ShowingReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageReview;