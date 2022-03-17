import React, { useState, useEffect, useContext } from "react";
import "./UserList.css";
import { db } from "../../../firebase-config";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import ContextState from "../../Context/ContextState";

const UserList = () => {
  const a = useContext(ContextState);
  // console.log(a);
  const [user, setUser] = useState([]);
  const userCollectionRef = collection(db, "users");
  const fetchData = async () => {
    try {
      const data = await getDocs(userCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (err) {
      console.log(err);
    }
    // console.log(user[0].id);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="usersList">
        {user.map((val, index) => {
          return (
            <>
              <div className="usersBox userBoxShadow mb-3">
                <div className="row">
                  <div className="col-5 userImgBox ">
                    <img src={val.image} />
                  </div>
                  <div className="col-7 displayFlexUsername">
                    <p className="username">{val.username}</p>
                    <small>{val.joining_date} days ego</small>
                    <p className="useremail">{val.email}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default UserList;
