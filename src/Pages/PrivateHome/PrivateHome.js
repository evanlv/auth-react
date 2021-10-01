import { useContext } from "react";

import SignIn from "../../Components/AuthForm/SignIn";
import SignUp from "../../Components/AuthForm/SignUp";
import Navbar from "../../Components/Navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";

import "../Home/Home.css";

const PrivateHome = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="global-container">
      <Navbar />
      <SignUp />
      <SignIn />
      <div className="content-container">
        <h1>Here is your private account</h1>
        <p>Have fun</p>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default PrivateHome;
