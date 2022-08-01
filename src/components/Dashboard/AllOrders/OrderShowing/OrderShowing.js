import React from 'react';
// import { useHistory } from 'react-router';

const OrderShowing = ({ order }) => {
    const history = "" // useHistory();

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://apple-doctor-server.herokuapp.com/allServiceOrderDelete/${id}`, {
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
    //Handle Order Done
    const orderDone = id => {
        console.log('orderDone', id);
        // // console.log('Updating')
        // console.log('hit inside');
        // const price = document.getElementById('price').value;
        // const quantity = document.getElementById('quantity').value;
        // const product = {id, price, quantity};
        const status = 'Order Done';
        const dbStatus = { status };
        console.log(dbStatus);
        fetch(`https://apple-doctor-server.herokuapp.com/updateOrderStatus/${id}`, {
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