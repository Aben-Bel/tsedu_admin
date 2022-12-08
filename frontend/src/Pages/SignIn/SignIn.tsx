import React, { useState } from "react";
import { userProvider } from "../../provider/user-provider";
import "./SignIn.css";

interface loginState {
  setIsLoggedIn: (data: any) => void;
}
export function SignIn({ setIsLoggedIn }: loginState) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLoginClick(e: any) {
    if (email !== "" && password !== "") {
      userProvider.login({ email, password }).then((token) => {
        if (token) {
          sessionStorage.setItem("token", JSON.stringify(token));
          setIsLoggedIn(true);
        }
      });
    }
  }

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
          type="password"
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
          name="user"
          placeholder="Password"
        />
        <button style={{ color: "#4486A3" }} onClick={handleLoginClick}>
          Login
        </button>
      </form>
    </div>
  );
}
