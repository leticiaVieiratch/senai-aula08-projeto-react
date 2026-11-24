import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

// Ponto de entrada React 18 usando createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
