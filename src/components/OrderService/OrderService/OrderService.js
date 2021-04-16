import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../Sheared/Footer/Footer/Footer';
import Navber from '../../Sheared/Navber/Navber/Navber';
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
            <Navber></Navber>
            <SingleOrder orderService={orderService} key={orderService.id}></SingleOrder>
            <Footer></Footer>
        </div>
    );
};

export default OrderService;