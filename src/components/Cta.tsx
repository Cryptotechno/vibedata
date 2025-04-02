import React from 'react'
import { Rocket, ArrowRight, ChevronRight } from 'lucide-react'

export default function Cta() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#16232e]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#EB3B77]/20 to-[#EF6C3D]/20 opacity-50"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-[0.05]"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#EB3B77]/30 to-[#EF6C3D]/30 blur-3xl animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#EF6C3D]/20 to-[#EB3B77]/20 blur-2xl animate-pulse [animation-delay:1000ms]"></div>
      
      <div className="max-w-4xl mx-auto text-center px-6 relative">
        <div className="space-y-12">
          <div className="flex justify-center fade-in-up [--delay:200ms]">
            <span className="inline-flex items-center space-x-2 px-6 py-2 bg-white/10 rounded-full text-white/90 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors duration-300 group cursor-pointer">
              <Rocket className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-semibold tracking-wide">Ready to Scale?</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </span>
          </div>
          
          <div className="space-y-8 fade-in-up [--delay:400ms]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Let's Build{' '}
              <span className="bg-gradient-to-r from-[#EB3B77] to-[#EF6C3D] bg-clip-text text-transparent">
                Smarter Media
              </span>{' '}
              Together
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Join 500+ innovative teams already using VibeData to transform their digital advertising performance.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6 fade-in-up [--delay:600ms]">
            <button className="group bg-gradient-to-r from-[#EB3B77] to-[#EF6C3D] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center w-full sm:w-auto justify-center">
              Request Your Strategy Session
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
            <a 
              href="#features" 
              className="group text-white/90 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center w-full sm:w-auto justify-center border-2 border-white/10 hover:border-white/20 hover:bg-white/5 backdrop-blur-sm"
            >
              Explore Features
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 