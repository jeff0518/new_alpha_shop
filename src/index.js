import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Text from './Text';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Text /> */}
  </React.StrictMode>
)