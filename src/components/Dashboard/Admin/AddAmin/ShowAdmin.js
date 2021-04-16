import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';

const ShowAdmin = () => {
    const [admin, setAdmin] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch('https://apple-doctor-server.herokuapp.com/showAdmin')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAdmin(data);
            })
    }, [])
    console.log(admin);

    const handleDelete = id => {
        console.log(id);
        fetch(`https://apple-doctor-server.herokuapp.com/deleteAdmin/${id}`, {
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
            {!admin.length && 
                <div className="spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            }
            {
                admin.length && admin.map(ad =>
                    <div className="card mb-2">
                        <div className="card-header bg-light text-center">
                            <h5>{ad.name}</h5>
                            <p className='text-success'><strong>{ad.email}</strong></p>
                            <button class='btn btn-danger' onClick={() => handleDelete(ad._id)}>Delete</button>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default ShowAdmin;