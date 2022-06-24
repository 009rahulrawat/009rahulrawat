import React, { useEffect, useState } from "react";
import API from "../../API/API";

const ProfilePage = () => {
  const [recommendedFriends, setRecommendedFriends] = useState([{}]);
  const [noFriends, setNoFriends] = useState(true);
  const [userCount, setUserCount] = useState(5);
  var storedUsers = JSON.parse(localStorage.getItem("addFriend"));
  console.log(storedUsers);

  // -------------shuffling code--------------
  // function shuffle(array) {
  //   let currentIndex = array.length,
  //     randomIndex;

  //   // While there remain elements to shuffle.
  //   while (currentIndex !== 0) {
  //     // Pick a remaining element.
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;

  //     // And swap it with the current element.
  //     [array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex],
  //       array[currentIndex],
  //     ];
  //   }
  //   return array;
  // }
  // ----------------------------------------

  const handleRecommendedFriends = () => {
    if (storedUsers === null) {
      console.log("No recommendations for you!");
    } else {
      API.forEach((element) => {
        for (var i = 0; i < storedUsers.length; i++) {
          if (element.interest === storedUsers[i]) {
            setRecommendedFriends((recommendedFriends) => [
              ...recommendedFriends,
              element,
            ]);
          }
        }
      });
      console.log("recdf:", recommendedFriends);
    }
    // shuffle(recommendedFriends);
  };

  useEffect(() => {
    if (storedUsers !== null) setNoFriends(false);
  }, []);

  useEffect(() => {
    handleRecommendedFriends();
  }, []);
  console.log(storedUsers);
  return (
    <div className="container">
      <div className="text-center mt-3">
        <strong>Recommended friends suggestions for you.</strong>
      </div>
      <div className="recUsers text-center">
        {noFriends ? (
          <div style={{ color: "red" }}>
            Opps! No friend suggestions for you..
          </div>
        ) : (
          <div className="fetchedUsers">
            {recommendedFriends.map((val, idx) => {
              if (idx < userCount) {
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
                        {/* <button onClick={() => handleAddFriend(val.interest)}>
                        <FontAwesomeIcon icon={faUserPlus} />
                      </button> */}
                      </div>
                    </div>
                  </>
                );
              }
            })}
          </div>
        )}
        <div className="my-5">
          {storedUsers && (
            <div>
              <button
                className="btn btn-success"
                onClick={() => setUserCount(userCount + 5)}
              >
                Show More
              </button>
              <button
                className="btn btn-danger ms-2"
                onClick={() => {
                  setRecommendedFriends([{}]);
                  localStorage.clear();
                }}
              >
                clear all recommendations
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
