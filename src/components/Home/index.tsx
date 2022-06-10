import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/app/hooks";
import { removeSession } from "../../redux/feature/authSlice";
const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(removeSession());
    navigate("/login");
  };
  return (
    <>
      <h1>Welcome </h1><button onClick={logout}>log-out</button>
    </>
  );
};
export default Home;
