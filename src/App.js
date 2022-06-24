import "./App.css";
import SignUp from "./components/SignUpPage/SignUp";
import Body from "./components/Body/Body";
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();
  const [userEmail, setUserEmail] = useState();
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setUserEmail(currentUser.email);
    // console.log(user);
  });
  return (
    <div className="App">
      {user ? <Body userKey={userEmail} /> : <SignUp />}
    </div>
  );
}

export default App;
