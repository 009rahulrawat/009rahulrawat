import React, { useEffect, useState } from "react";
import "./Homepage.css";
// import img from "../Assets/profileimg.jpg";
import UserList from "./UsersList/UserList";
// import { db } from "../../firebase-config";
// import { collection, getDocs, query, where } from "firebase/firestore";
import API from "../../API/API";

import { useDispatch } from "react-redux";
import { userAuthEmail } from "../../actions/index";
import ImageRecommendation from "./ImageRecommendation/ImageRecommendation";

const Homepage = (props) => {
  const dispatch = useDispatch();
  const [loginUser, setLoginUser] = useState({
    name: "",
    email: "",
  });
  // const userRef = query(
  //   collection(db, "users"),
  //   where("email", "==", `${props.userKey}`)
  // );

  const fetchUserData = () => {
    for (var i = 0; i < API.length; i++) {
      if (API[i].email === props.userKey) {
        // console.log(API[i].email);
        setLoginUser({
          name: API[i].name,
          email: API[i].email,
          image: API[i].image,
        });
        // setLoginUser.email = API[i].email;
        dispatch(userAuthEmail(loginUser));
      }
    }
    // console.log(loginUser);
    // try {
    //   const data = await getDocs(userRef);
    //   setLoginUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //   console.log(loginUser);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <>
      <div className="container-fluid profileContainer py-5">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <UserList />
            </div>
            <div className="profileBox col-8">
              <div className="innerprofilebox py-3 userBoxShadow">
                {/* <img className="userImage" src={loginUser.image} /> */}
                <img
                  className="userImage"
                  src="https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_960_720.jpg"
                />
                <div>
                  <div className="loginUser">
                    {/* <h5 className="text-center">{loginUser.name}</h5> */}
                    <h5 className="text-center">Aman Rawat</h5>
                    <p className="text-center jDate">15 days ago</p>
                    {/* <p className="text-center">{loginUser.email}</p> */}
                    <p className="text-center">amanrawa2@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <ImageRecommendation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
