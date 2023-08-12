import React,{useState, useRef} from 'react';

import './App.css';

function App() {
  const [ count, setCount] = useState(0);

  const increaseCountState = () =>{
    setCount(count +1);
  }

  return (
    <div className="App">
    <p>State: {count}</p>
    <button onClick={increaseCountState}>State올려</button>
    </div>
  );
}

export default App;
