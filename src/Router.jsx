import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Inicio from "./pages/Home.jsx";
import Conocenos from "./pages/About.jsx";
import Generos from "./pages/Genres.jsx";
import Aleatorio from "./pages/Random.jsx";

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/generos" element={<Generos />} />
        <Route path="/aleatorio" element={<Aleatorio />} />
      </Routes>
    </Router>
  );
}
