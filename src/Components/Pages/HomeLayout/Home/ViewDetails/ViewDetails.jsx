import React from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  const data = useLoaderData();
  const { name, picture, bio, likes, recipes, years_of_experience } = data;
  return (
    <div className="md:px-8 px-4">
      {/* chef details */}
      <div className="shadow-xl rounded md:p-4 p-2 card md:card-side w-4/5 mx-auto mt-6 mb-8">
        <img
          className="md:w-2/4 w-full rounded"
          src={picture}
          alt="Image not found"
        />
        <div className="card-body">
          <h2 className="font-bold text-2xl">{name}</h2>
          <p className="font-semibold text-sm">{bio}</p>
          <p className="font-semibold text-sm">Total Likes: {likes}</p>
          <p className="font-semibold text-sm">
            Experience: {years_of_experience} years
          </p>
        </div>
      </div>
      {/* recipes */}
      <h2 className="text-center font-bold text-5xl mt-8 mb-8 italic">
        Recipes
      </h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="mb-8">
          <div className="card bg-base-100 shadow-xl w-3/4 mx-auto">
            <figure>
              <img
                className="rounded"
                src={recipe.photo}
                alt="Image not found"
              />
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-2xl">{recipe.name}</h2>
              <p className="font-semibold text-sm mt-4 mb-4">
                {recipe.cooking_method}
              </p>
              {recipe.ingredients.map((items) => (
                <li className="font-semibold" key={items}>
                  {items}
                </li>
              ))}
              <p className="font-semibold">
                Ratings:{" "}
                <Rating className="text-orange-500"
                  placeholderRating={recipe.rating}
                  emptySymbol={
                    <p>{<FaStarHalf></FaStarHalf>}</p>
                  }
                  placeholderSymbol={
                    <p>{<FaStar></FaStar>}</p>
                  }
                  fullSymbol={
                    <p>{<FaStar></FaStar>}</p>
                  }
                />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewDetails;
