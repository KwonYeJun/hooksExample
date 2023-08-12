// import React,{useState, useRef} from 'react';

// import './App.css';

// function App() {
//   const [ count, setCount] = useState(0);
//   const countRef = useRef(0);
  
//   console.log('countRef',countRef)
//   console.log('렌더링 👏')


//   const increaseCountState = () =>{
//     setCount(count +1);
//   }

//   const increaseCountRef = () => {
//     countRef.current = countRef.current + 1;
//         // countRef.current += + 1;
//   console.log('countRef.current',countRef.current)

//   }


//   return (
//     <div className="App">
//       <p>Ref : {countRef.current}</p>
//     <button onClick={increaseCountRef}>Ref올려</button>

//     <p>State: {count}</p>
//     <button onClick={increaseCountState}>State올려</button>
//     </div>
//   );
// }

// export default App;


import React,{useState, useRef} from 'react';

import './App.css';

function App() {
  const [ count, setCount] = useState(0);
  const countRef = useRef(0);
  
  console.log('countRef',countRef)
  console.log('렌더링 👏')


  const increaseCountState = () =>{
    setCount(count +1);
  }

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
        // countRef.current += + 1;
  console.log('countRef.current',countRef.current)

  }


  return (
    <div className="App">
      <p>Ref : {countRef.current}</p>
    <button onClick={increaseCountRef}>Ref올려</button>

    <p>State: {count}</p>
    <button onClick={increaseCountState}>State올려</button>
    </div>
  );
}

export default App;
