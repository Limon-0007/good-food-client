import React, { useContext } from "react";
import { FaRegHeart } from 'react-icons/fa';
import { Link, useParams } from "react-router-dom";

const Chefs = ({ data }) => {
  const params = useParams()
  console.log(params);

  return (
    <div className="mt-12 md:px-8 px-3">
      <h2 className="font-bold text-black text-4xl text-center mb-8">Our Chefs</h2>
      {/* cards */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 2xl:grid-cols-4">
      {data?.map((singleData) =>  <div key={singleData.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img className="h-60 w-full"
                src={singleData.chef_picture}
                alt="Image not found"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl">{singleData.chef_name}</h2>
              <p className="font-semibold text-sm">Years of experience: {singleData.years_of_experience}</p>
              <p className="font-semibold text-sm">Number of Recipes: {singleData.number_of_recipes}</p>
              <p className="font-semibold text-md flex gap-2 items-center"><FaRegHeart/> {singleData.likes}</p>
              <div className="card-actions justify-end">
                <Link to={`/home/${singleData.id}`}>
                <button className="bg-slate-900 text-white rounded py-2 px-4 font-semibold hover:bg-slate-600 duration-200">View Recipes</button></Link>
              </div>
            </div>
          </div>
        )
        }
      </div>
      
    </div>
  );
};

export default Chefs;
