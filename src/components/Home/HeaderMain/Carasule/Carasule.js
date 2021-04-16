import React from 'react';
import { Carousel } from 'react-bootstrap';
import Apple from '../../../../Image/Apple (1).jpg';
import Apple2 from '../../../../Image/Apple (2).jpg';
import Apple3 from '../../../../Image/Apple (3).jpg';
import Apple4 from '../../../../Image/Apple (4).jpg';
import Apple5 from '../../../../Image/Apple (5).jpg';
import Apple6 from '../../../../Image/Apple (6).jpg';

const Carasule = () => {
    return (
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Apple}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3 className='text-primary'>Repair Back Part {`&`} Glass</h3>
            <p>Send your device in for repair and have the repair at Apple Doctor fix it</p>
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
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Apple6}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Repair Laptop</h3>
            <p>Send your device in for repair and have the repair at Apple Doctor fix it</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
};

export default Carasule;