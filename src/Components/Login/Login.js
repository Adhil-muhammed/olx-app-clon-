import React, { useState, useContext } from "react";
import { FireContext } from "../../FirebseContext/Context";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../olx-logo.png";
import "./Login.css";
import "firebase/auth";
import "firebase/firestore";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FireContext);
  const history = useHistory();
  function Loginhandler(e) {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("logged");
      })
      .catch((error) => {
        alert(error.message);
      })
      .then(() => {
        history.push("/");
      });
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt=" unavailable"></img>
        <form onSubmit={Loginhandler} onS>
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <br />
        <Link to={"/singup"}>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
