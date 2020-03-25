import React, { useState } from "react";
import "./App.css";
import RegisterModal from "./components/RegisterModal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const triggerModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="container">
      {isModalOpen && <RegisterModal trigger={triggerModal} />}
      <button className="registerTriggerBtn" onClick={triggerModal}>
        <b>Sign up</b>
      </button>
      <h2>Registered users</h2>
    </div>
  );
};

export default App;
