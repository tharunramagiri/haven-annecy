'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Instagram, Facebook, MapPin, Clock, Phone, Mail } from 'lucide-react'

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
      {/* Concept/demo notice — this is an unofficial design concept, not the
          live Haven Annecy website. See README.md for details. */}
      <div className="bg-gray-900 text-white text-center text-xs py-2 px-4">
        Unofficial design concept — not affiliated with or endorsing Haven Annecy&apos;s real website at{' '}
        <a href="https://haven-annecy.fr" target="_blank" rel="noopener noreferrer" className="underline">
          haven-annecy.fr
        </a>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 top-8 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
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
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-orange-50 to-white">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Haven Annecy
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Australian Brunch &amp; Coffee Shop in the heart of Annecy
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
            <div className="relative h-96 bg-gradient-to-br from-orange-200 to-orange-50 rounded-2xl overflow-hidden flex items-center justify-center">
              <p className="text-orange-700/60 text-sm px-8 text-center">
                [ Image placeholder — add a real interior photo here before publishing ]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section — real dishes/prices sourced from haven-annecy.fr (Aug 2026 seasonal menu) */}
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
            <p className="text-sm text-gray-400 mt-2">
              Seasonal menu — dishes rotate. See{' '}
              <a href="https://haven-annecy.fr/en/brunch" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-600">
                haven-annecy.fr
              </a>{' '}
              for the current menu.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Menu Category 1 - Savoury Brunch */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">Savoury</h3>
              <ul className="space-y-4">
                <li className="border-b pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">Smashed Avo</h4>
                      <p className="text-sm text-gray-600">Nordic bread, avocado, feta, savoury granola, cherry tomato pickles, arugula</p>
                    </div>
                    <span className="text-orange-600 font-semibold">&euro;14.70</span>
                  </div>
                </li>
                <li className="border-b pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">Eggs Benedict Aussie</h4>
                      <p className="text-sm text-gray-600">Nordic bread, avocado, feta, two poached eggs, hollandaise, rocket, lemon fromage blanc</p>
                    </div>
                    <span className="text-orange-600 font-semibold">&euro;15.90</span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">The Shrimpy Roll</h4>
                      <p className="text-sm text-gray-600">Hot dog bun, carrot-tahini-lime coleslaw, shrimp, spicy cilantro mayonnaise</p>
                    </div>
                    <span className="text-orange-600 font-semibold">&euro;18.50</span>
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
                      <p className="text-sm text-gray-600">Le Panier &agrave; Caf&eacute; (Annecy) &mdash; 1 volume coffee, 1 volume milk, fine foam</p>
                    </div>
                    <span className="text-orange-600 font-semibold">&euro;4.50</span>
                  </div>
                </li>
                <li className="border-b pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">Espresso</h4>
                      <p className="text-sm text-gray-600">Simple 4cl &euro;2.00 &middot; Double 8cl</p>
                    </div>
                    <span className="text-orange-600 font-semibold">&euro;3.40</span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">Cold Brew &amp; Ginger</h4>
                      <p className="text-sm text-gray-600">Cold brew coffee with spicy ginger tonic from Hysope, 25cl</p>
                    </div>
                    <span className="text-orange-600 font-semibold">&euro;5.50</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Menu Category 3 - Sweet */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">Sweet</h3>
              <ul className="space-y-4">
                <li className="border-b pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">Maple Pancakes</h4>
                      <p className="text-sm text-gray-600">2 pancakes, mascarpone whipped cream, fresh fruit, maple syrup</p>
                    </div>
                    <span className="text-orange-600 font-semibold">&euro;9.90</span>
                  </div>
                </li>
                <li className="border-b pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">Acai Bowl</h4>
                      <p className="text-sm text-gray-600">Oat milk smoothie bowl, berries, banana, a&ccedil;a&iuml;, homemade granola, fresh fruit</p>
                    </div>
                    <span className="text-orange-600 font-semibold">&euro;11.00</span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">Hot Cookie Coma</h4>
                      <p className="text-sm text-gray-600">Baked pistachio, raspberry &amp; white chocolate cookie, pistachio ice cream, raspberry coulis</p>
                    </div>
                    <span className="text-orange-600 font-semibold">&euro;9.90</span>
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
            <p className="text-sm text-gray-400 mt-4">
              Real photos not yet added &mdash; see README.md for sourcing plan.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg flex items-center justify-center">
                <span className="text-orange-600/40 text-3xl font-bold">{i}</span>
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
                <a href="https://www.instagram.com/haven.annecy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-600 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-600 transition-colors">
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
          <p>Design concept by Orazen &mdash; not the official Haven Annecy website.</p>
          <p className="text-sm text-gray-400 mt-2">Real site: <a href="https://haven-annecy.fr" className="underline">haven-annecy.fr</a></p>
        </div>
      </footer>
    </main>
  )
}
