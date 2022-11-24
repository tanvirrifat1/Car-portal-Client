import React, { useEffect, useState } from 'react';
import Categories from './Categories';


const Category = () => {
    const [allCategory, setAllCategory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/CarsCollection')
            .then(res => res.json())
            .then(data => {
                setAllCategory(data);
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
                        allCategory.map(category => <Categories
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
