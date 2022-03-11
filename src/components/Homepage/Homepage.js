import React, { useEffect } from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { async } from "@firebase/util";
import "./Homepage.css";
import logo from "../Assets/instalogo.png";
import img from "../Assets/profileimg.jpg";

const Homepage = (props) => {
  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <>
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
            <button className="btn btn-primary" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid profileContainer py-5">
        <div className="container">
          <div className="profileBox">
            <img src={img} />

            <div>
              <h5>User : {props.userKey}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
