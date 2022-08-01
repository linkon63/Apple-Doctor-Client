import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../Home/Home/Home'
import Blog from '../Blog/Blog'
import OrderService from '../OrderService/OrderService/OrderService';
import Team from '../Team/Team';
const ComponentsRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/orderService/:id" element={<OrderService />} />
                <Route path="/ourTeam" element={<Team />} />
            </Routes>
        </div>
    );
};

export default ComponentsRoutes;