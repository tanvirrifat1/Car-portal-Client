import React from 'react';
import Slider from '../../Blog/Slider/Slider';
import Category from '../Category/Category';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Hero></Hero>
            <Category></Category>
        </div>
    );
};

export default Home;