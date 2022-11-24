import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ category }) => {
    const { image_url, name, description } = category;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image_url} alt="Shoes" className="rounded-xl w-full h-56" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
            <Link to='/allcar'>
                <div className='flex justify-center mb-6'>
                    <button className='btn btn-primary text-xl'>All Categories</button>
                </div>
            </Link>
        </div>
    );
};

export default Categories;