import React from 'react'
import { connect } from "react-redux"
import { addTodo} from "../../actions"

import "./AddTodo.css"

function AddTodo(props) {
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        let input = event.target.userInput.value;
        if (input === "") {
            alert("Please enter a To-do value");
            return;
        }
        props.dispatch(addTodo(input));
        event.target.userInput.value = ""
    }
    
    return (
        <div className="AddTodoForm">
            <form onSubmit={onSubmitHandler}>
                <input type="text" name="userInput" />
                <button id="SubmitButton">Submit</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo);