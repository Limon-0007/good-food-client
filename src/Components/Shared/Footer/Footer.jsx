import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-8 bg-slate-600 px-8 py-6 absolute w-full">
      <h2 className="text-5xl font-bold text-orange-400 text-center">
        <Link to="/">
          Good <span className="text-slate-400">Food</span>
        </Link>
      </h2>
      <div className="flex mt-6">
        <ul className="mx-auto md:flex font-semibold text-lg text-white gap-8">
          <div className="md:hover:bg-slate-300 hover:bg-slate-900 px-2 py-1 rounded duration-300">
            <Link
              className={({ isActive, isPending }) =>
                isActive ? "text-red-400" : isPending ? "pending" : ""
              }
              to="/"
            >
              Home
            </Link>
          </div>
          <div className="md:hover:bg-slate-300 hover:bg-slate-900 px-2 py-1 rounded duration-300">
            <Link
              className={({ isActive, isPending }) =>
                isActive ? "text-red-400" : isPending ? "pending" : ""
              }
              to="/blog"
            >
              Blog
            </Link>
          </div>
          <div className="md:hover:bg-slate-300 hover:bg-slate-900 px-2 py-1 rounded duration-300">
            <Link
              className={({ isActive, isPending }) =>
                isActive ? "text-red-400" : isPending ? "pending" : ""
              }
              to="/about"
            >
              About us
            </Link>
          </div>
          <div className="md:hover:bg-slate-300 hover:bg-slate-900 px-2 py-1 rounded duration-300">
            <Link
              className={({ isActive, isPending }) =>
                isActive ? "text-red-400" : isPending ? "pending" : ""
              }
              to="/contact"
            >
              Contact us
            </Link>
          </div>
        </ul>
      </div>
      {/* icons */}
      <div className="text-white text-2xl flex mt-8">
        <div className="flex mx-auto gap-8 cursor-pointer">
          <FaFacebookF></FaFacebookF>
          <FaTwitter></FaTwitter>
          <FaGithub></FaGithub>
          <FaInstagram></FaInstagram>
        </div>
      </div>
    </div>
  );
};

export default Footer;
