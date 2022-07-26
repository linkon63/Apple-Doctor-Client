import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { BookOutlined, Dashboard, GroupWork, HomeOutlined, LockOpen } from '@material-ui/icons';
import './Navbar.css'
// import Logo from '../../../../Image/logo.jpg'
const Navber = () => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light m-0 p-0">
            <div className="container-fluid">
                <Link className="navbar-brand navbarText" to="/home">
                    {/* <img className='img-fluid w-25' src={Logo} alt="Apple-Doctor-Logo" /> */}
                    <h6>APPLE DOCTOR</h6>
                </Link>
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
                            <li className="nav-item m-3">
                                <a className="nav-link active p-3" href='/home'>Logout</a>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navber;