import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './TodoComponent.css';

const TodoComponent = () => {
    const [fNameInput, setFNameInput] = useState("");
    const [lNameInput, setLNameInput] = useState("");
    const [list, setList] = useState(Array);
    const [count, setCount] = useState(1);
    const [isEditing, setIsEditing] = useState(false);
    const [currentItemId, setCurrentItemId] = useState(null);
    const [inputError, setInputError] = useState({
        fNameInputError: false,
        lNameInputError: false
    })
    const updateFNameInput = (value) => {
        setInputError({ ...inputError, fNameInputError: false })
        setFNameInput(value)
    };
    const updateLNameInput = (value) => {
        setInputError({ ...inputError, lNameInputError: false });
        setLNameInput(value)
    }
    const addTodo = () => {
        if (!fNameInput && !lNameInput) return setInputError({ ...inputError, fNameInputError: true, lNameInputError: true })
        if (!fNameInput) return setInputError({ ...inputError, fNameInputError: true })
        if (!lNameInput) return setInputError({ ...inputError, lNameInputError: true })

        let obj = {
            id: count,
            fname: fNameInput,
            lname: lNameInput
        }

        setList([...list, obj])
        setCount(count + 1)
        setFNameInput("")
        setLNameInput("")
    }
    const removeItem = (id) => {
        setList(list.filter(element => element.id !== id))
    }

    const getItem = (id) => {
            let item = list.find(element => element.id === id)
            setFNameInput(item.fname)
            setLNameInput(item?.lname)
            setCurrentItemId(item.id)
            setIsEditing(true)
    }

    const editItem = () => {
        setList(list.map(item =>
            item.id === currentItemId ? { ...item, fname: fNameInput, lname: lNameInput } : item
        ));
        setFNameInput("");
        setLNameInput("");
        setCurrentItemId(null);
        setIsEditing(false);
    };

    return (
        <Container>
            <Row className='d-flex justify-content-center align-item-center fs-2 fw-bolder mt-5'>
                TODO OPERATION
            </Row>
            <hr />
            <Row>
                <Col sm={{ span: 8, offset: 2 }}>
                    <TodoForm
                        count={count}
                        fNameInput={fNameInput}
                        updateFNameInput={updateFNameInput}
                        lNameInput={lNameInput}
                        updateLNameInput={updateLNameInput}
                        addTodo={addTodo}
                        editItem={editItem}
                        isEditing={isEditing}
                        inputError={inputError}
                    />
                    <TodoList list={list} getItem={getItem} removeItem={removeItem} currentItemId={currentItemId} />
                </Col>
            </Row>
        </Container>
    )
}

export default TodoComponent