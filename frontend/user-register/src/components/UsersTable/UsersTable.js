import React, { useRef } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import "./UserTable.css";
import reload from "../../assets/repeat.svg";

const UsersTable = ({ users, refreshUsers }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const reloadRef = useRef(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper className="userTable">
      <div className="usersHeader">
        <h2 className="titleHeader">Registered users</h2>
        <img
          src={reload}
          ref={reloadRef}
          className="refreshIcon"
          onClick={() => refreshUsers({ reloadRef })}
          alt="Refresh users icon"
        />
      </div>
      <Table style={{ tableLayout: "fixed" }}>
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
          {users
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.username}</TableCell>
                <TableCell>{item.email}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default UsersTable;
