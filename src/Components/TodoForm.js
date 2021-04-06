import React, { useState, useContext } from "react";
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from "reactstrap";

import { v4 } from "uuid";
import {TodoContext} from "../context/Todocontext";
import {ADD_TODO} from "../context/action.types";


const TodoForm = () => {
    const [todoString, setTodoString] = useState('')
    const { dispatch } = useContext(TodoContext)

    const handleSubmit = event => {                //use to fire dispatch
        // event.preventdefault();
        if (todoString === '') {
           return alert('Please enter a todo')
        }

        // if the above string is not empty then: 
        const todo = {
            todoString,
            id: v4()
        }

        dispatch({
            type: ADD_TODO,
            payload: todo
        })
        setTodoString('')
    }

    return (
        <Form  >
            <FormGroup>
                <InputGroup>
                    <Input
                        type='text'
                        name='todo'
                        id='todo'
                        placeholder='Your next todo here'
                        //Todo: value, onChange
                        value={todoString}
                        onChange={event => { setTodoString(event.target.value) }}
                    />
                    <InputGroupAddon addonType='prepend'>
                        <Button
                            color='warning'
                            onClick={handleSubmit}
                        //onClick
                        >
                            Add</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )

}
export default TodoForm;