import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Slider from './Slider/Slider';

const Home = () => {
    const data = useLoaderData()
    
    console.log(data);
    return (
        <div>
            <Slider></Slider>
        </div>
    );
};

export default Home;