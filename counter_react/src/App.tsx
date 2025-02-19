import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  const incr = () => {
    counter = counter + 1;
    setCounter(counter);
  }
  const decr = () => {
    counter = counter - 1;
    setCounter(counter);
  }

  return (
    <>
      <div>CREATING AN COUNTER APPLICATION </div>
      <h1>Counter -- {counter}</h1>
      <button onClick={incr}> + </button> <button onClick={decr}> - </button>
    </>
  )
}

export default App
