import React from 'react';
import img1 from '../../../asstesFile/car1.webp'
import img2 from '../../../asstesFile/car5.webp'
import img3 from '../../../asstesFile/car6.webp'
import img4 from '../../../asstesFile/car4.webp'
import img5 from '../../../asstesFile/car5.webp'
import img6 from '../../../asstesFile/car6.webp'

import './Slider.css'
import SliderItem from './SliderItem';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
import { EffectCards } from "swiper";
import { Typewriter } from 'react-simple-typewriter';

const Slider = () => {
    return (
        <div className='' data-aos="zoom-out-right" data-aos-duration="2000">
            <div
                style={{
                    backgroundColor: '#6b0f24',
                }}
                className="hero p-16  text-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={img6} alt="" /></SwiperSlide>

                        </Swiper>
                    </div>
                    <div>
                        <div className='mr-4'>
                            <h1 className="text-5xl font-bold my-5">Choice Your Car</h1>
                            <span className='text-white text-bold text-2xl mt-6'>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Cars have controls for driving, parking, passenger comfort, and a variety of lights. Over the decades, additional features and controls have been added to vehicles, making them progressively more complex. These include rear-reversing cameras, air conditioning, navigation systems, and in-car entertainment. Most cars in use in the early 2020s are propelled by an internal combustion engine, fuelled by the combustion of fossil fuels. Electric cars, which were invented early in the history of the car, became commercially available in the 2000s and are predicted to cost less to buy than gasoline cars before 2025. The transition from fossil fuels to electric cars features prominently in most climate change mitigation scenarios, such as Project Drawdown 100 actionable solutions for climate change.',]}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={60}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </div>
                        <div className="form-control">
                            <div className="">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Slider;