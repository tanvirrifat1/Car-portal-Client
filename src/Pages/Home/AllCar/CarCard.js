import React from 'react';
import { Link } from 'react-router-dom';


const CarCard = ({ carCard, setBookingCar }) => {
    const { image_url, title, location, originalPrice, resalePrice, categoryName, published_date } = carCard;
    console.log(originalPrice)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image_url} alt="Shoes" className="rounded-xl w-full h-56" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>

                </div>
                <div className='ml-4'>
                    <h4>{location}</h4>
                    <p><small>{originalPrice}</small></p>
                    <p><small>{resalePrice}</small></p>
                    <p>{categoryName}</p>
                    <p>{published_date}</p>
                </div>

                <div className='flex justify-center mb-6'>
                    <label
                        htmlFor="bookingModal"
                        className='btn btn-primary text-xl'
                        onClick={() => setBookingCar(carCard)}
                    >Book Now</label>
                </div>

            </div>
        </div>
    );
};

export default CarCard;