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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/*
reportWebVitals();

function showPosition() {
  
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      coordinates = [position.coords.latitude, position.coords.longitude];
      localStorage.setItem("Coords",JSON.stringify(coordinates)); 
      })
                
             
        } else {
            alert("Sorry, your browser does not support HTML5 geolocation.");
        }
    
}
showPosition();
var coordinates=JSON.parse(localStorage.getItem("Coords"));
alert(coordinates);
*/



function main() {
	var lat = coordinates[0];
	var lon = coordinates[1];
	alert(lat + ", " + lon);
}


var coordinates;
function setCoordinates(position) {
	coordinates = [position.coords.latitude, position.coords.longitude];
	main();
}

if (navigator.geolocation)
	navigator.geolocation.getCurrentPosition(setCoordinates);
else
	alert("Sorry, your browser does not support HTML5 geolocation.");
