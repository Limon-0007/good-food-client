import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Slider from './Slider/Slider';
import Chefs from './Chefs/Chefs';
import Specialist from './Specialist/Specialist';
import Welcome from './Welcome/Welcome';

const Home = () => {
    const data = useLoaderData()
  
    return (
        <>
            <Slider></Slider>
            <Chefs data={data}></Chefs>
            <Welcome></Welcome>
            <Specialist></Specialist>
        </>
    );
};

export default Home;