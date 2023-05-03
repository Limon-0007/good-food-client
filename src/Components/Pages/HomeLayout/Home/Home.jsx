import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Slider from './Slider/Slider';
import Chefs from './Chefs/Chefs';

const Home = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <>
            <Slider></Slider>
            <Chefs data={data}></Chefs>
        </>
    );
};

export default Home;