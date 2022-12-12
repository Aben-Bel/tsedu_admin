import React, { useEffect, useState } from "react";
import "./App.css";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { SignIn } from "./Pages/SignIn/SignIn";
import { getToken } from "./utils/getToken";
import jwt from "jsonwebtoken";

function App() {
  let content;
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (token) {
      const data: any = jwt.decode(token, { complete: true });
      const now = new Date();
      if (data.payload.exp * 1000 > now.getTime()) setIsLoggedIn(true);
      else {
        sessionStorage.removeItem("token");
      }
    }
  }, []);

  if (isLoggedIn) {
    content = <Dashboard setIsLoggedIn={setIsLoggedIn}></Dashboard>;
  } else {
    content = <SignIn setIsLoggedIn={setIsLoggedIn}></SignIn>;
  }

  return <div>{content}</div>;
}

export default App;
