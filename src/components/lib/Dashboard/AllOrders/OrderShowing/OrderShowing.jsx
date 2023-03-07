import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderShowing = ({ order }) => {

    const navigate = useNavigate();

    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/allServiceOrderDelete/${id}`, {
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
        alert('Your Order has Deleted');
        navigate('/dashboard')
    }
    //Handle Order Done
    const orderDone = id => {
        console.log('orderDone', id);
        // // console.log('Updating')
        const status = 'Order Done';
        const dbStatus = { status };
        console.log(dbStatus);
        fetch(`http://localhost:5000/updateOrderStatus/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dbStatus)
        })
            .then(res => res.json())
            .then(result => {
                console.log('Updated');
                if (result) {
                    alert('Order has OnGoing State');
                }
            })
    }

    return (
        <div className="container w-50">
            <div className="card text-center mb-3">
                <div className="card-header">
                    {order.orderServiceName}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Payment ID: {order.paymentID}</h5>
                    <p className="card-text"> Shipping Address : {order.shippingData?.address}</p>
                    <p className="card-text"> Email : {order.email}</p>
                    <p className="card-text text-danger"> Order Status :
                        <strong>{order.orderStatus}</strong>
                        <button onClick={() => orderDone(order._id)} className='btn btn-success ml-3 btn-sm'>Order Done</button>
                    </p>
                    <button className='btn btn-danger' onClick={() => handleDelete(order._id)}>Delete</button>
                </div>
                <div className="card-footer text-muted">
                    <p>Order Date : {order.orderTime}</p>
                    <p>Today Date : {new Date().toDateString()}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderShowing;