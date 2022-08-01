import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { useHistory } from 'react-router';
import DashboardNavbar from '../../DashboardNavber/DashboardNavber/DashboardNavbar';
import axios from 'axios';
import ShowingServices from '../ShowingServices/ShowingServices';

const AddServices = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let history = "" // useHistory();
    const [imageURL, setImageURl] = useState(null);

    const onSubmit = data => {
        console.log(data);
        const servicesData = {
            name: data.name,
            cost: data.cost,
            image: imageURL,
            des: data.des
        }
        console.log(servicesData);
        const url = `https://apple-doctor-server.herokuapp.com/addServices`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(servicesData)
        })
            .then(res => console.log('Server Side Response', res)
            )

        alert('Your Data has Sended to the server');
        history.push('/dashboard')
    }

    //---------handleImageUpload in ImageBB Hosting---------
    const handleImageUpload = event => {
        console.log('ImageURL', event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '41ab61d1a2635feab06cde6b123c5332');
        imageData.append('image', event.target.files[0]);
        console.log(imageData);
        //Sending Data to the image BB DataBase
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURl(response.data.data.display_url);
                console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log('Axios Uploading Image Error', error);
            });

    }

    return (
        <div className='d-flex'>
            <DashboardNavbar></DashboardNavbar>
            <div className='container'>
                <h1 className='text-center mt-5 text-info'>Add Services You Will Provide </h1>
                <p className='text-center text-danger'>Note : It Will Show the Home Page When you will add this</p>

                <div className='row d-flex'>
                    <div className='ml-5 col-md-6 pl-5'>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <label for="exampleInputEmail1" className="form-label">Service Name</label> <br />
                            <input className="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Type your service name' {...register("name", { required: true })} /> <br />

                            <label for="exampleInputEmail1" className="form-label">Cost</label> <br />
                            <input className="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Service Cost Per Device' {...register("cost", { required: true })} /> <br />

                            <label for="exampleInputEmail1" className="form-label">Service Image</label> <br />
                            <input type='file' onChange={handleImageUpload} /> <br />

                            <label for="exampleInputEmail1" className="form-label">Your Service Description</label> <br />
                            <textarea className="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Description' {...register("des", { required: true })} /> <br />
                            <input className='btn btn-success' type="submit" />
                        </form>
                    </div>
                    <div className='col-md-4'>
                        <h4 className='text-info mb-3'>Your Total Services</h4>
                        <p className='text-center text-danger'>Note: Please Add New Device and Delete This One</p>
                        <ShowingServices></ShowingServices>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AddServices;