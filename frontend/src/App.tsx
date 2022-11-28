import React, { useState } from "react";
import "./App.css";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { SignIn } from "./Pages/SignIn/SignIn";

function App() {
  let content;
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (isLoggedIn) {
    content = <Dashboard></Dashboard>;
  } else {
    content = <SignIn setIsLoggedIn={setIsLoggedIn}></SignIn>;
  }

  return <div>{content}</div>;
}

export default App;
