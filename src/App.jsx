import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedShows from './components/FeaturedShows'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <Header />
      <Hero />
      <FeaturedShows />
      <Footer />
    </div>
  )
}

export default App