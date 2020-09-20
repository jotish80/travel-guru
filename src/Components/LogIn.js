import React, { useContext, useState } from 'react';
import Icon from '../Icon/fb.png';
import Icon2 from '../Icon/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import { userContext } from '../App';

firebase.initializeApp(firebaseConfig)

const LogIn = () => {
  //  const [logUser, setLogUser] = useContext(userContext);

  const [user, setUser] = useState({
    isSignIn: false,
    name: '',
    password: '',
    email: ''
  })

  const provider = new firebase.auth.GoogleAuthProvider();
  const handelSignIn = () => {
    firebase.auth().signInWithPopup(provider)
      .then(res => {
        const { displayName, email } = res.user;
        const signInUser = {
          isSignIn: true,
          name: displayName,
          email: email
        }
        setUser(signInUser);
        // setLogUser(signInUser);
      })
      .catch(error => {
        console.log(error.message);
      })
  }

const handleBlur = (event) => {
   let isFormValid = true;
  if(event.target.name === 'email'){
     isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
 }
  if(event.target.name === 'password'){
   const isPasswordValid = event.target.value.length > 6;
   const passwordNumber = /\d{1}/.test(event.target.value);
   isFormValid = isPasswordValid && passwordNumber;
  }
  if(isFormValid){
    const newUserInfo ={...user};
    newUserInfo[event.target.name] = event.target.value;
    setUser(newUserInfo);
  }
}  
const handleCreateAccount = () => {

}

  return (
    <div style={{textAlign: "center"}}>
      {
        user.isSignIn && <p>Welcome , {user.name}</p>
      }
      <form>
        <h1>Create an account</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <input type="text" name="first-name" onBlur={handleBlur} placeholder="First name" required /> <br />
        <input type="text" name="last-name" onBlur={handleBlur} placeholder="Last name" required /> <br />
        <input type="text" name="email" onBlur={handleBlur} placeholder="User Name or Email" required /> <br />
        <input type="password" name="password" onBlur={handleBlur} placeholder="Password" required /> <br />
        <input type="password" name="password" onBlur={handleBlur} placeholder="Confirm password" required /> <br />
        <input type="submit" value="Create An Account" /> <br/>
        <p>Already have an account? LogIn</p> <br/>
        <p>Or</p>
        <img style={{ width: '2%' }} src={Icon2} alt="" />  <button onClick={handelSignIn}>Continue with google </button> <br />
        <img style={{ width: '2%' }} src={Icon} alt="" /> <button>Continue with facebook</button>
      </form>
      <form>
        <h1>Login</h1>
        <input type="text" placeholder="User Name or Email" required /> <br />
        <input type="password" placeholder="Password" required /> <br />
        <input type="checkbox" />
        <p>Remember me</p>
        <input type="submit" value="Login" /> <br />
      </form>

    </div>
  );
};

export default LogIn;