import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { BookOutlined, Dashboard, ExitToApp, GroupWork, HomeOutlined, LockOpen, LockOpenOutlined, LockOpenSharp } from '@material-ui/icons';
import Logo from '../../../assets/Logo/appleLogo.png'
// import Logo from '../../../../Image/logo.jpg'
import './Navbar.css'
const Navber = () => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light m-0 p-0">
            <div className="container-fluid">
                <div className=''>
                    <Link className="navbar-brand navbarText d-flex" to="/home">
                        <img className='img-fluid' src={Logo} alt="Apple-Doctor-Logo" style={{width: "36px", height: "36px"}} />
                        <h6 className='m-2'>APPLE DOCTOR</h6>
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbarText" id="navbarNav">
                    <ul className="navbar-nav  ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link active p-3" aria-current="page" to="/home"> <HomeOutlined />Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active p-3" to="/blog"><BookOutlined />Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active p-3" to="/ourTeam"><GroupWork />Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active p-3" to="/dashboard"><Dashboard />Dashboard</Link>
                        </li>
                        {
                            !loggedInUser.email &&
                            <li className="nav-item">
                                <Link className="nav-link active p-3" to="/login"><LockOpen /> Login</Link>
                            </li>
                        }
                        {
                            loggedInUser.email &&
                            <li className="nav-item">
                                <a className="nav-link active p-3" href='/home'><ExitToApp /> Logout</a>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navber;