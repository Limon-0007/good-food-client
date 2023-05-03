import React, { useEffect, useState } from "react";

const Specialist = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("/public/data/data.json")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <div>
        <h2 className="text-center font-bold text-4xl mt-20 mb-8 italic text-orange-400">Our Specialists</h2>
      <div className="mt-8 px-8 grid md:grid-cols-3 grid-cols-1 gap-4 mb-10">
        {chefs?.map((chef) => (
          <div key={chef.id}>
            <div className="card card-compact w-auto bg-base-100 shadow-xl h-full">
              <figure>
                <img
                  className="h-52 w-full object-cover"
                  src={chef.photo}
                  alt="Image not found"
                />
              </figure>
              <div className="card-body">
                <h2 className="font-semibold text-xl">{chef.name}</h2>
                <p className="font-semibold">Specialty: {chef.specialty}</p>
                <p className="font-semibold">Most popular recipe: {chef.recipe}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialist;
