import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../UseTittle';
import BookingModal from '../../BookingModal/BookingModal';
import CarCard from './CarCard';


const AllCar = () => {
    useTitle('AllCar')
    const data = useLoaderData()

    const [bookingCar, setBookingCar] = useState([])


    return (
        <div className='flex justify-center'>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    data?.map(carCard => <CarCard
                        key={carCard._id}
                        carCard={carCard}
                        setBookingCar={setBookingCar}
                    ></CarCard>)
                }
            </div>
            {
                bookingCar &&
                <BookingModal
                    bookingCar={bookingCar}
                    setBookingCar={setBookingCar}
                ></BookingModal>
            }
        </div>
    );
};

export default AllCar;
