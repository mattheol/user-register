import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import RegisterModal from "./components/RegisterModal/RegisterModal";
import axios from "axios";
import UsersTable from "./components/UsersTable/UsersTable";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [isUserCreated, setIsUserCreated] = useState(false);
  const rot = useRef(360);

  useEffect(() => {
    axios.get(`http://localhost:8080/users`).then(({ data }) => {
      setUsers(data);
    });
  }, []);

  const refreshUsers = obj => {
    if (obj) {
      const { reloadRef } = obj;
      if (reloadRef) {
        reloadRef.current.style.transform = "rotate(" + rot.current + "deg)";
        rot.current += 360;
      }
    }
    axios.get(`http://localhost:8080/users`).then(({ data }) => {
      setUsers(data);
    });
  };

  const triggerModal = ({ shouldRefresh }) => {
    if (shouldRefresh) {
      setIsUserCreated(true);
      setIsModalOpen(!isModalOpen);
      refreshUsers();
      setTimeout(() => {
        setIsUserCreated(false);
      }, 4300);
    } else {
      setIsModalOpen(!isModalOpen);
    }
  };

  const popupClasses = `userRegPopup ${isUserCreated ? "fadeIn" : "fadeOut"}`;

  return (
    <div className="container">
      <div className={popupClasses}>User registered successfully</div>
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
