import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



var predictor = require("./predictor.js");
predictor.initialize(() => {
	var result = predictor.predict("Tomato");
	alert("Your plant will be ready in " + result.time + " days and will yield " + result.amount);	
});
