import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import Strategy from './components/Strategy'
import Targeting from './components/Targeting'
import Analytics from './components/Analytics'
import Measurement from './components/Measurement'
import Industry from './components/Industry'
import Cta from './components/Cta'

export default function App() {
  return (
    <div className="font-manrope bg-white">
      <Nav />
      <main className="space-y-0">
        <Hero />
        <Features />
        <Strategy />
        <Targeting />
        <Analytics />
        <Measurement />
        <Industry />
        <Cta />
      </main>
    </div>
  )
} 