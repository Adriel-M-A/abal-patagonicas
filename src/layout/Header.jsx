import { Link } from "react-router";

function Header() {
  return (
    // Contenedor principal del header con fondo negro y texto blanco
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo y nombre */}
          <div className="flex items-center space-x-2">
            <div className="bg-yellow-400 text-black px-3 py-1 rounded font-bold text-xl">
              ABAL
            </div>
            <span className="text-lg font-semibold">Patagónicas</span>
          </div>

          {/* Navegación principal (oculta en pantallas pequeñas) */}
          <nav className="hidden md:flex space-x-6">
            <Link
              to="#productos"
              className="hover:text-yellow-400 transition-colors"
            >
              Productos
            </Link>
            <Link
              to="#servicios"
              className="hover:text-yellow-400 transition-colors"
            >
              Servicios
            </Link>
            <Link
              to="#nosotros"
              className="hover:text-yellow-400 transition-colors"
            >
              Nosotros
            </Link>
            <Link
              to="#contacto"
              className="hover:text-yellow-400 transition-colors"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
