import React, { useState } from 'react';
import './TodoComponent.css'
import "bootstrap/dist/css/bootstrap.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const TodoComponent = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);
  const [count, setCount] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItemId, setCurrentItemId] = useState(null);

  const updateInput = (value) => {
    setUserInput(value);
  };

  const addItem = () => {
    if (userInput) {
      const data = {
        id: count,
        value: userInput,
      };
      setCount(count + 1);
      setList([...list, data]);
      setUserInput("");
    }
  };

  const removeItem = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  const getItem = (id) => {
    const item = list.find(item => item.id === id);
    setUserInput(item.value);
    setIsEditing(true);
    setCurrentItemId(id);
  };

  const updateItem = () => {
    setList(list.map(item => 
      item.id === currentItemId ? { ...item, value: userInput } : item
    ));
    setUserInput("");
    setIsEditing(false);
    setCurrentItemId(null);
  };

  return (
    <Container>
      <Row className='d-flex justify-content-center align-item-center fs-1 fw-bold mt-5'>
        TODO LIST
      </Row>
      <hr />
      <Row>
        <Col xl={{ span: 6, offset: 3 }}>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='add item . . .'
              size='lg'
              value={userInput}
              onChange={(e) => updateInput(e.target.value)}
              className='shadow-sm'
            />
            <InputGroup>
              {isEditing ? (
                <Button variant='success' className='mt-2 shadow-sm' onClick={updateItem}>
                  Update
                </Button>
              ) : (
                <Button variant='primary' className='mt-2 shadow-sm' onClick={addItem}>
                  Add
                </Button>
              )}
            </InputGroup>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col xl={{ span: 6, offset: 3 }}>
          <ListGroup>
            {list.map(item => (
              <ListGroup.Item
                key={item.id}
                variant='dark'
                className={`d-flex justify-content-between align-item-center shadow-sm mb-2 ${item.id === currentItemId ? 'active' : ''}`}>
                <div>
                  <strong>ID: {item.id}</strong>
                </div>
                <span className='flex-grow-1 mx-3'>{item.value}</span>
                <span style={{display: 'flex'}}>
                  <Button variant="outline-warning" className='me-2' onClick={() => getItem(item.id)}>
                  <FontAwesomeIcon icon={faEdit} />
                  </Button>
                  <Button variant="outline-danger" onClick={() => removeItem(item.id)}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                  </Button>
                </span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoComponent;
