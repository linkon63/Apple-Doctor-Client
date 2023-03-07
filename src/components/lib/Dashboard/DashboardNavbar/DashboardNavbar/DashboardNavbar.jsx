import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../routes/Router';
import { Accessibility, GroupAdd, Home, Markunread, Motorcycle, Pageview, PhoneAndroid, SupervisedUserCircle } from '@material-ui/icons';

import './Sidebar.css';

const DashboardNavbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (

        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/home" className="text-white">
                        <span><Home></Home> Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/services" className="text-white">
                        <span><Accessibility></Accessibility> Your Service Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/review" className="text-white">
                        <span><Pageview></Pageview> Review Us</span>
                    </Link>
                </li>
                {isAdmin && <div>
                    <li>
                        <Link to="/dashboard/addServices" className="text-white">
                            <span> <SupervisedUserCircle></SupervisedUserCircle> Manage Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/manageReview" className="text-white">
                            <span><Markunread></Markunread> Manage Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/admin" className="text-white">
                            <span><GroupAdd></GroupAdd> Manage Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/allOrders" className="text-white">
                            <span><Motorcycle></Motorcycle> Manage Orders</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/showContactUsData" className="text-white">
                            <span><PhoneAndroid></PhoneAndroid> Want To Contact</span>
                        </Link>
                    </li>
                </div>}
            </ul>
            <div>
                <a href='/home' className="text-white"><span>Logout</span></a>
            </div>
        </div>

    );
};

export default DashboardNavbar;