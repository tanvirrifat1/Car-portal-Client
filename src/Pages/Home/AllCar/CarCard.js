import React from 'react';


const CarCard = ({ carCard, setBookingCar }) => {
    console.log(carCard)
    const { image_url, title, originalPrice, author, location, resalePrice, YearOfPurchase, condition } = carCard;
    return (
        <div>
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

                <button type="button" className="flex items-center ml-20 space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                    </svg>
                    <span>Add to wishlist</span>
                    <div>
                        <button className='btn btn-error btn-sm ml-2'>REPORT</button>
                    </div>
                </button>

                <div className='flex justify-center mb-6 mt-3'>
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