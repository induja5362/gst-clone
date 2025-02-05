import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Ensure this file exists
import App from './App';  // Ensure './App.js' exists in 'src'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
