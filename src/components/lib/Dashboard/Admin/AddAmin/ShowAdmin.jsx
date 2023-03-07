import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShowAdmin = () => {
    const [admin, setAdmin] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetch('http://localhost:5000/showAdmin')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAdmin(data);
            })
    }, [])
    console.log(admin);

    const handleDelete = id => {
        console.log(id);
        fetch(`http://localhost:5000/deleteAdmin/${id}`, {
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