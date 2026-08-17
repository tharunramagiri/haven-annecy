'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
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
            Australian-inspired escape between lake and mountains
          </p>
          <p className="text-lg text-gray-600 mb-12">
            Brunch and specialty coffee, let's share together a love for flavour and craftsmanship
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
                Haven brings the relaxed, vibrant cafe culture of Australia to Annecy. 
                Between the lake and mountains, we've created a space where quality coffee, 
                fresh brunch, and good vibes come together.
              </p>
              <p className="text-lg text-gray-600">
                Every dish is crafted with care, using locally-sourced ingredients whenever possible. 
                Our baristas are trained in the Australian coffee tradition, bringing you the perfect 
                flat white, espresso, or cold brew.
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
              Australian-inspired brunch, specialty coffee, and seasonal specials
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Menu Category 1 */}
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

            {/* Menu Category 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">Coffee</h3>
              <ul className="space-y-4">
                <li className="border-b pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">Flat White</h4>
                      <p className="text-sm text-gray-600">Double shot, velvety microfoam</p>
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

            {/* Menu Category 3 */}
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
            <div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-300">Annecy, France</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="text-gray-300">Mon-Fri: 7am - 5pm</p>
              <p className="text-gray-300">Sat-Sun: 8am - 6pm</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="text-gray-300">hello@haven-annecy.fr</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2026 Haven Annecy. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
