import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [users, setUsers] = useState({});
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({
      ...users,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    console.log(users, "here");
    Axios.post("http://localhost:5000/api/users/register", users)
      .then((res) => {
        console.log(res);
        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Register Page</h1>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
