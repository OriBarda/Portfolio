import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/about";
import Projects from "./Components/Projects";
import ContactUs from "./Components/ContactUs";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
