import React from 'react'
import { IconButton, TableBody, TableRow, TableCell } from '@mui/material'
import { Edit, Delete } from '@mui/icons-material'
import { getItem, removeItem } from '../../features/TodoSlice'
import { useDispatch, useSelector } from 'react-redux'
const TodoItemComponent = ({ item }) => {
  let currentItemId = useSelector(state => state.todo.currentItemId)
  let dispatch = useDispatch()
  return (
    <TableBody>
      <TableRow>
        <TableCell align='center'>{item.ui}</TableCell>
        <TableCell align="center">{item.name}</TableCell>
        <TableCell align="center">{item.gender}</TableCell>
        <TableCell align="center">{item.email}</TableCell>
        <TableCell align="center">{item.code}</TableCell>
        <TableCell align="center">{item.phoneNumber}</TableCell>
        <TableCell align="center">

          <IconButton
            sx={{
              '&:hover': {
                // backgroundColor: 'grey',
                color: currentItemId && currentItemId === item.ui ? '' : 'blue',
              },
              color: currentItemId && currentItemId === item.ui ? "green" : ""
            }}
            onClick={() => dispatch(getItem(item.ui))}
          >
            <Edit />
          </IconButton>
          <IconButton

            disabled={currentItemId && currentItemId === item.ui ? true : false}

            sx={{
              '&:hover': {
                // backgroundColor: 'grey',
                color: "red",
              }

            }}
            onClick={() => dispatch(removeItem(item.ui))}
          >
            <Delete />
          </IconButton>
        </TableCell>
      </TableRow>
    </TableBody>
  )
}

export default TodoItemComponent