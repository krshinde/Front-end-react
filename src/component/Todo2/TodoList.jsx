import React from 'react'
import TodoItem from './TodoItem'
import { Table } from 'react-bootstrap'

const TodoList = (props) => {
  let {list, getItem, removeItem, currentItemId} = props
  return (
    <Table striped bordered hover >
    <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Action</th>
      </tr>
    </thead>
    {
      list.map(item=>{
        return <TodoItem key={item.id} item={item} getItem={getItem} removeItem={removeItem} currentItemId={currentItemId}/>
      })
    }
  </Table>
  )
}

export default TodoList