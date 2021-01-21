import React, {useState} from 'react';
import "./App.css"

function App() {

	const [todo, setTodo] = useState("");
	const [todoItems, setTodoItems] = useState([]);

	const onChangeSetText = (e) => {
		setTodo(e.target.value);
	}

	const AddTodo = () => {
		setTodoItems((oldTodoItems) => {
			if (todo === "") {
				return [...oldTodoItems]
			} else {
			return [...oldTodoItems, todo]
			}
		});
		setTodo("");
	}

	const deleteTodoItems = (id) => {
		setTodoItems((oldTodoItems) => {
			return oldTodoItems.filter( (items, index) => {
				return id !== index;
			});
		});
	}

  return(
    <>
		<div className="main">
			<div className="center">
				<br/>
				<h1>Todo List</h1>
				<br/>
				<input type="text" placeholder="add todo" value={todo} onChange={onChangeSetText} />
				<button onClick={AddTodo} >+</button>
				<ol>
					{
						todoItems.map( (itemValue, index) => {
							return <TodoItemListItem key={index} id={index} itemValue = {itemValue} deleteTodoItems = {deleteTodoItems} />;
						})
					}	
				</ol>
			</div>
		</div>
    </>
  );
}

const TodoItemListItem = (props) => {

	return(
		<>
			<div className="todo_style">
				<i className="fa fa-times" aria-hidden="true" onClick={() => {props.deleteTodoItems(props.id) }} />
				<li>{props.itemValue}</li>
			</div>
		</>
	);
}

export default App;