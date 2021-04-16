import React from 'react';

const SingleTestiomonial = ({ review }) => {

    return (
        <div className="col mb-2">
            <div className="card h-100 text-center">
                <img className='m-auto' style={{ height: '100px', width: '100px', margin: '0 auto' }} src={review.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{review.name}</h5>
                    <p className="card-text">{review.dec}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleTestiomonial;