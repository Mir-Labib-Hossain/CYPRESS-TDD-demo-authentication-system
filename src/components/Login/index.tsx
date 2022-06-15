import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useLoginUserMutation } from "../../redux/apis/authApi";
import { useAppDispatch } from "../../redux/app/hooks";
import { addSession } from "../../redux/features/authSlice";
const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const initialState = {
    username: "Mir-Labib-Hossain",
    password: "123456",
  };
  const [formValue, setFormValue] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const { username, password } = formValue;
  const [loginUser, { data, isSuccess, isError, error }] = useLoginUserMutation();

  const handleOnChange = (e: React.FormEvent<HTMLFormElement> | any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

 
  const submitHandler = async (e: any) => {
    setLoading(true);
    if (username && password) await loginUser({ username, password });
    setLoading(false);
  };

  useEffect(() => {
    if (isSuccess) dispatch(addSession(data));
    if (isError) console.log(error);
  }, [isSuccess, isError]);


  return useAuth() ? (
    <Navigate to="/" />
  ) : (
    <div  data-testid="Login-block" >
      <h1>This is a login page</h1>
      <form>
        <p>Username</p>
        <input name="username" value={username} onChange={handleOnChange} placeholder="username" />
        <p>Password</p>
        <input name="password" value={password} onChange={handleOnChange} placeholder="password" />
        <br />
        <br />
        <button data-testid="submit" onClick={submitHandler} disabled={loading}>
          Log-in
        </button>
      </form>
      <br />
      <Link to="/" data-testid="home-btn">Home</Link>

    </div>
  );
};
export default Login;
