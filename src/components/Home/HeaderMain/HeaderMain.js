import React from 'react';
import Carasule from './Carasule/Carasule';
import './HeaderMain.css';
const HeaderMain = () => {

    return (
        <div className='headerMainContainer d-flex justify-content-center align-items-center'>
            <div className="m-2 p-3">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-5">
                        <h1 className='text-white'><span style={{color: 'gainsboro', fontSize:'25px', fontFamily:'cursive'}}>Welcome</span> <small>TO APPLE</small> <span style={{color: '#e6e4e7', fontSize:'55px',fontFamily:'revert'}}>Doctor</span> </h1>
                        <p className='text-light'>for your Apple Devices . Repairs Apple
                            Specialized service center <span style={{color: 'gray'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusantium rem possimus. Excepturi, assumenda ullam. </span> sit amet consectetur adipisicing elit. Fugit, vitae.</p>
                        <button id='services' className='btn btn-dark text-primary'> <a href="#services">Services</a></button>
                    </div>
                    <div className="col-md-7 d-flex justify-content-center">
                        <Carasule></Carasule>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HeaderMain;