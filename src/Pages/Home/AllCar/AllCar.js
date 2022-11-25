import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../BookingModal/BookingModal';
import CarCard from './CarCard';


const AllCar = () => {
    const data = useLoaderData()

    const [bookingCar, setBookingCar] = useState([])


    console.log(data)
    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 '>
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
