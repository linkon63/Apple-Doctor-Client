import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../Home/Home/Home'
import Blog from '../Blog/Blog'
import OrderService from '../OrderService/OrderService/OrderService';
import Team from '../Team/Team';
import Login from '../Login/Login';
import YourServiceOrder from '../Dashboard/YourServiceOrder/YourServiceOrder';
import AddReview from '../Dashboard/AddReview/AddReview/AddReview';
import ManageReview from '../Dashboard/ManageReview/ManageReview/ManageReview';
import AddServices from '../Dashboard/AddServices/AddServices/AddServices';
import Admin from '../Dashboard/Admin/Admin/Admin';
import AllOrders from '../Dashboard/AllOrders/AllOrders/AllOrders';
import ManageContact from '../Dashboard/ManageContact/ManageContact';
const ComponentsRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/orderService/:id" element={<OrderService />} />
                <Route path="/ourTeam" element={<Team />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard/services" element={<YourServiceOrder />} />
                <Route path="/dashboard/review" element={<AddReview />} />
                <Route path="/dashboard/manageReview" element={<ManageReview />} />
                <Route path="/dashboard/addServices" element={<AddServices />} />
                <Route path="/dashboard/admin" element={<Admin />} />
                <Route path="/dashboard/allOrders" element={<AllOrders />} />
                <Route path="/dashboard/showContactUsData" element={<ManageContact />} />
            </Routes>
        </div>
    );
};

export default ComponentsRoutes;