import React, { useReducer } from "react";
import "./RegisterModal.css";
const RegisterModal = ({ trigger }) => {
  const [state, dispatch] = useReducer(
    (state, { field, value }) => ({ ...state, [field]: value }),
    { username: "", password: "", email: "" }
  );

  const handleOnChangeInput = e => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
  };

  return (
    <div className="modalContainer">
      <form className="registerForm" onSubmit={e => submitForm(e)}>
        <h2>Sign up</h2>
        <span className="close" onClick={trigger} />
        <input
          className="registerInput"
          onChange={e => handleOnChangeInput(e)}
          value={state.email}
          name="email"
          placeholder="email"
          type="text"
          autoComplete="off"
          spellCheck="false"
        />
        <input
          className="registerInput"
          onChange={e => handleOnChangeInput(e)}
          value={state.username}
          name="username"
          placeholder="username"
          type="text"
          autoComplete="off"
          spellCheck="false"
        />
        <input
          className="registerInput"
          onChange={e => handleOnChangeInput(e)}
          value={state.password}
          name="password"
          type="password"
          placeholder="password"
          autoComplete="off"
        />
        <button type="submit" className="registerButton">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterModal;
