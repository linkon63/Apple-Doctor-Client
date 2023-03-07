import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar/DashboardNavbar';

const ManageContact = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('https://apple-doctor-server-git.onrender.com/showContactUsData')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setContacts(data);
            })
    }, [])
    return (
        <div className='d-flex'>
            <DashboardNavbar />
            <div className='container'>
                <h1 className='text-center text-info mt-5'>People Want to Contact with our Company</h1>
                <p className='text-center text-danger mb-5'>Send them Mail For Contact</p>
                {
                    contacts.map(contact => <div className="card w-50 text-center m-auto ">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{contact.email}</li>
                            <p className='bg-success text-white'>Description{contact.dec}</p>
                        </ul>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageContact;