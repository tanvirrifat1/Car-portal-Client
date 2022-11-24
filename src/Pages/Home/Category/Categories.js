import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [carData, setCarData] = useState([])
    console.log(carData)
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => {
                setCarData(data)
            })
    }, [])
    return (
        <div className=" mt-4">
            <p className='text-2xl flex justify-center'>All Categories</p>
            <div className='flex justify-center mt-6'>
                {
                    carData.map(data => <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        <Link to={`car/${data.name}`}>
                            <button className='btn btn-primary text-white w-32'>
                                {data.name}
                            </button>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Categories;
