import React from 'react'
import { InputGroup, Col, Row, Form, Button } from 'react-bootstrap'

const TodoForm = (props) => {
  let { count, fNameInput, updateFNameInput, lNameInput, updateLNameInput, isEditing, addTodo, editItem, inputError } = props
  let { fNameInputError, lNameInputError } = inputError
  return (
    <>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Text className=''>id</InputGroup.Text>
            <InputGroup.Text className='mx-2'>{count}</InputGroup.Text>
            {
              !isEditing ?
                <Button className="d-flex flex-fill justify-content-center"
                  variant="outline-primary"
                  onClick={addTodo}
                  id="button-addon2">
                  Add
                </Button>
                :
                <Button className="d-flex flex-fill justify-content-center"
                  variant="outline-primary"
                  onClick={editItem}
                  id="button-addon2">
                  Update
                </Button>}
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text>First Name</InputGroup.Text>
            <Form.Control
              placeholder="Text . . ."
              aria-label="First Name"
              value={fNameInput}
              onChange={(e) => updateFNameInput(e?.target?.value)}
            />
          </InputGroup>
          {fNameInputError
            && <span className='text-danger'>First Name can't be empty*</span>}
        </Col>

        <Col md={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text>Last Name</InputGroup.Text>
            <Form.Control
              placeholder="Text . . ."
              aria-label="Last Name"
              value={lNameInput}
              onChange={(e) => updateLNameInput(e?.target?.value)}
            />

          </InputGroup>
          {lNameInputError
            && <span className='text-danger'>Last Name can't be empty*</span>}
        </Col>
      </Row>
    </>
  )
}

export default TodoForm