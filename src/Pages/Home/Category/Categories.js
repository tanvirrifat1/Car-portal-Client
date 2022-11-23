import React from 'react';

const Categories = ({ category }) => {
    const { img, name, description } = category;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-full h-56" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
            <button className='btn btn-primary text-xl'>All Categories</button>
        </div>
    );
};

export default Categories;