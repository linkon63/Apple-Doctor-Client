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
import Dashboard from '../Dashboard/Dashboard/Dashboard';
import RequireAuth from '../PrivateRoute/RequireAuth';
import About from '../Home/About/About';
import LoginD from '../Login/LoginD';
const ComponentsRoutes = () => {
    return (
        <div>
            <Routes>
                {/* Public component */}
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/ourTeam" element={<Team />} />
                <Route path="/about" element={<About />} />
                {/* Login component */}
                <Route path="/login" element={<Login />} />
                <Route path="/logind" element={<LoginD />} />
                {/* Dashboard Component */}
                <Route path="/dashboard" element={
                    <RequireAuth>
                        <Dashboard />
                    </RequireAuth>
                } />
                <Route path="/orderService/:id" element={
                  <RequireAuth>
                    <OrderService></OrderService>
                  </RequireAuth>
                } />
                <Route path="/dashboard/services" element={
                  <RequireAuth>
                   <YourServiceOrder /> 
                  </RequireAuth>
                } />
                <Route path="/dashboard/review" element={
                  <RequireAuth>
                  <AddReview />  
                  </RequireAuth>
                } />
                <Route path="/dashboard/manageReview" element={
                  <RequireAuth>
                    <ManageReview />
                  </RequireAuth>
                } />
                <Route path="/dashboard/addServices" element={
                  <RequireAuth>
                     <AddServices />
                  </RequireAuth>
               } />
                <Route path="/dashboard/admin" element={
                  <RequireAuth>
                    <Admin />
                  </RequireAuth>
                } />
                <Route path="/dashboard/allOrders" element={
                  <RequireAuth>
                     <AllOrders />
                  </RequireAuth>
               } />
                <Route path="/dashboard/showContactUsData" element={
                  <RequireAuth>
                    <ManageContact />
                  </RequireAuth>
                } />
            </Routes>
        </div>
    );
};

export default ComponentsRoutes;