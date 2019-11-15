/* ------------------------------------------------- */

import React from "react";

/* ------------------------------------------------- */
// adding import
import { axiosWithAuth } from "../utils/axiosWithAuth";

/* ------------------------------------------------- */

const Login = () => {
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
  setCredentials({username: "", password: ""})
})
}

/* ------------------------------------------------- */

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

/* ------------------------------------------------- */

export default Login;

/* ------------------------------------------------- */