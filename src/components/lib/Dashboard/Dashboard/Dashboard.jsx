import React from 'react';
import { useContext } from 'react';
import DashboardNavbar from '../DashboardNavber/DashboardNavber/DashboardNavbar';
import { Bookmark } from '@material-ui/icons';
import { UserContext } from '../../../routes/Router';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className='d-flex'>
            <DashboardNavbar></DashboardNavbar>
           
            <div className='text-center m-auto' >
                <div className="card w-100">
                    <div className="card-header text-center bg-info text-dark">
                        <strong>Dashboard</strong>
                    </div>
                    <div className="card-body w-100">
                        <h1 className='w-100'><small>Hello {loggedInUser.displayName} Welcome to DASHBOARD</small></h1>
                        <blockquote className="blockquote mb-0">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><p><Bookmark></Bookmark> Order Details</p></li>
                                    <li className="list-group-item"><p><Bookmark></Bookmark> Order Manage</p></li>
                                    <li className="list-group-item"><p><Bookmark></Bookmark> Order Status</p></li>
                                </ul>
                            </div>




                            <footer className="blockquote-footer"> {loggedInUser.email} </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;