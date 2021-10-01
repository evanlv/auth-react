import { useContext, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import "./AuthForm.css";

const SignUp = () => {
  const { signup } = useContext(AuthContext);
  const [error, setError] = useState("");

  const history = useHistory();

  const showModal = useSelector((state) => state);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({ type: "CLOSEMODAL" });
  };

  const toggleSignIn = () => {
    dispatch({ type: "TOGGLEIN" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputs.current[1].value !== inputs.current[2].value) {
      setError("Passwords are not the same");
      return;
    }
    await signup(inputs.current[0].value, inputs.current[1].value);
    closeModal();
    history.push("/loggedHome");
  };

  const inputs = useRef([]);

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  return (
    <div className={showModal.showSignUp ? "global-modal" : "hide-modal"}>
      <div className="overlay" onClick={closeModal}></div>

      <div className="container-modal">
        <form className="form-auth" onSubmit={handleSubmit}>
          <h2>Registration</h2>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" required ref={addInputs} />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" required ref={addInputs} />

          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            type="password"
            id="confirmPassword"
            required
            ref={addInputs}
          />

          {error}

          <button className="btn-sign">Register</button>
        </form>
        <button className="btn-close" onClick={closeModal}>
          X
        </button>
        <p className="bottom-help-txt" onClick={toggleSignIn}>
          Need to connect?
        </p>
      </div>
    </div>
  );
};

export default SignUp;
