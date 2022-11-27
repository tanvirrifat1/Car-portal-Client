import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const booking = useLoaderData()
    const { date, email, title, location, name, originalPrice, phone, resalePrice } = booking
    return (
        <div>
            <h2 className="text-3xl mt-2">Payment for {title}</h2>
            <p className='text-xl mt-3'> Please pay $<strong>{originalPrice}</strong> for your Orders on <strong>{date}</strong></p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;