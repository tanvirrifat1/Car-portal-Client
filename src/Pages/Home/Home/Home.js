import React from 'react';
import Slider from '../../Blog/Slider/Slider';
import Categories from '../Category/Categories';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Categories></Categories>
            <Hero></Hero>
        </div>
    );
};

export default Home;