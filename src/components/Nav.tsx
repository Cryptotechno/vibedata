import React, { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

const navLinks = [
  { href: '#features', text: 'Features' },
  { href: '#strategy', text: 'Strategy' },
  { href: '#targeting', text: 'Targeting' },
  { href: '#analytics', text: 'Analytics' },
  { href: '#industries', text: 'Industries' }
]

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 bg-white/95 backdrop-blur-sm z-50 transition-all duration-300 ${
      scrolled ? 'shadow-lg border-b border-gray-100/50' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-[#16232e] hover:text-[#EB3B77] transition-all duration-200">
            <span className="text-gradient">Vibe</span>Data
          </a>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-[#16232e]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a 
                key={link.href}
                href={link.href} 
                className="relative text-[#16232e]/70 hover:text-[#EB3B77] font-medium transition-all duration-200 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#EB3B77] to-[#EF6C3D] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="group bg-gradient-to-r from-[#EB3B77] to-[#EF6C3D] text-white px-6 py-2.5 rounded-xl font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 space-y-6 mt-4 border-t border-gray-100/50">
            {navLinks.map((link, index) => (
              <a 
                key={link.href}
                href={link.href} 
                className="block text-[#16232e]/70 hover:text-[#EB3B77] font-medium transition-all duration-200"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
            <button 
              className="group w-full bg-gradient-to-r from-[#EB3B77] to-[#EF6C3D] text-white px-6 py-2.5 rounded-xl font-semibold shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 