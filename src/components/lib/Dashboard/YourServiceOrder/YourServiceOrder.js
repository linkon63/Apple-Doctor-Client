import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import DashboardNavbar from '../DashboardNavber/DashboardNavber/DashboardNavbar';
import ServiceOrderCard from './ServiceOrderCard';

const YourServiceOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch(`https://apple-doctor-server-git.onrender.com/serviceOrder?email=` + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data);
            })
    }, []);


    return (
        <div className='d-flex'>
            <DashboardNavbar></DashboardNavbar>
            <div className='container text-center'>
                {!orders.length && <div className="spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                </div>}
                {
                    orders.length === true ? <h1>You Have No Order Sir</h1> : <h1 className='mt-3 text-info'>Your Order Services : {orders.length}</h1>

                }

                <div className='row'>
                    {
                        orders.map(order => <ServiceOrderCard order={order}></ServiceOrderCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default YourServiceOrder;