import React, { useState } from 'react';
import './App.css';

// Componenents
const App = () => {

  // const names = [
  //   'Batman',
  //   'Superman',
  //   "Spiderman",
  //   "I am man",
  //   "You are woman"
  // ]
  // let inputValue = '';

  // use - hook.
  // copy of value, function which sets the value
  // initial value
  const [count, setCount] = useState(0);


  // let count = 0;

  // setTimeout(() => {
  //     names.push("late name");
  // }, 1000);

  console.log('rendered', count);

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column", background: 'grey', height: '100vh'}}
    >
      {/* self closing a html tag */}
      <button
        onClick={() => {
          // Any set thing - re-renders the component.
          if(count < 0) {
            alert(`Don't go up, you're already a zero`)
            return;
          }
          setCount(count - 1);
          // count += 1;
        }}
      >
        Up
      </button>
      <div style={{padding: '24px', margin: '24px', border: '2px solid blue', borderRadius: '4px', background: '#e0e0e0'}}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => {
          return <Name c={count + n} />;
        })}
      </div>

      {/* <p>{count}</p> */}
      {/* <input style={{border: '1px solid red',  height: '100px', width: '500px'}} onChange={(e) => inputValue = e.target.textContent} /> */}
      <button
        onClick={() => {
          // Any set thing - re-renders the component.
          setCount(count + 1);
          // count += 1;
        }}
      >
        Down
      </button>
    </div>
  );
}

const Name = ({c}) => {

  function getRandomRGBColor() {
  const r = Math.floor(Math.random() * 256); // Random number between 0-255
  const g = Math.floor(Math.random() * 256); // Random number between 0-255
  const b = Math.floor(Math.random() * 256); // Random number between 0-255
  
   return `rgb(${r}, ${g}, ${b})`;
  }
  return <h1 style={{background: getRandomRGBColor(), color: '#fff', padding: '4px', borderRadius: '4px', border: '1px solid black'} }>{c}</h1>;
}

export default App;