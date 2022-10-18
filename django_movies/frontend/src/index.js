import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { MenuBar } from './components/MenuBar';
import { NavBar } from './components/NavBar';
// import './index.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <NavBar /> */}
    <MenuBar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();