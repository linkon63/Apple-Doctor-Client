import { DoubleArrow } from '@material-ui/icons';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';

const Testimonials = () => {
    const [reviewsData, setReviewsData] = useState([]);

    useEffect(() => {
        fetch('https://apple-doctor-server-git.onrender.com/reviewsData')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviewsData(data);
            })
    }, []);
    return (
        <div >
            <h1 className='pt-5 ml-5 pb-5'><DoubleArrow></DoubleArrow>Testimonial
                {!reviewsData.length && <div className="spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                </div>}
            </h1>
            <div className='container'>
                <div className="row row-cols-1 row-cols-md-3 g-2 mb-5">
                    {
                        //testimonial
                        reviewsData.map(review => <SingleTestimonial review={review} key={review._id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonials;