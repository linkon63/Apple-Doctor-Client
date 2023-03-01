import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../../../Shared/Navbar/Navbar';
import Footer from '../../../Shared/Footer/Footer/Footer';
import SingleOrder from '../SingleOrder/SingleOrder.jsx';

const OrderService = () => {

    const [orderService, setOrderService] = useState([]);
    const { id } = useParams();
    console.log("params id:", id);

    useEffect(() => {
        fetch(`http://localhost:5000/orderService/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log("data", data)
                console.log(data);
                setOrderService(data);
            })
    }, []);

    return (
        <div>
            <Navbar />
            <SingleOrder orderService={orderService} key={orderService.id} />
            <Footer />
        </div>
    );
};

export default OrderService;