import React from 'react';
import { Carousel } from 'react-bootstrap';
import Apple from '../../../../Image/displayRepaire.jpg';
import Apple2 from '../../../../Image/mickchange.jpg';
import Apple3 from '../../../../Image/motherbord.jpg';
import Apple4 from '../../../../Image/backpart.jpg';
import Apple5 from '../../../../Image/cameraRepaire.jpg';
import './Carousel.css'
// import './Carousel.scss'
const Carousels = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Apple}
                    alt="First slide"
                />
                <Carousel.Caption>
                        <h3>Repair Back Part {`&`} Glass</h3>
                        <p className='padding'>Send your device in for repair and have the repair at Apple Doctor fix it</p>
                        <button type="button" class="btn btn-secondary ">servicing</button>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Apple2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-success'>Repair Camera</h3>
                    <p>Send your device in for repair and have the repair at Apple Doctor fix it</p>
                    <button type="button" class="btn btn-secondary ">servicing</button>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Apple3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='text-white'>Repair Your Phone Color</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <button type="button" class="btn btn-secondary ">servicing</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Apple4}
                    alt="Fourth slide"
                />

                <Carousel.Caption>
                    <h3 className='text-success'>Repair Your Devices</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <button type="button" class="btn btn-secondary ">servicing</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Apple5}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='text-dark'>Repair Your Body Part</h3>
                    <p>Send your device in for repair and have the repair at Apple Doctor fix it</p>
                    <button type="button" class="btn btn-secondary ">servicing</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Carousels;