import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/jazz_logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);



  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          </div>

          {/* Links (desktop) */}
          <div className="hidden md:flex space-x-4">
            <Link to="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Inicio
            </Link>
            <Link to="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Conócenos
            </Link>
            <Link to="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Géneros
            </Link>
            <Link to="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Aleatorio
            </Link>
          </div>

          {/* Botón hamburguesa (mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Menú mobile */}
      {open && (
        <div className="md:hidden px-2 pb-3 space-y-1">
          <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Inicio
          </Link>
          <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Conócenos
          </Link>
          <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Géneros
          </Link>
          <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Aleatorio
          </Link>
        </div>
      )}
    </nav>
  );
}
