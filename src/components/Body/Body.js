import React from "react";
import Homepage from "../Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import FindUser from "../FindUser/FindUser";
import ProfilePage from "../ProfilePage/ProfilePage";
import Navbar from "../Navbar/Navbar";
import ContextState from "../Context/ContextState";
const Body = (props) => {
  return (
    <>
      <ContextState>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<Homepage userKey={props.userKey} />}
          />
          <Route exact path="/find-users" element={<FindUser />} />
          <Route exact path="/user-profile" element={<ProfilePage />} />
        </Routes>
      </ContextState>
    </>
  );
};

export default Body;
