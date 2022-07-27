import React from 'react';
import Carousels from './Carousels/Carousels';
import './HeaderMain.css';
const HeaderMain = () => {

    return (
        <div className='headerMainContainer'>
            <div className="row d-flex w-100">
                <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                    <article className='w-25'>
                        <h3 className='text-white textStyle'>
                            <span style={{ color: 'gainsboro', fontSize: '150%', fontFamily: 'revert' }}>W</span>elcome
                            <br />
                            <span style={{ color: '#e6e4e7', fontSize: '150%', fontFamily: 'revert' }}>T</span>o
                            <br />
                            <span style={{ color: '#e6e4e7', fontSize: '150%', fontFamily: 'revert' }}>A</span>PPLE
                            <br />
                            <span style={{ color: '#e6e4e7', fontSize: '150%', fontFamily: 'revert' }}>D</span>OCTOR
                        </h3>
                    </article>
                    <article className='w-50'>
                        <p className='text-light textStyle'>for your Apple Devices . Repairs Apple
                            Specialized service center <span style={{ color: 'gray' }}> Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Reiciendis accusantium rem possimus.
                                <br />
                                Excepturi, assumenda ullam. </span> sit amet consectetur adipisicing elit. Fugit, vitae.</p>
                        <button id='services textStyle' className='btn btn-dark text-primary'> <a href="#services">Services</a></button>
                    </article>

                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <Carousels />
                </div>
            </div>
        </div>

    );
};

export default HeaderMain;


