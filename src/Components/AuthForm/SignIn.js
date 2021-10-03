import { useContext, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import "./AuthForm.css";

const SignIn = () => {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState("");

  const history = useHistory();

  const showModal = useSelector((state) => state);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({ type: "CLOSEMODAL" });
  };

  const toggleSignUp = () => {
    dispatch({ type: "TOGGLEUP" });
  };

  const inputs = useRef([]);

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(inputs.current[0].value, inputs.current[1].value);
      history.push("/loggedHome");
      closeModal();
    } catch {
      setError("Wrong credentials");
    }
  };

  return (
    <div className={showModal.showSignIn ? "global-modal" : "hide-modal"}>
      <div className="overlay" onClick={closeModal}></div>
      <div className="container-modal">
        <form className="form-auth" onSubmit={handleSubmit}>
          <h2>Connection</h2>

          <label htmlFor="email">Email</label>
          <input type="email" id="eail" required ref={addInputs} />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" required ref={addInputs} />
          {error}
          <button className="btn-sign">Connect</button>
        </form>
        <button className="btn-close" onClick={closeModal}>
          X
        </button>
        <p className="bottom-help-txt" onClick={toggleSignUp}>
          Need an account?
        </p>
      </div>
    </div>
  );
};

export default SignIn;
