import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";

function Home() {
  return <h1>Inicio</h1>;
}

function Sobre() {
  return <h1>Conócenos</h1>;
}

function Generos() {
  return <h1>Géneros</h1>;
}

function Aleatorio() {
  return <h1>Aleatorio</h1>;
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/generos" element={<Generos />} />
        <Route path="/aleatorio" element={<Aleatorio />} />
      </Routes>
    </Router>
  );
}

 
