
import { useState } from 'react'
import './App.css'
import CustomHook from './components/CustomHook/CustomHook'

function App() {
  const [count,setCount]=useState(0);

  CustomHook(count);
  const increment=()=>{
    setCount(prevCount=>prevCount+1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default App
