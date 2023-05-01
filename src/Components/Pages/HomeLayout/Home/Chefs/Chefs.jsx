import React from "react";

const Chefs = ({ data }) => {
  return (
    <div className="mt-12 px-8">
      <h2 className="font-bold text-black text-4xl text-center mb-8">Our Chefs</h2>
      {/* cards */}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.map((singleData) =>  <div key={singleData.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img className="h-60 w-full"
                src={singleData.chef_picture}
                alt="Image not found"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{singleData.chef_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
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
