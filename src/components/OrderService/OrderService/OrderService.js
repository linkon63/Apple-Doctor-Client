import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../Sheared/Footer/Footer/Footer';
import TopNavbar from '../../Sheared/Navbar/TopNavbar';
import SingleOrder from '../SingleOrder/SingleOrder';

const OrderService = () => {

    const [orderService, setOrderService] = useState([]);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        fetch(`https://apple-doctor-server.herokuapp.com/orderService/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrderService(data);
            })
    }, []);

    return (
        <div>
            <TopNavbar />
            <SingleOrder orderService={orderService} key={orderService.id}></SingleOrder>
            <Footer></Footer>
        </div>
    );
};

export default OrderService;