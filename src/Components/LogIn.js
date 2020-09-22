import React, { useContext, useState } from 'react';
import Icon from '../Icon/fb.png';
import Icon2 from '../Icon/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import { UserContext } from '../App';
import { useHistory, useLocation } from 'react-router-dom';

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
    name: '',
    password: '',
    email: '',
    error: ''
  })
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const handelSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider)
      .then(res => {
        const { displayName, email } = res.user;
        const signInUser = {
          isSignIn: true,
          name: displayName,
          email
        }
        // setUser(signInUser);
        setLoggedUser(signInUser)
        history.replace(from);
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  const handleFbSignIn = () => {
    firebase.auth().signInWithPopup(fbProvider)
      .then(res => {
        const newUserInfo = { ...user }
        setUser(newUserInfo);
        console.log('sign in fb', res.user);
        const { displayName, email } = res.user;
        const newUser = { name: displayName, email }
        setLoggedUser(newUser);
        history.replace(from);
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);

      });
  }

  const handleBlur = (event) => {
    let isFormValid = true;
    if (event.target.name === 'email') {
      isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === 'password') {
      const isPasswordValid = event.target.value.length > 6;
      const passwordNumber = /\d{1}/.test(event.target.value);
      isFormValid = isPasswordValid && passwordNumber;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  }
  const handleCreateAccount = (event) => {
    if (userNew && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user }
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserInfo(user.name);
        })
        .catch(error => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          setUser(newUserInfo);
        });

    }
    if (!userNew && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user }
          setUser(newUserInfo);
          console.log('sign in user', res.user);
          const { displayName, email } = res.user;
          const newUser = { name: displayName, email }
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
  }

  const updateUserInfo = name => {
    var user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name

    }).then(function () {
      // Update successful.
    }).catch(function (error) {
      // An error happened.
    });
  }

  return (
    <div style={{ textAlign: "center" }}>

      <form onSubmit={handleCreateAccount}>
        <h1>Create an account</h1>
        <input type="checkbox" onChange={() => setUserNew(!userNew)} name="userNew" />
        <label htmlFor="userNew"> New User Sign Up</label><br />
        {userNew && <input type="text" name="first-name" onBlur={handleBlur} placeholder="First name" required />} <br />
        {userNew && <input type="text" name="last-name" onBlur={handleBlur} placeholder="Last name" required />} <br />
        <input type="text" name="email" onBlur={handleBlur} placeholder="User Name or Email" required /> <br />
        <input type="password" name="password" onBlur={handleBlur} placeholder="Password" required /> <br />

        {userNew && <input type="text" name="last-name" onBlur={handleBlur} placeholder="Confirm password" required />}
        <br />

        <input type="submit" value="Login" /> <br />
        <hr />
        <p>Already have an account? </p> <br />
        <p>Or</p>
        <img style={{ width: '2%' }} src={Icon2} alt="" />  <button onClick={handelSignIn}>Continue with google </button> <br />
        <img style={{ width: '2%' }} src={Icon} alt="" /> <button onClick={handleFbSignIn}>Continue with facebook</button> <br />
      </form>

      <p style={{ color: 'red' }}>{user.error}</p>
    </div>
  );
};

export default LogIn;