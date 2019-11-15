/* ------------------------------------------------- */

import React, { useState } from "react";

/* ------------------------------------------------- */
// adding import
import { axiosWithAuth } from "../utilities/axiosWithAuth";

/* ------------------------------------------------- */

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({ username: '', password: '' })

  /* ------------------------------------------------- */

  const handleChange = event => {
    setCredentials(
      {
        ...credentials,
        [event.target.name]: event.target.value
      }
    )
  }

  /* ------------------------------------------------- */

  const onSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('/api/login', credentials)
      .then(response => {
        console.log("Post Response", response)
        localStorage.setItem('token', response.data.payload)
        props.history.push("/bubbles")
      })

      /* ------------------------------------------------- */

      .catch(error => {
        console.log(error)
        setCredentials({ username: "", password: "" })
      })
  }

  /* ------------------------------------------------- */
  // need to return the form and display the input strings
  // also need to apply a component to invoke handleChange and onSubmit

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      {/* <p>Username: Lambda School</p>
      <p>Password: "i lessthan3 Lambd4"</p> */}
      <div>

        <form onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={credentials.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>

          <button>Login</button>

        </form>
      </div>
    </>
  );
};

/* ------------------------------------------------- */

export default Login;

/* ------------------------------------------------- */