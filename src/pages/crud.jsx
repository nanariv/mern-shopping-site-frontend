import React, { useState,useEffect } from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import axios from "axios";
import AddTask from './addTask'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import AddTaskIcon from '@mui/icons-material/AddTask';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';


const requestURL = "https://climbers-project-todo-backend.glitch.me/";
const userid = localStorage.getItem('userid');
export default function Admin() {
  const [tasks,setTasks] = useState([]);
  const [edit, setEdit] = useState(false);
  const[taskVal,setTaskVal]= useState('')
  const[editVal,setEditVal]= useState('')
  useEffect(() => {axios.get(requestURL + "tasks"
  ).then((response) => {
      console.log(response.data);
      // rows = response.data;
      setTasks(response.data);
    });
}, []);
  
const handleDelete= (tid) => {
  axios.delete(requestURL + "task/" + tid
  ).then((response) => {
      console.log("Success");
    setTimeout(()=>{axios.get(requestURL + "tasks"
  ).then((response) => {
      console.log(response.data);
      // rows = response.data;
      setTasks(response.data);
    });},800);
    });
} 

const handleEdit= (tid,tsk) => {

  setEdit(tid)
  setEditVal(tsk)
  
  
} 

const handleSubmit = (tid)=>{
  axios.put(requestURL + "task/" + tid, {task:editVal, userid: userid}
  ).then((response) => {
      console.log("Success");
    setTimeout(()=>{axios.get(requestURL + "tasks"
  ).then((response) => {
      console.log(response.data);
      // rows = response.data;
      setTasks(response.data);
    });},800);
    });
  setEdit(false)
  
}
const handleAdd =(e)=>{
  setTaskVal('')
  axios.post(requestURL + userid + "/task",{task:taskVal} 
  ).then((response) => {
      console.log("Success");
    setTimeout(()=>{axios.get(requestURL + "tasks"
  ).then((response) => {
      console.log(response.data);
      // rows = response.data;
      setTasks(response.data);
    });},800);
    });
}
  
  return (
     <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // Change the size to fit the parent element of this div
    width: '100%',
    height: '100%',
}}>
    <Paper elevation={22}>
        <div>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <TextField
        id="input-with-icon-textfield"
        label="Add Task"
        value={taskVal}
        onChange={(e)=>setTaskVal(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
            </InputAdornment>
          ),
        }}
         style ={{ width:'75vh' }}
        variant="standard"
      />
            <FormControl variant="standard">
              <Button variant="contained" onClick={handleAdd}><AddTaskIcon /></Button>

      </FormControl>

    </Box>

        </div>
    </Paper>
      <br/><br/>
      
      <Paper>
      <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Task</TableCell>
              <TableCell align="right">Delete</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.length> 0&&tasks.map((row) => (
              
               (userid == row.userid ) && (
                 <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{edit==row._id ? <TextField id="standard-basic"  variant="outlined" value={editVal} onChange={(e)=>setEditVal(event.target.value)}/> : row.task}</TableCell>
                
                <TableCell align="right"><Button variant="contained" onClick={()=>handleDelete(row._id)}>Delete</Button></TableCell>
                <TableCell align="right"><Button variant="contained" onClick={()=>{edit===row._id?handleSubmit(row._id):handleEdit(row._id,row.task)}}>{edit===row._id?'Submit':'Edit'}</Button></TableCell>
              </TableRow>
               )
                 
              
              
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
      </Paper>
</div>
  );
}