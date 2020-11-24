import './Next_Page.css'
import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";

export default function Next_Page() {
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
          <Link to="/">
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
















  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  // return (
  //   <div className="body">
  //   <div className="Login">
  //     <Form onSubmit={handleSubmit}>
  //       <Form.Group size="lg" controlId="email">
  //         <Form.Label>Email</Form.Label>
  //         <Form.Control
  //           autoFocus
  //           type="email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //         />
  //       </Form.Group>
  //       <Form.Group size="lg" controlId="password">
  //         <Form.Label>Password</Form.Label>
  //         <Form.Control
  //           type="password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //         />
  //       </Form.Group>
  //       <Button block size="lg" type="submit" disabled={!validateForm()}>
  //         Login
  //       </Button>
  //     </Form>
  //     </div>
      







