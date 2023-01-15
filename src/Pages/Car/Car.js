import React from 'react';
import Cars from './Cars';
import './Car.css'
import img1 from '../../asstesFile/car1.webp'
import img2 from '../../asstesFile/car2.webp'
import img3 from '../../asstesFile/car3.webp'
import img4 from '../../asstesFile/car4.webp'
import img5 from '../../asstesFile/car5.webp'
import img6 from '../../asstesFile/car6.webp'


const Car = () => {



    const carItem = [
        {
            id: 1,
            image: img1
        },
        {
            id: 2,
            image: img2
        },
        {
            id: 3,
            image: img3
        },
        {
            id: 4,
            image: img4
        },
        {
            id: 5,
            image: img5
        },
        {
            id: 6,
            image: img6
        },
    ]

    return (
        <div className='container mx-auto'>
            <h1 className='text-3xl mt-6 font-bold text-center p-4'>Our ChoiceAble Cars</h1>

            <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1 '>
                {carItem.map((Car, i) => <Cars
                    key={i}
                    Car={Car}
                ></Cars>)}
            </div>

        </div>
    );
};

export default Car;