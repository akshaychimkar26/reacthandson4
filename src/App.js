import React from 'react';
import "./style4.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homee from "./Components/Homee";
import Students from "./Components/Students";
import Contact from "./Components/Contact";
function App() {
  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homee/>}></Route>
        <Route exact path="/students" element={<Students/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
