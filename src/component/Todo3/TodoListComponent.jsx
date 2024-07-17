import React from 'react'
import { Paper, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import TodoItemComponent from './TodoItemComponent'
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const TodoListComponent = () => {
  // const headerLabels = ["ID", "Name", "Gender", "Email", "Code", "Phone", "Action"];
  const todoList = useSelector(state => state.todo.todolist)
  return (
  //  <Paper elevation={3} sx={{ padding: 5, marginTop: 5 }}>
     <TableContainer sx={{ height: 334 }}>
      <Table stickyHeader >
        <TableHead >
          <TableRow sx={{ position: "sticky", top: 0, zIndex: 1 }}>

            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Code</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>

        {todoList.map(item => (
          <TodoItemComponent
            key={item.ui}
            item={item}
          />
        ))}
      </Table>
    </TableContainer>
  //  </Paper>
  )
}

export default TodoListComponent