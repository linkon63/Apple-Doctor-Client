import { DoubleArrow } from '@material-ui/icons';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleTestiomonial from '../SingleTestimonial/SingleTestiomonial';

const Testimonilas = () => {
    const [reviewsData, setReviewsData] = useState([]);

    useEffect(() => {
        fetch('https://apple-doctor-server.herokuapp.com/reviewsData')
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
                        reviewsData.map(review => <SingleTestiomonial review={review} key={review._id}></SingleTestiomonial>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonilas;