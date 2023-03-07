import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../../routes/Router';

const ReviewFrom = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [addReview, setAddReview] = useState([]);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            dec: data.dec,
            image: loggedInUser.photoURL
        }
        console.log('data', data)
        console.log(reviewData);
        //Sending Review to the Server
        fetch('https://apple-doctor-server-git.onrender.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Review Done Successfully');
                    navigate('/dashboard')
                }
            })

    };

    return (
        <div className='ml-5'>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label for="exampleInputEmail1" className="form-label">Type Your Name</label> <br />
                <input className="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Type your name please' {...register("name", { required: true })} /> <br />

                <label for="exampleInputEmail1" className="form-label">Your Reviews</label> <br />
                <textarea className="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Type your Feedback About us' {...register("dec", { required: true })} /> <br />
                <input className='btn btn-warning' type="submit" />
            </form>
        </div>
    );
};

export default ReviewFrom;