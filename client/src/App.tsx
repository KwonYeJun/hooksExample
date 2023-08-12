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


// import React, { useState, useRef } from 'react';

// import './App.css';

// function App() {
//   const [count, SetCount] = useState(0)
//   const countRef = useRef(0);
//   let countNumber = 0;

//   const doRenderIng = () =>{
//     SetCount(count +1)
//   }

//   const increaseRef = () => {
//     countRef.current += 1; // countRef.current의 값이 + 1씩 증가 한다.
//     console.log('countRef.current: ', countRef.current)
//     //useRef의 값을 확인 할 수 있도록 콘소로 표시해 준다.
//   }

//   const increaseNumber = () => {
//     countNumber += 1;
//     console.log('countNumber: ', countNumber)

//   }


//   return (
//     <div className="App">
//       <p>Ref: {countRef.current}</p>
//       <p>Number: {countNumber}</p>
//       <button onClick={increaseRef}>increaseRef 올려</button>
//       <button onClick={increaseNumber}>increaseNumber 올려</button>
//       <button onClick={doRenderIng}>doRenderIng 렌더링</button>

//     </div>
//   );
// }

// export default App;

// import React, { useState, useRef ,useEffect} from 'react';

// import './App.css';

// function App() {
//   const [count, SetCount] = useState(1)
//   const rendering = useRef(0);

//   useEffect(() =>{
//     rendering.current += 1;
//     console.log(rendering.current);

//   });

//   const exampleState = () =>{
//     SetCount(count +1);
//   }


//   return (
//     <div className="App">
//       <p>{count}</p>
//       <button onClick={exampleState}>exampleState</button>

//     </div>
//   );
// }

// export default App;

import React, { useState, useRef, useEffect } from 'react';

import './App.css';

function App() {
  const [count, SetCount] = useState(1)
  const [renderCount, setrenderCount] = useState(0);

  useEffect(() => {
    setrenderCount(renderCount + 1);
    console.log(renderCount);
  });

  const exampleState = () => {
    SetCount(count + 1);
  }


  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={exampleState}>exampleState</button>

    </div>
  );
}

export default App;