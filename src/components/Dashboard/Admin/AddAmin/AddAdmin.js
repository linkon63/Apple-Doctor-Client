import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
// import { useHistory } from 'react-router';
import { UserContext } from '../../../../App';
import ShowAdmin from './ShowAdmin';

const AddAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let history = "" //useHistory();

    const onSubmit = data => {
        console.log(data);
        const adminData = {
            name: data.name,
            email: data.email,
            adminAdd: loggedInUser.displayName
        }
        //Sending Admin Data to the Server
        fetch('https://apple-doctor-server.herokuapp.com/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Admin Added Successfully');
                    history.push('/dashboard');
                }
            })
    }
    return (
        <div className='row d-flex'>
            <div className='col-md-6 ml-5'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label for="exampleInputEmail1" className="form-label">Type the Admin Name</label> <br />
                    <input className="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Type your name please' {...register("name", { required: true })} /> <br />

                    <label for="exampleInputEmail1" className="form-label">Email address</label> <br />
                    <input className="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Type email you want to add as a admin' {...register("email", { required: true })} /> <br />
                    <input className='btn btn-danger' type="submit" />
                </form>
            </div>
            <div className="col-md-4">
                <p className='text-center text-primary'> <strong>Look How Many Admin Accessing This Project</strong> </p>
                <p className='text-center text-danger'>If you delete yourself you can't add yourself to admin another admin have to add you ThankYou</p>
                <ShowAdmin></ShowAdmin>
            </div>
        </div>
    );
};

export default AddAdmin;