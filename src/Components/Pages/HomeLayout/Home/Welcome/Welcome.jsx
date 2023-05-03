import React from "react";
import { FaCertificate, FaPiedPiperAlt, FaTrophy } from "react-icons/fa";

const Welcome = () => {
  return (
    <div className="mt-20 mb-20 px-8">
      <h2 className="font-bold text-4xl italic text-orange-400 text-center">
        welcome to Good Food
      </h2>
      <div className="shadow-xl rounded p-4 w-full md:w-3/4 mx-auto card md:card-side">
        <img
          className="mx-auto mt-8 mb-8 w-full md:w-2/4 rounded"
          src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?size=626&ext=jpg&uid=R101288307&ga=GA1.2.311772693.1668666155&semt=robertav1_2_sidr"
          alt="image not found"
        />
        <div className="card-body my-auto">
          <h2 className="font-semibold flex items-center gap-2 ">
            <FaTrophy></FaTrophy> We are winners of 50 Competitions
          </h2>

          <h2 className="font-semibold flex items-center gap-2">
            <FaPiedPiperAlt></FaPiedPiperAlt> 27 Professional chef trainers
          </h2>
          <h2 className="font-semibold flex items-center gap-2">
            <FaCertificate></FaCertificate> Guaranteed fast employment
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
