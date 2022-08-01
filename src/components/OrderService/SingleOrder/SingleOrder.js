import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import OrderForm from '../OrderForm/OrderForm';
import Payment from '../Payment/Payment';


const SingleOrder = ({ orderService }) => {
    let history = "" //useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    const [shippingData, setShippingData] = useState(null)

    const userData = { name: loggedInUser.displayName, email: loggedInUser.email, photo: loggedInUser.photoURL }
    console.log(userData);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    //Form Shipping Submission Data
    const onSubmit = data => {
        console.log('Form Data : ', data);
        setShippingData(data);
    };


    const handlePayment = (id) => {
        console.log('handle payment', id);
        const orderData = {
            ...userData,
            paymentID: id,
            shippingData: shippingData,
            orderService: orderService,
            orderServiceName: orderService.name,
            orderServiceCost: orderService.cost,
            orderServiceImage: orderService.image,
            orderStatus: 'Pending',
            orderTime: new Date()
        }
        //Sending Order data to the back-End
        fetch('https://apple-doctor-server.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Order Placed Successfully');
                    history.push('/home');
                }
            })
    }


    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img className='w-100' src={orderService.image} alt="orderImage" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{orderService.name}</h5>
                                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, vitae!</p>
                                    <p className="card-text"><strong>{orderService.cost}</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        !shippingData &&
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <label for="exampleFormControlInput1" className="form-label">Name</label> <br />
                                <input className="form-control" id="exampleFormControlInput1" {...register("name", { required: true })} value={loggedInUser.displayName} /> <br />

                                <label for="exampleFormControlInput1" className="form-label">Email address</label> <br />
                                <input className="form-control" id="exampleFormControlInput1" {...register("email", { required: true })} value={loggedInUser.email} /> <br />

                                <label for="exampleFormControlInput1" className="form-label">Your Address</label> <br />
                                <input className="form-control" id="exampleFormControlInput1"  {...register('address', { required: true })} placeholder="Your Address" /> <br />

                                <label for="exampleFormControlInput1" className="form-label">Your Product Courier ID</label> <br />
                                <input className="form-control" id="exampleFormControlInput1" {...register("courierId", { required: true })} /> <br />

                                <label for="exampleFormControlTextarea1" className="form-label">Describe your Problem</label> <br />
                                <textarea className="form-control" id="exampleFormControlInput1" {...register("des", { required: true })} /> <br />

                                <input className='btn btn-dark mb-5' type="submit" />
                            </form>
                        </div>
                    }
                </div>
                <div className="col-md-6 mb-5 pb-5">
                    {
                        shippingData && <Payment handlePayment={handlePayment}></Payment>
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleOrder;