import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import Logo from '../../../../Image/logo.jpg'
const Navber = () => {
    const [loogedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home"> <img className='img-fluid w-25' src={Logo} alt="Apple-Doctor-Logo" /> </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav  ml-auto">
                        <li className="nav-item m-3">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item m-3">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item m-3">
                            <Link className="nav-link" to="/ourTeam">Our Team</Link>
                        </li>
                        <li className="nav-item m-3">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        {
                            !loogedInUser.email &&
                            <li className="nav-item m-3">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        }
                        {
                            loogedInUser.email &&
                            <li className="nav-item m-3">
                                <a className="nav-link" href='/home'>Logout</a>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navber;