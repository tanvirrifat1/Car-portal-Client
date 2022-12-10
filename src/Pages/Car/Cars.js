import React from 'react';


const Cars = ({ Car }) => {
    const { image } = Car
    return (
        <div className='card-details'>
            <div className="card w-96  shadow-xl">
                <div className="card-body">
                    <img src={image} alt="" className='rounded-lg' />

                </div>
            </div>
        </div>
    );
};

export default Cars;