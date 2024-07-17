import React from 'react'
import { Container, Grid, Paper, Typography } from '@mui/material'
import TodoFormComponent from './TodoFormComponent'
import TodoListComponent from './TodoListComponent'

const TodoComponent = () => {

  return (
    // <Container>
    //   <Grid container spacing={1}>
    //     <Grid item xs={12} md={5}>
    //       <Container maxWidth="lg">
    //         <Typography variant="h4" className='d-flex justify-content-center' gutterBottom>TODO OPERATION</Typography>
    //         <TodoFormComponent/>
    //       </Container>
    //     </Grid>
    //     <Grid item xs={12} md={7}>
    //       <Container maxWidth="lg">
    //         <Typography variant="h4" className='d-flex justify-content-center' gutterBottom>TODO LIST</Typography>
    //         <TodoListComponent/>
    //       </Container>
    //     </Grid>
    //   </Grid>
    // </Container>
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Paper elevation={3} sx={{p:2}}>
            <Typography variant="h5" align="center" gutterBottom>
              TODO OPERATION
            </Typography>
            <TodoFormComponent />
          </Paper>
        </Grid>
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5" align="center" gutterBottom>
              TODO LIST
            </Typography>
            <TodoListComponent />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default TodoComponent