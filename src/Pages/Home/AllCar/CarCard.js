import React from 'react';


const CarCard = ({ carCard, setBookingCar }) => {
    const { image_url, title, originalPrice, author, location, resalePrice, YearOfPurchase, condition } = carCard;
    return (
        <div data-aos="fade-up"
            data-aos-duration="3000">
            <div className="card bg-base-100 shadow-xl ">
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
                    <p className='font-bold ml-2'>{author?.name}</p>
                </div>
                <div className=' ml-20'>
                    <p>${originalPrice}</p>
                    <p>${resalePrice}</p>
                    <p>{location}</p>
                    <p>{YearOfPurchase}</p>
                    <p>{condition}</p>
                </div>



                <div className='flex justify-center mb-6 mt-3'>
                    <label
                        htmlFor="booking-modal"
                        className='btn btn-outline btn-primary text-xl'
                        onClick={() => setBookingCar(carCard)}
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default CarCard;