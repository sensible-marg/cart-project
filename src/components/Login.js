
import React, { useState, useEffect } from "react";

function Login() {
  
  const [username, setUsername] = useState("");
  const [userpass, setUserpass] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleUserpass = (event) => {
    setUserpass(event.target.value);
  };
  const submitData = () => {
    if (username == "") alert("User name can not be empty");
    else {
      // post data to api
      alert("data has been saved");
    }
  };

  return (
    <div className="container">
      <h1>New Sign Up Form</h1>
      <form className="card p-3 m-3">
        <div className="mb-3"></div>
        <div className="mb-3">
          <label for="txtUser" className="form-label">
            Enter User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="txtUser"
            value={username}
            onChange={handleUsername}
          />
        </div>

        <div className="mb-3">
          <label for="txtPass" className="form-label">
            Enter your password
          </label>
          <input
            type="password"
            className="form-control"
            id="txtPass"
            value={userpass}
            onChange={handleUserpass}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={submitData}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
