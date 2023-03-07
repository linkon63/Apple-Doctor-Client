import React from 'react';
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar/DashboardNavbar';
import AddAdmin from '../AddAmin/AddAdmin';

const Admin = () => {
    return (
        <div className='d-flex'>
            <DashboardNavbar />
            <div className='container'>
                <h4 className='text-center mt-4'>Add Admin For Manage Your Site ! </h4>
                <p className='text-center text-danger'>Do It Carefully Admin can change everything Thank you</p>
                <div className='m-auto w-100'>
                    <AddAdmin />
                </div>
            </div>
        </div>
    );
};

export default Admin;