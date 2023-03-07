import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../routes/Router';
import Logo from '../../asset/Image/logo.jpg'
import './navbarStyle.css'
const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <>
            {/* // < !--====== NAVBAR ONE PART START ====== --> */}
            <section class="navbar-area navbar-one">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <nav class="navbar navbar-expand-lg">
                                <a class="navbar-brand">
                                    <img src={Logo} alt="Logo" className="logo" />
                                </a>
                                <ul class="navbar-nav m-auto">
                                    <li className="nav-item">
                                        <Link className="" to="/Home">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="" to="/blog">Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="" to="/ourTeam">Our Team</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="" to="/dashboard">Dashboard</Link>
                                    </li>

                                </ul>
                                <div class="navbar-btn d-none d-sm-inline-block fw-bold">

                                    {
                                        !loggedInUser.email &&
                                        <li className="btn btn-primary">
                                            <Link to="/login" class="btn btn-primary ">
                                                Login
                                            </Link >
                                        </li>
                                    }
                                    {
                                        loggedInUser.email &&
                                        <li className="btn btn-primary" onClick={() => window.location.reload()}>
                                            Logout
                                        </li>
                                    }

                                    {/* <li>
                                            <Link class="btn primary-btn-outline">
                                                Sign In
                                            </Link >
                                        </li>
                                        <li>
                                            <Link class="btn primary-btn-outline">
                                                Sign In
                                            </Link >
                                        </li> */}
                                </div>
                            </nav>
                            {/* <!-- navbar --> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navbar;
