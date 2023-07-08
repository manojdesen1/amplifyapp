import React from 'react';
import ReactDOM from 'react-dom';
import { Amplify } from 'aws-amplify'; // Add this import statement
import config from './aws-exports'; // Add this import statement
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

Amplify.configure(config); // Configure Amplify with the provided config object

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

