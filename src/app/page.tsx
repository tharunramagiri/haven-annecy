'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Instagram, Facebook, MapPin, Clock, Phone, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-orange-600">HAVEN</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</a>
              <a href="#menu" className="text-gray-700 hover:text-orange-600 transition-colors">Menu</a>
              <a href="#gallery" className="text-gray-700 hover:text-orange-600 transition-colors">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <a href="#home" className="block py-2 text-gray-700 hover:text-orange-600">Home</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-orange-600">About</a>
              <a href="#menu" className="block py-2 text-gray-700 hover:text-orange-600">Menu</a>
              <a href="#gallery" className="block py-2 text-gray-700 hover:text-orange-600">Gallery</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-orange-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 to-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Haven Annecy"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Haven Annecy
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Australian Brunch & Coffee Shop in the heart of Annecy
          </p>
          <p className="text-lg text-gray-600 mb-12">
            Not Heaven, but pretty close! Between lake and mountains, we believe coffee and food are more than simple pleasures.
          </p>
          <a
            href="#menu"
            className="inline-block bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Explore Menu
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                A Taste of Australia in the Heart of Annecy
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Haven promises an Australian-inspired escape in Annecy, between lake and mountains, 
                where passion and people are at the centre of everything.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe coffee and food are more than simple pleasures: they're moments to connect, 
                to travel differently, and to feel right at home.
              </p>
              <p className="text-lg text-gray-600">
                Fresh and tasty recipes inspired by the Australian brunch scene. Colourful, generous 
                and creative plates, prepared with local and seasonal ingredients.
              </p>
            </div>
            <div className="relative h-96 bg-orange-100 rounded-2xl overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="Haven Annecy interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Menu
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">
              Aussie vibes in the heart of Annecy — brunch means colourful, generous and creative plates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Menu Category 1 - Brunch */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">Brunch</h3>
              <ul className="space-y-4">
                <li className="border-b pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">Avo Smash</h4>
                      <p className="text-sm text-gray-600">Sourdough, avocado, chili flakes, lime</p>
                    </div>
                    <span className="text-orange-600 font-semibold">€14</span>
                  </div>
                </li>
                <li className="border-b pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">Eggs Benedict</h4>
                      <p className="text-sm text-gray-600">Poached eggs, hollandaise, spinach</p>
                    </div>
                    <span className="text-orange-600 font-semibold">€16</span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">Pancake Stack</h4>
                      <p className="text-sm text-gray-600">Maple syrup, berries, whipped cream</p>
                    </div>
                    <span className="text-orange-600 font-semibold">€13</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Menu Category 2 - Coffee */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">Coffee</h3>
              <ul className="space-y-4">
                <li className="border-b pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">Flat White</h4>
                      <p className="text-sm text-gray-600">Aussie-style, velvety microfoam</p>
                    </div>
                    <span className="text-orange-600 font-semibold">€4.50</span>
                  </div>
                </li>
                <li className="border-b pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">Espresso</h4>
                      <p className="text-sm text-gray-600">Single or double shot</p>
                    </div>
                    <span className="text-orange-600 font-semibold">€3.00</span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">Cold Brew</h4>
                      <p className="text-sm text-gray-600">18-hour steeped, smooth</p>
                    </div>
                    <span className="text-orange-600 font-semibold">€4.00</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Menu Category 3 - Specialties */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">Specialties</h3>
              <ul className="space-y-4">
                <li className="border-b pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">Haven Bowl</h4>
                      <p className="text-sm text-gray-600">Acai, granola, fresh fruits, honey</p>
                    </div>
                    <span className="text-orange-600 font-semibold">€12</span>
                  </div>
                </li>
                <li className="border-b pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">Smoked Salmon Bagel</h4>
                      <p className="text-sm text-gray-600">Cream cheese, capers, dill</p>
                    </div>
                    <span className="text-orange-600 font-semibold">€15</span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">Fry-Up</h4>
                      <p className="text-sm text-gray-600">Australian-style breakfast</p>
                    </div>
                    <span className="text-orange-600 font-semibold">€17</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Gallery
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative">
                <Image
                  src={`/images/gallery-${i}.jpg`}
                  alt={`Gallery ${i}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Visit Us
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-300">5 rue Filaterie</p>
              <p className="text-gray-300">74000 Annecy, France</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="text-gray-300">Mon-Fri: 8:00am - 4:00pm</p>
              <p className="text-gray-300">Saturday: 8:00am - 6:00pm</p>
              <p className="text-gray-300">Sunday: 8:00am - 2:00pm</p>
              <p className="text-gray-300 mt-2">Brunch: 9:00am - 2:00pm</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="text-gray-300">+33(0) 4 50 51 21 48</p>
              <p className="text-gray-300">hello@haven-annecy.fr</p>
              <div className="flex gap-4 mt-4">
                <a href="https://instagram.com" className="text-gray-300 hover:text-orange-600 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://facebook.com" className="text-gray-300 hover:text-orange-600 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2026 Haven Annecy. All rights reserved.</p>
          <p className="text-sm text-gray-400 mt-2">Australian Brunch & Coffee Shop in the heart of Annecy</p>
        </div>
      </footer>
    </main>
  )
}
