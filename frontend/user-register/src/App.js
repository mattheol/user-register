import React, { useState, useEffect } from "react";
import "./App.css";
import RegisterModal from "./components/RegisterModal";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import TableFooter from "@material-ui/core/TablePagination";

import Paper from "@material-ui/core/Paper";
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/users`).then(({ data }) => {
      setUsers(data);
    });
  }, []);

  const refreshUsers = () => {
    axios.get(`http://localhost:8080/users`).then(({ data }) => {
      setUsers(data);
    });
  };

  const triggerModal = () => {
    setIsModalOpen(!isModalOpen);
    refreshUsers();
  };

  return (
    <div className="container">
      {isModalOpen && <RegisterModal trigger={triggerModal} />}
      <button className="registerTriggerBtn" onClick={triggerModal}>
        <b>Sign up</b>
      </button>
      <div className="usersHeader">
        <h2 className="titleHeader">Registered users</h2>
      </div>
      <Paper className="userTable">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Username</b>
              </TableCell>
              <TableCell>
                <b>Email</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.username}</TableCell>
                <TableCell>{item.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default App;
