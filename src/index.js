import React from 'react';
import ReactDOM from 'react-dom/client';

import "./Pages/styles/bootstrap.css"

import './index.css';
import "./Pages/styles/tailwind.css"
import "./Pages/styles/index.css"
import "./Pages/styles/font.css"
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
