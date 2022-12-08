import React from 'react';
import img1 from '../../../asstesFile/car1.webp'
import img2 from '../../../asstesFile/car5.webp'
import img3 from '../../../asstesFile/car6.webp'
import './Slider.css'
import SliderItem from './SliderItem';

const Slider = () => {

    const bannerData = [
        {
            image: img1,
            prev: 2,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 3,
            id: 3,
            next: 1
        },
        // {
        //     image: img4,
        //     prev: 3,
        //     id: 4,
        //     next: 5
        // },
        // {
        //     image: img5,
        //     prev: 4,
        //     id: 5,
        //     next: 6
        // },
        // {
        //     image: img6,
        //     prev: 5,
        //     id: 6,
        //     next: 1
        // }
    ]

    return (
        <div className='mt-8' data-aos="zoom-out-right" data-aos-duration="2000">

            <div>
                <div className="carousel  py-10">
                    {
                        bannerData.map(slide => <SliderItem
                            key={slide.id}
                            slide={slide}
                        ></SliderItem>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Slider;