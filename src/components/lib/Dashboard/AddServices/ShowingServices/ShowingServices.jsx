import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ShowingServices = () => {
    const [services, setServices] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://apple-doctor-server-git.onrender.com/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    //Delete Services
    const handleDelete = id => {
        fetch(`https://apple-doctor-server-git.onrender.com/deleteService/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
            }
            )
        alert('Your Order has Deleted');
        navigate('/dashboard')
    }
    return (
        <div className='m-auto mt-5'>
            {!services.length && <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
            </div>}
            {
                services.length && services.map(service =>
                    <div className="card mb-2">
                        <div className="card-header text-center">
                            <h5>{service.name}</h5>
                            <button class='btn btn-danger' onClick={() => { handleDelete(service._id) }}>Delete</button>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default ShowingServices;