import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [carData, setCarData] = useState([])
    console.log(carData)

    useEffect(() => {
        fetch(`https://final-project-server-tanvirrifat1.vercel.app/category`)
            .then(res => res.json())
            .then(data => {
                setCarData(data)
            })
    }, [])
    return (
        <div className="card shadow-xl">
            <p className='text-2xl font-bold'>All Categories</p>
            <div className=' justify-center grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    carData?.map(data => <div className='mt-3'>
                        <Link to={`car/${data?._id}`}>
                            <button className='btn btn-primary text-white w-full '>
                                {data?.name}
                            </button>
                        </Link>
                    </div>)
                }
            </div>
        </div >
    );
};

export default Categories;
