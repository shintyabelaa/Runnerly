import React from 'react';
import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom';
import App from './App';
import "./style/main.css"
import 'bootstrap/dist/css/bootstrap.min.css';

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
