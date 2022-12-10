import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../asstesFile/logo/modern-cars-are-studio-room-3d-illustration-3d-render_37416-504.webp'
import useTitle from '../../../UseTittle';

const Categories = () => {
    useTitle('Categories')
    const [carData, setCarData] = useState([])
    console.log(carData)

    useEffect(() => {
        fetch(`http://localhost:5000/category`)
            .then(res => res.json())
            .then(data => {
                setCarData(data)
            })
    }, [])
    return (
        <div className="card shadow-xl">
            <p className='text-4xl font-bold text-center p-6'>All Categories</p>
            <div className=' justify-center grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    carData?.map(data => <div className='mt-3'>
                        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="linear" className="card w-96  shadow-xl">
                            <figure><img src={img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <div className="card-actions justify-center w-full ">
                                    <Link to={`car/${data?._id}`}>
                                        <button className='btn btn-primary text-white w-full px-16'>
                                            {data?.name}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div >
    );
};

export default Categories;
