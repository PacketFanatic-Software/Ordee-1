import './Sign_In.css'
import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";

export default function Sign_In() {
  const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = (event) => {
        event.preventDefault()
    
            .catch(err => {
                alert(err.message)
            })
    }
    const register = (event) => {
        event.preventDefault()
       
            .catch(err => {
                alert(err.message)
            })
    }
    return (
      <div className="login">
          <Link to="/Home_Page">
              <img src={'./pf.jpeg'} alt="" className="login__logo"/>
          </Link>
          <div className="login__container">
              <h1>Sign in</h1>
              
              <form>
                  <h5>Email:</h5>
                  <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                  <h5>Password:</h5>
                  <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                  <button type="submit" onClick={signIn}  className="login__signInBtn">sign in</button>
                  <p> </p>
                  <button onClick={register} className="login__registerBtn">create your account</button>
              </form>
          </div>
            </div>
  );
}
















      







