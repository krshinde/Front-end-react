import React from 'react'
import { TextField, Button, Grid, MenuItem, FormControl, Paper } from '@mui/material'
import { Add, Edit } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, formInputUpdate, updateItem } from '../../features/TodoSlice'


const TodoFormComponent = () => {

  const dispatch = useDispatch();

  const currentTodo = useSelector(state => state.todo.cuurentTodo)
  let currentItemId = useSelector(state => state.todo.currentItemId)

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(formInputUpdate({ ...currentTodo, [name]: value }))//set current detail in form
  };

  return (
    // <Paper elevation={3} sx={{ padding: 5, marginTop: 5 }}>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        !currentItemId ?
          dispatch(addItem(currentTodo))
          : dispatch(updateItem(currentTodo))
        // dispatch(clearCurrentTodo())
      }}
    >
      <Grid container spacing={2} sx={{pt:2, height: 350 }}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <TextField
              id="userId"
              name="ui"
              label="User ID"
              variant="outlined"
              value={currentTodo?.ui || ''}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              value={currentTodo?.name || ''}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth required>
            <TextField
              id="gender"
              name="gender"
              select
              label="Gender"
              variant="outlined"
              value={currentTodo?.gender || 'Male'}
              onChange={handleChange}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={8}>
          <FormControl fullWidth required>
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              type="email"
              value={currentTodo?.email || ''}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl fullWidth required>
            <TextField
              id="code"
              name="code"
              label="Code"
              variant="outlined"
              type="tel"
              value={currentTodo?.code || '+91'}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={9}>
          <FormControl fullWidth required>
            <TextField
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              variant="outlined"
              type="tel"
              value={currentTodo?.phoneNumber || ''}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color={currentItemId ? "success" :"primary"}
            sx={{
              // '&:hover': {
              //   backgroundColor: currentItemId ? 'darkgreen':'blue' ,
              // },
              // '&:active': {
              //   backgroundColor: currentItemId ? 'navy' : 'green',
              // },
            }}
            style={{ height: "50px" }}
            endIcon={currentItemId ? <Edit /> : <Add />}
            type="submit"
          >
            {currentItemId ? 'Update' : 'Add'}
          </Button>
        </Grid>
      </Grid>
    </form>
    // </Paper>
  )
}

export default TodoFormComponent