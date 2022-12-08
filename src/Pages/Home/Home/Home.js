import React from 'react';
import useTitle from '../../../UseTittle';
import Slider from '../../Blog/Slider/Slider';
import Car from '../../Car/Car';
import Categories from '../Category/Categories';
import Hero from '../Hero/Hero';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Slider></Slider>
            <Categories></Categories>
            <Car></Car>
            <Hero></Hero>
        </div>
    );
};

export default Home;