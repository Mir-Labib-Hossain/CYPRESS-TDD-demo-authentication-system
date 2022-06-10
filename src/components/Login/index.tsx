import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useAppDispatch } from "../../redux/app/hooks";
import { addSession } from "../../redux/feature/authSlice";
const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const submitHandler = (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    const username = e.target.uname.value;
    const password = e.target.psw.value;
    if (!username) {
      setError("Must fill username!");
    } else if (!password) {
      setError("Must fill password!");
    } else if (username !== "labib") {
      setError("Wrong username! hint : 'labib'");
    } else if (password !== "12345") {
      setError("Wrong password! hint : '12345'");
    } else if (username === "labib" && password === "12345") {
      dispatch(addSession("sadsadafsaffsf"));
      navigate("/");
    }
  };

  return useAuth() ? (
    <Navigate to="/" />
  ) : (
    <div id="id01" data-testid="Login-block" className="modal">
      <h1>This is a login page</h1>
      <form className="modal-content animate" onSubmit={submitHandler} method="post">
        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <br />
          <input type="text" placeholder="Enter Username" name="uname" />
          <br />
          <br />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <br />
          <input type="password" placeholder="Enter Password" name="psw" />
          <br />
          <br />
          <button type="submit">Login</button>
        </div>
      </form>
      <span style={{ color: "tomato" }}>{error}</span>
    </div>
  );
};
export default Login;
