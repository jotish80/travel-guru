 import React from 'react';
 import Icon from '../Icon/fb.png';
 import Icon2 from '../Icon/google.png';
 
 const LogIn = () => {
     return (
         <div>
              <form>
                  <h1>Login</h1>
                <input type="text" placeholder="User Name or Email"/> <br/> 
                <input type="password" placeholder="Password"/> <br/>
                <input type="checkbox"/>
                <p>Remember me</p>
                <button>Login</button> <br/>
                <img style={{width: '3%'}} src={Icon} alt=""/> <p>Continue with facebook</p>  
                <img style={{width: '3%'}} src={Icon2} alt=""/> <p>Continue with google</p>
              </form>
              <form>
                  <h1>Create an account</h1>
                  <input type="text" placeholder="First name"/> <br/>
                  <input type="text" placeholder="Last name"/> <br/>
                <input type="text" placeholder="User Name or Email"/> <br/> 
                <input type="password" placeholder="Password"/> <br/>
                 <input type="text" placeholder="Confirm password"/> <br/>
                 
                <button>Create an account</button>
              </form>

         </div>
     );
 };
 
 export default LogIn;