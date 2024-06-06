import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/about";
import Projects from "./Components/Projects";
import ContactUs from "./Components/ContactUs";
import PhoneProjectDisplay from "./Components/PhoneProjectDisplay";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hello" element={<Projects />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/projects" element={<PhoneProjectDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
