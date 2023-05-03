import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Slider from './Slider/Slider';
import Chefs from './Chefs/Chefs';

const Home = () => {
    const data = useLoaderData()
    useEffect(() => {
        fetch("/public/data/data.json")
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <>
            <Slider></Slider>
            <Chefs data={data}></Chefs>
        </>
    );
};

export default Home;