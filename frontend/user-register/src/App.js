import React, { useState, useEffect } from "react";
import "./App.css";
import RegisterModal from "./components/RegisterModal";
import axios from "axios";
import UsersTable from "./components/UsersTable";
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://heroku-user-register.herokuapp.com/users`)
      .then(({ data }) => {
        setUsers(data);
      });
  }, []);

  const refreshUsers = () => {
    axios
      .get(`https://heroku-user-register.herokuapp.com/users`)
      .then(({ data }) => {
        setUsers(data);
      });
  };

  const triggerModal = ({ shouldRefresh }) => {
    setIsModalOpen(!isModalOpen);
    if (shouldRefresh) refreshUsers();
  };

  return (
    <div className="container">
      {isModalOpen && <RegisterModal trigger={triggerModal} />}
      <div style={{ paddingTop: "80px" }}>
        <button className="registerTriggerBtn" onClick={triggerModal}>
          <b>Sign up</b>
        </button>
      </div>
      <UsersTable users={users} refreshUsers={refreshUsers} />
    </div>
  );
};

export default App;
