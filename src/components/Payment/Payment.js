import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import StripePayment from './StripePayment';
import { stripeKey } from '../Config/Config';

const Payment = () => {
    
    const stripePromise = loadStripe(stripeKey);
 

    return (
        <Elements stripe={stripePromise}>
         <StripePayment/>
      </Elements>
    );
};

export default Payment;