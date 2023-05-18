import { useState } from "react";
import { SignUp } from "../views/SignUp";
import { SingIn } from "../views/SignIn";

export function Sign() {
  const [isRegistering, setIsRegistering] = useState(false);

  if (isRegistering) return <SignUp setIsRegistering={setIsRegistering} />;
  else return <SingIn setIsRegistering={setIsRegistering} />;
}