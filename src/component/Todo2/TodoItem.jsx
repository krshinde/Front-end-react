import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'

const TodoItem = ({item, getItem,removeItem, currentItemId}) => {
    let data={
        id:item?.id,
        Fname:item?.fname??"krishna",
        Lname:item?.lname??"shinde"
    }

  return ( 
    <tbody>
      {/* <tr className="table-warning"> */}
      
      <tr key={data?.id} 
      // style={{ backgroundColor: data.id === currentItemId ? '#ffc107 !important' : '' }}
      className={data.id === currentItemId ? 'table-active' : ''}
      >
        <td>{data?.id}</td>
        <td>{data?.Fname}</td>
        <td>{data?.Lname}</td>
        <td className='d-flex justify-content-around'>
            <Button variant="outline-warning" onClick={() =>getItem(item?.id)}>
            <FontAwesomeIcon icon={faEdit} />
            </Button> 

            <Button variant="outline-danger" onClick={()=>removeItem(item?.id)}>
            <FontAwesomeIcon icon={faTrashAlt} />
            </Button>
        </td>
      </tr>
    </tbody>
  )
}
export default TodoItem