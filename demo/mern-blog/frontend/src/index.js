import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let timer = setTimeout(() => {
//     setCount((count) => count + 1);
//   }, 1000);
// const cleanUp= () => clearTimeout(timer)
//   return cleanUp
//   }, [count]);

//   return <h1>I've rendered {count} times!</h1>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />);
