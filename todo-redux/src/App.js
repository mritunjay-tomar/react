import './App.css';

import AddTodo from "./components/AddTodo/AddTodo"
import List from "./components/List/List"

function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTodo />
      <List />
    </div>
  );
}

export default App;
