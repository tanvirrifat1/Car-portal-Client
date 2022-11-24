import React from 'react';


const CarCard = ({ carCard, setBookingCar }) => {
    const { image_url, title, originalPrice, author } = carCard;
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