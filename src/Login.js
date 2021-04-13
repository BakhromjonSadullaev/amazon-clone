import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

import "./login.css";
const Login = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
        console.log(auth);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login-container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to Amazon's fake clone Conditions of Use &
          Sale done by Bakhromjon Sadullaev. Please see our Privacy Notice, our
          Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button className="login-registerButton" onClick={register}>
          Create your Amazon Accaount
        </button>
      </div>
    </div>
  );
};

export default Login;
