import React from 'react';


const CarCard = ({ carCard, setBookingCar }) => {
    console.log(carCard)
    const { image_url, title, originalPrice, author, location, resalePrice, YearOfPurchase, condition } = carCard;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image_url} alt="Shoes" className="rounded-xl w-full h-56" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                </div>

                <div className="avatar offline flex justify-center">
                    <div className="w-16 rounded-full">
                        <img src={author?.img} alt='' />
                    </div>
                </div>
                <div className=' ml-20'>
                    <p>${originalPrice}</p>
                    <p>${resalePrice}</p>
                    <p>{location}</p>
                    <p>{YearOfPurchase}</p>
                    <p>{condition}</p>
                </div>
                <div className='flex justify-center mb-6'>
                    <label
                        htmlFor="booking-modal"
                        className='btn btn-primary text-xl'
                        onClick={() => setBookingCar(carCard)}
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default CarCard;