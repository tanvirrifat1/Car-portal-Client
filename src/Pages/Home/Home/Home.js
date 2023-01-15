import React from 'react';
import useTitle from '../../../UseTittle';
import Slider from '../../Blog/Slider/Slider';
import Brand from '../../Brand/Brand';
import Car from '../../Car/Car';
import Other from '../../Other/Other';
import Categories from '../Category/Categories';
import Hero from '../Hero/Hero';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Slider></Slider>
            <Categories></Categories>
            <Car></Car>
            <Brand></Brand>
            <Hero></Hero>
            <Other></Other>
        </div>
    );
};

export default Home;