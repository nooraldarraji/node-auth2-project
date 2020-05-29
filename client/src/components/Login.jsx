import React, { useState } from "react";
import Axios from "axios";
import { useHistory, Redirect } from "react-router-dom";

const Login = () => {
  const [users, setUsers] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({
      ...users,
      [name]: value,
    });
    console.log(users);
  };

  const submitHandler = (e) => {
    console.log(users, "users");
    Axios.post("http://localhost:5000/api/users/login", users)
      .then((res) => {
        console.log(res.data, "combackk");
        window.localStorage.setItem("usersToken", res.data.token);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const register = () => <Redirect to="/register" />;
  return !localStorage.getItem("usersToken") ? (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Login Page</h1>
        <br />
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={users.username || ""}
          onChange={handleChange}
          autoComplete="false"
        />
        <br />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={users.password || ""}
          onChange={handleChange}
          autoComplete="false"
        />
        <br />
        <button type="submit">Login</button>
        <br></br>
        <button onClick={() => register}>Signup</button>
      </form>
    </div>
  ) : null;
};

export default Login;
