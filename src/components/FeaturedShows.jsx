import React from 'react'
import { Star } from 'lucide-react'

const shows = [
  {
    title: "Tetoneto Show",
    description: "¡Salva el día con tus Tetoneto Power !",
    price: "$1800",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Mundo de Princesas",
    description: "Un cuento de hadas hecho realidad",
    price: "$329",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Aventura Pirata",
    description: "¡Zarpa en busca de tesoros y diversión!",
    price: "$279",
    image: "/api/placeholder/400/300"
  }
]

const FeaturedShows = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-800">Nuestros Shows Destacados</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {shows.map((show, index) => (
            <div key={index} className="bg-gradient-to-b from-purple-100 to-pink-100 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src={show.image} alt={show.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-purple-700">{show.title}</h3>
                <p className="text-gray-600 mb-4">{show.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-pink-600">{show.price}</span>
                  <button className="bg-yellow-400 text-purple-800 px-4 py-2 rounded-full hover:bg-yellow-500 transition duration-300 flex items-center">
                    <Star size={16} className="mr-1" />
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedShows