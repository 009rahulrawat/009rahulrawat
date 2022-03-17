import React, { useEffect, useState } from "react";
import "./Homepage.css";
import img from "../Assets/profileimg.jpg";
import UserList from "./UsersList/UserList";
// import { db } from "../../firebase-config";
// import { collection, getDocs, query, where } from "firebase/firestore";
import API from "../../API/API";

const Homepage = (props) => {
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
        setLoginUser({
          name: API[i].name,
          email: API[i].email,
        });

        // setLoginUser.email = API[i].email;
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
                <img src={img} />
                <div>
                  <div className="loginUser">
                    <h5 className="text-center">{loginUser.name}</h5>
                    <p className="text-center jDate">15 days ago</p>
                    <p className="text-center">{loginUser.email}</p>
                  </div>
                  {/* {loginUser.map((val, index) => {
                    return (
                      <>
                        <div className="loginUser">
                          <h5 className="text-center">{val.username}</h5>
                          <p className="text-center jDate">
                            {val.joining_date} days ago
                          </p>
                          <p className="text-center">{val.email}</p>
                        </div>
                      </>
                    );
                  })} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
