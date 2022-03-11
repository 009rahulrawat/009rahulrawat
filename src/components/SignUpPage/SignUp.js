import React, { useState } from "react";
import "./SignUp.css";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { async } from "@firebase/util";

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [user, setUser] = useState("Null");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const user = signInWithEmailAndPassword(auth, email, password);
      // console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSignOut = async () => {
  //   await signOut(auth);
  // };

  return (
    <>
      <div className="signUp">
        <div className="signUp_container text-light">
          <div>
            <h3 className="text-center display-5 ">Sign In</h3>
          </div>
          <form>
            <div className="mb-3">
              <label assName="form-label">Email address</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button
              // type="submit"
              className="btn btn-primary"
              onClick={handleSignIn}
            >
              Sign In
            </button>
            {/* <button onClick={handleSignOut}>Sign Out</button> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
