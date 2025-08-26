import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const base =
    "px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700/60 transition";
  const active =
    "bg-gray-900/40"; 

  const closeMobile = () => setOpen(false);

  return (
    <nav className="relative z-50 bg-amber-700 text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto object-contain md:h-12"
            />
            {/* <span className="hidden sm:block font-semibold">Binary Jazz</span> */}
          </div>

          {/* Links (desktop) */}
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className={({ isActive }) => `${base} ${isActive ? active : ""}`}>
              Inicio
            </NavLink>
            <NavLink to="/conocenos" className={({ isActive }) => `${base} ${isActive ? active : ""}`}>
              Conócenos
            </NavLink>
            <NavLink to="/generos" className={({ isActive }) => `${base} ${isActive ? active : ""}`}>
              Géneros
            </NavLink>
            <NavLink to="/aleatorio" className={({ isActive }) => `${base} ${isActive ? active : ""}`}>
              Aleatorio
            </NavLink>
          </div>

          {/* Botón hamburguesa (mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded hover:bg-amber-800/40 focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-label="Abrir menú"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Menú mobile */}
      {open && (
        <div className="md:hidden px-2 pb-3 space-y-1">
          <NavLink
            to="/"
            onClick={closeMobile}
            className={({ isActive }) =>
              `block ${base} ${isActive ? active : ""}`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/conocenos"
            onClick={closeMobile}
            className={({ isActive }) =>
              `block ${base} ${isActive ? active : ""}`
            }
          >
            Conócenos
          </NavLink>
          <NavLink
            to="/generos"
            onClick={closeMobile}
            className={({ isActive }) =>
              `block ${base} ${isActive ? active : ""}`
            }
          >
            Géneros
          </NavLink>
          <NavLink
            to="/aleatorio"
            onClick={closeMobile}
            className={({ isActive }) =>
              `block ${base} ${isActive ? active : ""}`
            }
          >
            Aleatorio
          </NavLink>
        </div>
      )}
    </nav>
  );
}

