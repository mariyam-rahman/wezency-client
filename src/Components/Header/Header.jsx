import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <h2 className="font-extrabold text-4xl">Wezency</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="applied-jobs">Applied Jobs</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <button className="primary-btn">Start Applying</button>
    </nav>
  );
};

export default Header;