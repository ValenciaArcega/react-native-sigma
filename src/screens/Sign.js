import { useState } from "react";
import { SignUp } from "../components/SignUp";
import { SingIn } from "../components/SignIn";

export function Sign() {
  const [isRegistering, setIsRegistering] = useState(false);

  if (isRegistering) return <SignUp setIsRegistering={setIsRegistering} />;
  else return <SingIn setIsRegistering={setIsRegistering} />;
}