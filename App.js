import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from './src/credentials';
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";

const auth = getAuth(firebaseApp);

export default function App() {

  const [globalUser, setGlobalUser] = useState(null);

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      setGlobalUser(firebaseUser);
    } else {
      setGlobalUser(null);
    }
  });

  return (
    <>{globalUser
      ? <Home />
      : <Login />
    }</>
  );
};
