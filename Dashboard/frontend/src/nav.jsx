import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div className="Nav">
      {auth ? (
        <ul>
          <li>
            <Link to="/">products</Link>
          </li>
          <li>
            <Link to="/Add">Add</Link>
          </li>
          <li>
            <Link to="/update">update</Link>
          </li>
          <li>
            <Link to="/profile">profile</Link>
          </li>
          <li>
    
            <Link onClick={logOut} to="/signup">
              logout({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="navRight">
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/signup">signup</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
