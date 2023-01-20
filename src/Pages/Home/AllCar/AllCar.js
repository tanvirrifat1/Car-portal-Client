import React, { useState } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../UseTittle';
import BookingModal from '../../BookingModal/BookingModal';
import CarCard from './CarCard';


const AllCar = () => {
    useTitle('AllCar')
    const data = useLoaderData()

    const [bookingCar, setBookingCar] = useState([])

    const { user } = useContext(AuthContext)

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
            {user?.email ?
                < div >
                    {
                        bookingCar &&
                        <BookingModal
                            bookingCar={bookingCar}
                            setBookingCar={setBookingCar}
                        ></BookingModal>
                    }
                </div>
                : toast.warning('Please Login Fast', { autoClose: 1500 })
            }
        </div >
    );
};

export default AllCar;