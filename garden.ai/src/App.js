import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, Garden} from "./stuff.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home/>}/>
          <Route path="/garden" element={<Garden/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
