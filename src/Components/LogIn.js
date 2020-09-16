 import React from 'react';
 import Icon from '../Icon/fb.png'
 
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
                <img src={Icon} alt=""/>
              </form>
              <form>
                  <h1>Creat an account</h1>
                  <input type="text" placeholder="First name"/> <br/>
                  <input type="text" placeholder="Last name"/> <br/>
                <input type="text" placeholder="User Name or Email"/> <br/> 
                <input type="password" placeholder="Password"/> <br/>
                 <input type="text" placeholder="Confirm password"/> <br/>
                 
                <button>Creat an account</button>
              </form>

         </div>
     );
 };
 
 export default LogIn;