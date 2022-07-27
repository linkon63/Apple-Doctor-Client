import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
// components
import Home from '../Home/Home/Home';
import TopNavbar from '../Sheared/Navbar/TopNavbar'
import Footer from '../Sheared/Footer/Footer/Footer';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import OrderService from '../OrderService/OrderService/OrderService';
import Login from '../Login/Login';
import YourServiceOrder from '../Dashboard/YourServiceOrder/YourServiceOrder';
import AddReview from '../Dashboard/AddReview/AddReview/AddReview';
import ManageReview from '../Dashboard/ManageReview/ManageReview/ManageReview';
import AddServices from '../Dashboard/AddServices/AddServices/AddServices';
import Admin from '../Dashboard/Admin/Admin/Admin';
import AllOrders from '../Dashboard/AllOrders/AllOrders/AllOrders';
import ManageContact from '../Dashboard/ManageContact/ManageContact';
import Dashboard from '../Dashboard/Dashboard/Dashboard';
import Blog from '../Blog/Blog';

const Routes = () => {

    return (
        <Router>
            <Switch>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/blog">
                    <Blog />
                </Route>
                <PrivateRoute path="/orderService/:id">
                    <OrderService></OrderService>
                </PrivateRoute>
                <Route path="/ourTeam">
                    <TopNavbar></TopNavbar>
                    <div className="container text-center mt-5 mb-5">
                        <h1>Welcome to Team</h1>
                        <h1>This Page Under Building Goto DashBoard Or Login</h1>
                    </div>
                    <Footer></Footer>
                </Route>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <PrivateRoute path="/dashboard/services">
                    <YourServiceOrder></YourServiceOrder>
                </PrivateRoute>
                <PrivateRoute path="/dashboard/review">
                    <AddReview></AddReview>
                </PrivateRoute>
                <PrivateRoute path="/dashboard/manageReview">
                    <ManageReview></ManageReview>
                </PrivateRoute>
                <PrivateRoute path="/dashboard/addServices">
                    <AddServices></AddServices>
                </PrivateRoute>
                <PrivateRoute path="/dashboard/admin">
                    <Admin></Admin>
                </PrivateRoute>
                <PrivateRoute path="/dashboard/allOrders">
                    <AllOrders></AllOrders>
                </PrivateRoute>
                <PrivateRoute path="/dashboard/showContactUsData">
                    <ManageContact></ManageContact>
                </PrivateRoute>
                <PrivateRoute path="/dashboard">
                    <Dashboard></Dashboard>
                </PrivateRoute>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="*">
                    <Home></Home>
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;