import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, Garden, Catalogue} from "./stuff.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home/>}/>
          <Route path="/garden" element={<Garden/>}/>
		  <Route path="/catalogue" element={<Catalogue/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
