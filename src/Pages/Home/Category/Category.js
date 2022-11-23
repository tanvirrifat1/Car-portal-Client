import React from 'react';
import tesla from '../../../asstesFile/logo/img6.jpg';
import bmw from '../../../asstesFile/logo/img4.jpg';
import mercedese from '../../../asstesFile/logo/img1.jpg';
import Categories from './Categories';

const Category = () => {
    const categoriesData = [
        {
            id: 1,
            name: 'Tesla',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: tesla
        },
        {
            id: 2,
            name: 'Bmw',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: bmw
        },
        {
            id: 3,
            name: 'mercedes',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: mercedese
        },
    ]
    return (
        <div>
            <div className='mt-16 mb-8'>
                <div className='text-center'>
                    <h3 className='text-3xl font-bold text-primary uppercase'>Our All Categories</h3>
                </div>
                <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        categoriesData.map(category => <Categories
                            key={category.id}
                            category={category}
                        ></Categories>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Category;