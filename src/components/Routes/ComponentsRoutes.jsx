import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../Home/Home/Home'
import Blog from '../Blog/Blog'
import OrderService from '../OrderService/OrderService/OrderService';
const ComponentsRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog" element={<OrderService />} />
            </Routes>
        </div>
    );
};

export default ComponentsRoutes;