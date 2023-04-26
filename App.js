import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from './src/credentials';
import Home from "./src/screens/Home";
import { Sign } from "./src/screens/Sign";


export default function App() {
  // var
  const [globalUser, setGlobalUser] = useState(null);
  const auth = getAuth(firebaseApp);
  // fn
  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) setGlobalUser(firebaseUser);
    else setGlobalUser(null);
  });
  // cm
  return <>{globalUser ? <Home /> : <Sign />}</>;
};
