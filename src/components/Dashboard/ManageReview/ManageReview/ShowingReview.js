import React from 'react';
import { useHistory, useParams } from 'react-router';

const ShowingReview = ({ review }) => {

    const history = useHistory();

    const handleDelete = (id) => {
        console.log('handle Delete', id);
        fetch(`https://apple-doctor-server.herokuapp.com/reviewsData/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
            }
            )
        alert('Your Reviews has Deleted');
        history.push('/dashboard');
    }

    return (
        <div className='col-md-4 mb-3'>
            <div className="card h-100 text-center">
                <img src={review.image} className="card-img-top w-50 m-auto" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{review.name}</h5>
                    <p className="card-text">{review.dec}</p>
                </div>
                <button onClick={() => { handleDelete(review._id) }} className='btn btn-danger'>Delete</button>
            </div>
        </div>
    );
};

export default ShowingReview;