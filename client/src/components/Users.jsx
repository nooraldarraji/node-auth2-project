import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

function Users() {
  const [data, setData] = useState([]);
  const [stop, setStop] = useState(0);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/users")
      .then((res) => {
        console.log("data has been set", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [stop]);

  const users = data.map((user) => <h1>{user.username}</h1>);
  const removeToken = () => localStorage.removeItem("usersToken");
  return !localStorage.getItem("usersToken") ? (
    <Redirect to="/login" />
  ) : (
    <>
      <div>{users}</div>
      <button onClick={removeToken}>Logout</button>
    </>
  );
}

export default Users;
