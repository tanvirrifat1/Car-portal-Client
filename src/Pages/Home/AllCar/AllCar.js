import React, { useEffect, useState } from 'react';
import CarCard from './CarCard';

const AllCar = () => {

    const [allcar, setAllCar] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allcar')
            .then(res => res.json())
            .then(data => {
                setAllCar(data);
                console.log(data)
            })
    }, [])
    return (
        <div>
            <div className='mt-16 mb-8'>
                <div className='text-center'>
                    <h3 className='text-3xl font-bold text-primary uppercase'>Our All Categories</h3>
                </div>
                <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        allcar?.map(carCard => <CarCard
                            key={carCard._id}
                            carCard={carCard}
                        ></CarCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCar;