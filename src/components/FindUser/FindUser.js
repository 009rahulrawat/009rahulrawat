import React, { useEffect, useState } from "react";
import API from "../../API/API";
import "./FindUser.css";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FindUser = () => {
  const [userType, setUsersType] = useState("");
  const [fetchedUsers, setFetchedUsers] = useState([{}]);
  const [addFriends, setAddFriends] = useState([]);

  const handleFetchUser = () => {
    console.log(userType);
    setFetchedUsers(API);
  };

  var storedUsers = JSON.parse(localStorage.getItem("addFriend"));

  const handleAddFriend = (userInterest) => {
    var flag = 0;
    if (addFriends.length == 0) {
      setAddFriends((addFriend) => [...addFriend, userInterest]);
    } else {
      for (var i = 0; i < addFriends.length; i++) {
        // console.log(addFriends[i], userInterest);
        if (addFriends[i] === userInterest) {
          flag = 1;
          break;
        }
      }
      if (flag === 0) {
        setAddFriends((addFriend) => [...addFriend, userInterest]);
      }
    }
    localStorage.setItem("addFriend", JSON.stringify(addFriends));
  };

  useEffect(() => {
    if (storedUsers != null) {
      setAddFriends(storedUsers);
    }
  }, []);
  return (
    <>
      <div className="findUser container ">
        <div className="mt-5 userSearchBar">
          <div class="mb-3">
            <input
              style={{ boxShadow: "1px 1px 2px 1px #e5e5e5" }}
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Search user interest"
              onChange={(e) => setUsersType(e.target.value)}
            />
          </div>
          <div className="ms-4">
            <button
              type="submit"
              class="btn btn-primary"
              onClick={handleFetchUser}
            >
              Search
            </button>
          </div>
        </div>
        {/* recommended users... */}
        <div className="recUsers text-center">
          <div className="fetchedUsers">
            {fetchedUsers.map((val, idx) => {
              if (val.interest === userType) {
                return (
                  <>
                    <div
                      className="my-3 py-2 userBoxDiv"
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <img className="userImage" src={val.image} />
                      <div>
                        <p>{val.name}</p>
                        <p>{val.email}</p>
                        <p>interest: {val.interest}</p>
                      </div>
                      <div className="addFriend">
                        <button onClick={() => handleAddFriend(val.interest)}>
                          <FontAwesomeIcon icon={faUserPlus} />
                        </button>
                      </div>
                    </div>
                  </>
                );
              }
            })}
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default FindUser;
