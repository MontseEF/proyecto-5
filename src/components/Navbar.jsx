import { Link } from "react-router-dom";
 
export default function Navbar() {
  return (
<nav className="bg-blue-600 p-4 text-white flex gap-4">
<Link to="/" className="hover:underline">Inicio</Link>
<Link to="/paises" className="hover:underline">Descubre</Link>
<Link to="/contacto" className="hover:underline">Contacto</Link>
</nav>
  );
}