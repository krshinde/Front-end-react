import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function DeleteTodo({id, list, setList}) {
    const removeItem = (id) => {
        setList(list.filter(item => item.id !== id));
      };
    return (
        <div>
            <Button variant="outline-danger" onClick={() => removeItem(id)}>
                <FontAwesomeIcon icon={faTrashAlt} />
            </Button>
        </div>
    )
}
