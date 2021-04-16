import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';

const ShowingServices = () => {
    const [services, setServices] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch('https://apple-doctor-server.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    //Delete Services
    const handleDelete = id => {
        fetch(`https://apple-doctor-server.herokuapp.com/deleteService/${id}`, {
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
        history.push('/dashboard');
    }
    return (
        <div className='m-auto mt-5'>
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