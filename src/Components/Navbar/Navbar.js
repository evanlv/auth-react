import { useDispatch } from "react-redux";

import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();

  const toggleSignIn = () => {
    dispatch({ type: "TOGGLEIN" });
  };

  const toggleSignUp = () => {
    dispatch({ type: "TOGGLEUP" });
  };

  return (
    <nav className="navbar">
      <button onClick={toggleSignIn}>Sign-in</button>
      <button onClick={toggleSignUp}>Sign-up</button>
    </nav>
  );
};

export default Navbar;
