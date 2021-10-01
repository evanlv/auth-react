import SignIn from "../../Components/AuthForm/SignIn";
import SignUp from "../../Components/AuthForm/SignUp";
import Navbar from "../../Components/Navbar/Navbar";

import "./Home.css";

const Home = () => {
  return (
    <div className="global-container">
      <Navbar />
      <div className="content-container">
        <h1>Welcome</h1>
        <p>Authentificate to access the functionalities</p>
      </div>
      <SignUp />
      <SignIn />
    </div>
  );
};

export default Home;
