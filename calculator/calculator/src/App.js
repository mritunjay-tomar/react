import { useState } from 'react'
import * as math from 'mathjs'

import Button from './components/button';
import Input from "./components/input"
import Clear from "./components/ClearButton"

import './App.css';

function App() {

  const [input, setInput] = useState("");

  const handleClear = () => {
	  setInput("");
  }

  const appendToInput = (value) => {
	setInput(input + value);
  }

  const handleEqualHit = () => {
	setInput(math.evaluate(input));
  }

  return (
    <>
      <div className="App">
          <div className="calc-wrapper">

			  <Input input={input} ></Input>

			  <div className = "row">
				<Button handleClick={appendToInput} >7</Button>
				<Button handleClick={appendToInput} >8</Button>
				<Button handleClick={appendToInput} >9</Button>
				<Button handleClick={appendToInput} >/</Button>
			  </div>

			  <div className = "row">
				<Button handleClick={appendToInput} >4</Button>
				<Button handleClick={appendToInput} >5</Button>
				<Button handleClick={appendToInput} >6</Button>
				<Button handleClick={appendToInput} >X</Button>
			  </div>

			  <div className = "row">
				<Button handleClick={appendToInput} >1</Button>
				<Button handleClick={appendToInput} >2</Button>
				<Button handleClick={appendToInput} >3</Button>
				<Button handleClick={appendToInput} >+</Button>
			  </div>

			  <div className = "row">
				<Button handleClick={appendToInput} >.</Button>
				<Button handleClick={appendToInput} >0</Button>
				<Button handleClick={handleEqualHit} >=</Button>
				<Button handleClick={appendToInput} >-</Button>
			  </div>

			  <div>
				<Clear handleClear={handleClear}>Clear</Clear>
			  </div>
		  </div>
      </div>
    </>
  );
}

export default App;
