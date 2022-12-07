import React from 'react';
import Slider from '../../Blog/Slider/Slider';
import AdvertiseMent from '../AdvertiseMent/AdvertiseMent';
import Categories from '../Category/Categories';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Categories></Categories>
            <AdvertiseMent></AdvertiseMent>
            <Hero></Hero>
        </div>
    );
};

export default Home;