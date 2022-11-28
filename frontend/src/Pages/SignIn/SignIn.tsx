import React, { useState } from "react";

interface loginState {
  setIsLoggedIn: (data: any) => void;
}
export function SignIn({ setIsLoggedIn }: loginState) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginClick(e: any) {
    if (email !== "" && password !== "") {
      console.log("logged in");
      setIsLoggedIn(true);
    }
  }

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form>
        <p>Email</p>
        <input
          type="text"
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
          name="user"
          placeholder="Email"
        />
        <p>Password</p>
        <input
          type="text"
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
          name="user"
          placeholder="Password"
        />
        <button onClick={handleLoginClick}>Login</button>
      </form>
    </div>
  );
}
