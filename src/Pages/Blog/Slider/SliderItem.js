import React from 'react';
import './SliderItem.css'

const SliderItem = ({ slide }) => {
    const { image, id, next, prev } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt='' className=" h-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4" data-aos="fade-up-right" data-aos-duration="1500">
                <h1 className='text-5xl font-bold text-white '>
                    Affordable <br />
                    Price for Car <br />
                    Buying
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24  top-1/2" data-aos="fade-up-right" data-aos-duration="1500">
                <p className='text-white text-xl'>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                </p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-3/4">
                <button className="rounded-xl btn btn-warning mr-5">Discover</button>
                <button className="rounded-xl btn btn-outline btn-warning">Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5  bottom-0">
                <a href={`#slide${prev}`} className="hover:bg-pink-600 btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="hover:bg-pink-600 btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default SliderItem;