import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DashboardNavbar from '../../DashboardNavber/DashboardNavber/DashboardNavbar';
import OrderShowing from '../OrderShowing/OrderShowing';

const AllOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://apple-doctor-server.herokuapp.com/allServiceOrder`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data);
            })
    }, []);

    return (
        <div className='d-flex'>
            <DashboardNavbar></DashboardNavbar>
            <div className='container'>
                <h1 className='text-success text-center mt-3'>Your DataBase All Order Are Here : {orders.length}
                    {!orders.length && 
                        <div className="spinner-grow" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    }
                </h1>
                <div className='pt-2'>
                    {
                        orders.map(order => <OrderShowing order={order} key={order._id}></OrderShowing>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllOrders;