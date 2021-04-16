import React, { useMemo } from "react";
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from "react";
  
const SliptForm = ({handlePayment}) => {
    const stripe = useStripe();
    const elements = useElements();
    
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const cardElement = elements.getElement(CardElement);
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
  
      if (error) {
        console.log('[error]', error);
        setPaymentError(error.message);
        setPaymentSuccess('')
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        setPaymentSuccess(paymentMethod.id);
        setPaymentError(null);
        handlePayment(paymentMethod.id);
      }
    };

    return (
        <div className='mt-5'>
        <form className='form-control' onSubmit={handleSubmit}>
           <CardElement />
           <button className='btn btn-success mt-5 mb-5' type="submit" disabled={!stripe}>
               Pay
           </button>
       </form>
       {
           paymentError && <p style={{color: 'red'}}>{paymentError}</p>
       }
       {
           paymentSuccess && <p style={{color: 'green'}}>Your Payment was Successfully </p>
       }
   </div>
    );
};

export default SliptForm;