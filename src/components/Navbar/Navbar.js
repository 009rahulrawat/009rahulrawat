import React from "react";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";
import logo from "../Assets/instalogo.png";
import { NavLink } from "react-router-dom";
import { faHome, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const handleSignOut = async () => {
    await signOut(auth);
  };
  return (
    <div className="navContainer container-fluid">
      <div className="container displayFlex py-1">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="w-25">
          <nav class="navbar navbar-expand-lg navbar-light ">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </nav>
        </div>
        <div>
          <NavLink to="/">
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
        </div>
        <div>
          <NavLink to="/find-users">
            {" "}
            <FontAwesomeIcon icon={faSearch} />
          </NavLink>
        </div>
        <div>
          <NavLink to="/user-profile">
            {" "}
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
        </div>
        <div className="navSignOut">
          <button className="btn btn-primary" onClick={handleSignOut}>
            Sign Out
          </button>
          {/* <p>{props.userKey}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
