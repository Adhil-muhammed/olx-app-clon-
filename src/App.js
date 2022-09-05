import React from "react";
import { useEffect, useContext } from "react";
import "./App.css";
import { context1 } from "./FirebseContext/Context";
import { FireContext } from "./FirebseContext/Context";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "firebase/auth";
/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";
import "./Pages/Signup";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Create from "./Components/Create/Create";
import ViewPost from "./Pages/ViewPost";
function App() {
  const { firebase } = useContext(FireContext);
  const { setNameOfuser } = useContext(context1);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setNameOfuser(user);
    });
  });

  return (
    <div>
      <Router>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/signup"}>
          <Signup />
        </Route>
        <Route path={"/Login"}>
          <Login />
        </Route>
        <Route path={"/Creat"}>
          <Create />
        </Route>
        <Route path={"/ViewPost"}>
         <ViewPost/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
