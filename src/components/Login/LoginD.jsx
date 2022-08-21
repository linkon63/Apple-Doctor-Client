import React from 'react';
import './LoginD.scss'

import loginBanner from '../../assets/loginBanner/logiBanner.png'
import PagesLayout from '../Layout/PagesLayout';

const LoginD = () => {
    return (
        <div>

            <PagesLayout>

                <section>
                    <div className='custom-height wrap-container'>
                        <div className="login-wrapper">
                            <div className='login'>
                                <img src={loginBanner} alt="loginBanner" />
                            </div>
                            <div className='login'>
                                <form>
                                    <div className="first-method">
                                        <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                                        <button  type="button" class="btn btn-primary btn-floating mx-1">
                                            <i class="fab fa-google"></i>
                                        </button>
                                        <button type="button" class="btn btn-primary btn-floating mx-1">
                                            <i class="fab fa-facebook"></i>
                                        </button>
                                        <button type="button" class="btn btn-primary btn-floating mx-1">
                                            <i class="fab fa-github"></i>
                                        </button>
                                        <button type="button" class="btn btn-primary btn-floating mx-1">
                                            <i class="fab fa-linkedin-in"></i>
                                        </button>
                                        <button type="button" class="btn btn-primary btn-floating mx-1">
                                            <i class="fab fa-twitter"></i>
                                        </button>
                                    </div>
                                    <div className='divider-wrap'>
                                        <p>or</p>
                                    </div>
                                    <div class="form-outline mb-4">
                                        <input type="email" class="form-control form-control-lg" placeholder="Enter a valid email address"></input>
                                        <label class="form-label" for="form3Example3">Email address</label>
                                    </div>
                                    <div class="form-outline mb-3">
                                        <input type="password" class="form-control form-control-lg" placeholder="Enter password"></input>
                                        <label class="form-label" for="form3Example4">Password</label>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="form-check mb-0">
                                            <input class="form-check-input me-2" type="checkbox" value id="form2Example3"></input>
                                            <label class="form-check-label" for="form2Example3"> Remember me </label>
                                        </div>
                                        <a href="#!" class="text-body">Forgot password?</a>
                                    </div>
                                    <div class="text-center text-lg-start mt-4 pt-2">
                                        <button type="button" class="btn btn-primary btn-lg" >Login</button>
                                        <p class="small fw-bold mt-2 pt-1 mb-0">
                                            "Don't have an account? "
                                            <a href="#!" class="link-danger">Register</a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </PagesLayout>
        </div>


    );
};

export default LoginD;