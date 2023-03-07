import React from 'react';
import { useHistory, useParams } from 'react-router';

const ServiceOrderCard = ({ order }) => {
    let history = useHistory();

    //Cancel Order
    const orderCancel = id => {
        fetch(`https://apple-doctor-server-git.onrender.com/allServiceOrderDelete/${id}`, {
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
        history.push('/dashboard');
    }
    return (
        <div className='col-md-4 mb-3'>
            <div className="card h-100">
                <img src={order.orderServiceImage} className="card-img-top w-75 m-auto" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{order.orderServiceName}</h5>
                    <div className="card">
                        <div className="card-header bg-dark text-white text-center">
                            Order Details
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-warning text-danger"> <strong>{order.orderStatus || <span className='text-success'>Order Done</span>}</strong> </li>
                            <li className="list-group-item">ID : {order._id}</li>
                            <li className="list-group-item">Cost :{order.orderServiceCost}</li>
                        </ul>
                    </div>
                    {
                        order.orderStatus ? <button onClick={() => orderCancel(order._id)} className='btn btn-danger mt-2' >Cancel Order</button> :
                            <button onClick={() => orderCancel(order._id)} className='btn btn-success mt-2' >I have Got it</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceOrderCard;