import React from 'react';
import {CardElement,Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SliptForm from './SliptForm';


const stripePromise = loadStripe('pk_test_51Ie1JhBHVweerPiKD5ZiauHVxaum4XV1yLjMsUHfkMPf2T7UKNlyHOJ0u0JDpztqmYSfu9R9nRsTA8gydkmksxSr00UdXEF7bv');

const Payment = ({handlePayment}) => {
    return (
        <div className='text-center mb-5'> 
            <h4>Please pay for your device</h4>
            <Elements stripe={stripePromise}>
                <SliptForm handlePayment={handlePayment}></SliptForm>
            </Elements>
        </div>
    );
};

export default Payment;