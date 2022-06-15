import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/app/hooks";
import { removeSession } from "../../redux/features/authSlice";
const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const logout = () => dispatch(removeSession());

  return (
    <>
      <h1 data-testid="welcome-text">Welcome</h1>
      <button onClick={logout}>Log-out</button>
      <br />
      <br />
      <Link to="/login">Log-in</Link>
    </>
  );
};
export default Home;
