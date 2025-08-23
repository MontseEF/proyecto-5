import { Link } from "react-router-dom";
 
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-8 w-auto"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Logo"
            />
          </div>

          {/* Links (desktop) */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Dashboard
            </a>
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Team
            </a>
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Projects
            </a>
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Calendar
            </a>
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
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Dashboard
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Team
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Projects
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Calendar
          </a>
        </div>
      )}
    </nav>
  );
}
