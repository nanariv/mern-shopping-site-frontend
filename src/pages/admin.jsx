import React, { useState,useEffect } from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import AdminTabs from "./adminNavBar";

const requestURL = "https://climbers-project-todo-backend.glitch.me/";

export default function Admin() {
  const [rows,setRows] = useState([]);
  useEffect(() => {axios.get(requestURL + "users").then((response) => {
      console.log(response.data);
      // rows = response.data;
      setRows(response.data);
    });
}, []);
  
  return (
    <div>
      <AdminTabs></AdminTabs>
      <TableContainer component={Paper} sx={{marginTop: 20}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Email ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length> 0&&rows.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row._id}
                </TableCell>
                <TableCell align="right">{row.emailid ? row.emailid : row.emailId}</TableCell>
                <TableCell align="right">{row.username}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
