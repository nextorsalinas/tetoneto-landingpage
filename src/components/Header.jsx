import React from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-purple-600">Tetoneto</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-purple-600">Servicios</a>
          <a href="#" className="text-gray-600 hover:text-purple-600">Precios</a>
          <a href="#" className="text-gray-600 hover:text-purple-600">Promociones</a>
          <a href="#" className="text-gray-600 hover:text-purple-600">Reserva</a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Servicios</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Precios</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Promociones</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Reserva</a>
        </div>
      )}
    </header>
  )
}

export default Header