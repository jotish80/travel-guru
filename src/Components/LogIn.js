import React, { useContext, useState } from "react";
import Icon from "../Icon/fb.png";
import Icon2 from "../Icon/google.png";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase.config";
import { UserContext } from "../App";
import { useHistory, useLocation } from "react-router-dom";
import { Form } from "react-bootstrap";
import "./LogIn.css";

firebase.initializeApp(firebaseConfig);

const LogIn = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [userNew, setUserNew] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useState({
    isSignIn: false,
    success: false,
    name: "",
    password: "",
    email: "",
    error: "",
  });
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const handelSignIn = () => {
    //Start Log in with google //
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, email } = res.user;
        const signInUser = {
          isSignIn: true,
          name: displayName,
          email,
        };
        // setUser(signInUser);
        setLoggedUser(signInUser);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // End log in with google  //

  // Start log in with facebook  //
  const handleFbSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((res) => {
        const newUserInfo = { ...user };
        setUser(newUserInfo);
        console.log("sign in fb", res.user);
        const { displayName, email } = res.user;
        const newUser = { name: displayName, email };
        setLoggedUser(newUser);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  // End LogIn with facebook //

  // start HandleBlur  ///
  const handleBlur = (event) => {
    let isFormValid = true;
    if (event.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      const isPasswordValid = event.target.value.length > 6;
      const passwordNumber = /\d{1}/.test(event.target.value);
      isFormValid = isPasswordValid && passwordNumber;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };
  // End handleBlur //
  // start with handle create account //
  const handleCreateAccount = (event) => {
    if (userNew && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserInfo(user.name);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          setUser(newUserInfo);
        });
    }
    // end handle create account  ///
    //start signInWithEmailAndPassword //
    if (!userNew && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          setUser(newUserInfo);
          console.log("sign in user", res.user);
          const { displayName, email } = res.user;
          const newUser = { name: displayName, email };
          setLoggedUser(newUser);
          history.replace(from);
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ...
        });
    }
    event.preventDefault();
  };
  // End signInWithEmailAndPassword //

  //start updateUserInfo //
  const updateUserInfo = (name) => {
    var user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        // Update successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  // End updateUserInfo //
  return (
    <div className="login">
      <div className="form">
        <Form onSubmit={handleCreateAccount}>
          <h1>Login</h1>
          {userNew && (
            <input
              className="input-field"
              type="text"
              name="first-name"
              onBlur={handleBlur}
              placeholder="First name"
              required
            />
          )}
          <br />
          {userNew && (
            <input
              className="input-field"
              type="text"
              name="last-name"
              onBlur={handleBlur}
              placeholder="Last name"
              required
            />
          )}{" "}
          <br />
          <input
            className="input-field"
            type="text"
            name="email"
            onBlur={handleBlur}
            placeholder="User Name or Email"
            required
          />
          <br />
          <input
            className="input-field"
            type="password"
            name="password"
            onBlur={handleBlur}
            placeholder="Password"
            required
          />
          <br />
          {userNew && (
            <input
              className="input-field"
              type="text"
              name="last-name"
              onBlur={handleBlur}
              placeholder="Confirm password"
              required
            />
          )}
          <br />
          <small>Password must have 6 character(1number)</small>
          <br />
          <input type="checkbox" name="RememberMe" id="" />
          <p>Remember Me</p>
          <br />
          <button
            style={{
              width: "70%",
              border: "1px solid gray",
              borderRadius: "25px",
              padding: "5px 0px",
              backgroundColor: "rgb(255,166,0)",
            }}
          >
            Login
          </button>{" "}
          <br />
          <hr />
          <p>
            Already have an account?{" "}
            <span
              style={{
                color: "rgb(255,166,0)",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => setUserNew(!userNew)}
            >
              Create New Account
            </span>{" "}
          </p>{" "}
          <br />
          <p>Or</p>
          <button
            style={{
              width: "70%",
              border: "1px solid gray",
              borderRadius: "25px",
              padding: "5px 0px",
            }}
            onClick={handelSignIn}
          >
            <img
              style={{ width: "10%", height: "25px", objectFit: "contain" }}
              src={Icon2}
              alt=""
            />
            &nbsp; &nbsp; &nbsp; Continue with Google{" "}
          </button>{" "}
          <br />
          <br />
          <button
            style={{
              width: "70%",
              border: "1px solid gray",
              borderRadius: "25px",
              padding: "5px 0px",
              position: "relative",
            }}
            onClick={handleFbSignIn}
          >
            <img
              style={{ width: "10%", height: "30px", objectFit: "contain" }}
              src={Icon}
              alt=""
            />
            &nbsp; &nbsp; &nbsp; Continue with Facebook
          </button>{" "}
          <br />
        </Form>

        <p style={{ color: "red" }}>{user.error}</p>
      </div>
    </div>
  );
};

export default LogIn;
