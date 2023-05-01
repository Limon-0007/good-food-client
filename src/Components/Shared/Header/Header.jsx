import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar bg-base-100 px-8 py-4">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-3xl italic font-bold text-orange-700">
          Good Food
        </Link>
      <div className="flex mx-auto items-center gap-8 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="">Profile</Link>
      </div>
      </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://1.bp.blogspot.com/-pdfqdUS9NfM/XgRNRd9P7zI/AAAAAAAAFE4/OQqODHY5Zyk6ySNzotUPpec_CFcP7w3FgCLcBGAsYHQ/s1600/Beautiful%2Bgirl%2Bpics%2Bindian19.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <div>
        <button className="text-white bg-slate-900 rounded px-4 font-semibold ms-2 py-2">Login</button>
        </div>
    </nav>
  );
};

export default Header;
