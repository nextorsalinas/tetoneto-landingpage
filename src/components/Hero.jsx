import React from 'react'
import { Cake, Gift, Star } from 'lucide-react'

const Hero = () => {
  return (
    <section className="py-20 text-center bg-gradient-to-b from-purple-100 to-pink-100">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4 text-purple-800">¡Diversión Garantizada con Tetoneto!</h1>
        <p className="text-xl mb-8 text-gray-600">Los mejores shows para fiestas infantiles</p>
        
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            <Star className="inline mr-2" /> ¡Oferta Especial! <Star className="inline ml-2" />
          </h2>
          <p className="text-lg mb-4">
            Contrata en línea ahora y recibe una mochila de regalo
          </p>
          <div className="flex justify-center space-x-4 mb-4">
            <img src="src/assets/1.png" alt="Mochila 1" className="w-24 h-24 object-cover rounded" />
            <img src="src/assets/2.png" alt="Mochila 2" className="w-24 h-24 object-cover rounded" />
            <img src="src/assets/3.png" alt="Mochila 3" className="w-24 h-24 object-cover rounded" />
          </div>
          <p className="text-sm text-gray-500">
            *Elige una de las tres mochilas disponibles
          </p>
        </div>
        
        <div className="flex justify-center space-x-4 mb-8">
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition duration-300 flex items-center">
            <Gift className="mr-2" /> Reserva Ahora y Obten el Regalo
          </button>
        </div>
        
        <div className="mt-12 animate-bounce">
          <Gift size={64} className="mx-auto text-yellow-500" />
          
        </div>
      </div>
    </section>
  )
}

export default Hero