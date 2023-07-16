import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, Garden, Catalogue} from "./stuff.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home style={{overflow:"hidden"}}/>}/>
          <Route path="/garden" element={<Garden style={{overflowY:"hidden"}}/>}/>
		      <Route path="/catalogue" element={<Catalogue style={{overflowY:"scroll"}}/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
