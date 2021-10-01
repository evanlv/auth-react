import { useDispatch, useSelector } from "react-redux";

import "./AuthForm.css";

const SignUp = () => {
  const showModal = useSelector((state) => state);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({ type: "CLOSEMODAL" });
  };
  return (
    <div className={showModal.showSignUp ? "global-modal" : "hide-modal"}>
      <div className="overlay" onClick={closeModal}></div>
      <div className="container-modal">
        <form className="form-auth">
          <h2>Registration</h2>

          <label htmlFor="mail">Email</label>
          <input type="email" htmlFor="mail" required />

          <label htmlFor="password">Password</label>
          <input type="password" htmlFor="password" required />

          <label htmlFor="confirm-password">Confirm password</label>
          <input type="password" htmlFor="confirm-password" required />

          <button className="btn-sign">Connect</button>
        </form>
        <button className="btn-close" onClick={closeModal}>
          X
        </button>
        <p className="bottom-help-txt"> Register</p>
      </div>
    </div>
  );
};

export default SignUp;
