import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Routes/AuthContext/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menu, setMenu] = useState(false);

  const signOut = () => {
    logOut()
    .then(result => {
      console.log(result)
    })
    .then(error => {
      console.log(error.message);
    })
  }
  
  return (
    <nav className="md:flex items-center justify-between md:px-8 py-5">
      <div className="flex items-center justify-between px-6">
        {/* nav items */}
        <div>
          <h2 className="text-4xl font-bold text-orange-400">
            <Link className="flex" to="/">
              <img
                className="h-10 w-10"
                src="https://svgsilh.com/svg/305499.svg"
                alt="Image not found"
              />
              Good <span className="text-slate-400">Food</span>
            </Link>
          </h2>
        </div>
        {/* toggle */}
        <div className="md:hidden" onClick={() => setMenu(!menu)}>
          <span className="mt-2">
            {menu === true ? (
              <FontAwesomeIcon className="h-6 w-6" icon={faXmark} />
            ) : (
              <FontAwesomeIcon className="h-6 w-6" icon={faBars} />
            )}
          </span>
        </div>
      </div>
      {/* nav items */}
      <ul
        className={`md:flex md:items-center md:gap-16 font-semibold absolute md:static duration-300 px-6 text-slate-950 md:px-0 md:py-0 py-4 z-50 bg-slate-300 md:bg-inherit w-full md:w-auto text-lg ${
          menu ? "top-16" : "-top-96"
        }`}
      >
        <div className="md:hover:bg-slate-300 hover:bg-slate-900 px-2 py-1 rounded duration-300">
          <NavLink
            className={({ isActive, isPending }) =>
              isActive ? "text-red-400" : isPending ? "pending" : ""
            }
            to="/home"
          >
            Home
          </NavLink>
        </div>
        <div className="md:hover:bg-slate-300 hover:bg-slate-900 px-2 py-1 rounded duration-300">
          <NavLink
            className={({ isActive, isPending }) =>
              isActive ? "text-red-400" : isPending ? "pending" : ""
            }
            to="/blog"
          >
            Blog
          </NavLink>
        </div>
        <div className="md:hover:bg-slate-300 hover:bg-slate-900 px-2 py-1 rounded duration-300">
          <NavLink
            className={({ isActive, isPending }) =>
              isActive ? "text-red-400" : isPending ? "pending" : ""
            }
            to="/about"
          >
            About us
          </NavLink>
        </div>
        <div className="md:hover:bg-slate-300 hover:bg-slate-900 px-2 py-1 rounded duration-300">
          <NavLink
            className={({ isActive, isPending }) =>
              isActive ? "text-red-400" : isPending ? "pending" : ""
            }
            to="/contact"
          >
            Contact us
          </NavLink>
        </div>
        {!user && (
          <Link to="/login">
            <button className="rounded font-semibold text-white px-4 py-2 bg-slate-600 hover:bg-slate-900 duration-200">
              Login
            </button>
          </Link>
        )}
        {/* image */}
        {user &&  (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://awsimages.detik.net.id/community/media/visual/2022/06/13/zehra-gunes-9.png?w=750&q=90" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link>Settings</Link>
              </li>
              <li onClick={signOut}>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Header;
