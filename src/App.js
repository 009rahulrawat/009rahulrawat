import "./App.css";
import SignUp from "./components/SignUpPage/SignUp";
import Homepage from "./components/Homepage/Homepage";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();
  const [userEmail, setUserEmail] = useState();
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setUserEmail(currentUser.email);
    // console.log(currentUser.email);
  });
  return (
    <div className="App">
      {user ? <Homepage userKey={userEmail} /> : <SignUp />}
    </div>
  );
}

export default App;
