// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
function Home(){
  return(
  <div className ="home">
    <header className="home-header">
      <p>Hello world </p>
    </header>
  </div>
  )
}
function Login(){
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  return(
    <div className="login">
      <div className="container">
      <Form.Group size="lg" controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
      </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
      </Form.Group>
      <Button block size="lg" type="submit" disabled={!validateForm()}> Login 
      </Button>
      <label> Forgot Password </label>
      </div>
    </div>
  )
}

function validateForm(){
  return email.length > 0 && password.length > 0;
}
export {Home, Login};