import React from 'react'
import { connect } from "react-redux"
import { DeleteTodo} from "../../actions"

import "./List.css"

const List = (props) => {
    return (
        <div className="TodoList">
            <ul>
                {
                    props.todos.map( 
                        (todo, index) => (
                            <div className="TodoItem">
                                <li key={index}>{todo.message}</li>
                                <button onClick={ () => props.dispatch(DeleteTodo(todo.id)) }><span className="fa fa-trash" title="Delete"></span></button>
                            </div>
                        ) 
                    )
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos.data,
})

export default connect(mapStateToProps)(List);
