import React from 'react'
import { Building2, Store, ShoppingBag, Car } from 'lucide-react'

const industries = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Real Estate',
    desc: 'Drive property inquiries and sales with hyper-local targeting, virtual tour promotions, and dynamic remarketing to high-intent buyers and renters.',
    color: '#EB3B77'
  },
  {
    icon: <Store className="w-6 h-6" />,
    title: 'Retail',
    desc: 'Boost in-store and online sales through omnichannel campaigns, local inventory ads, and personalized shopping experiences across devices.',
    color: '#2D61E8'
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: 'E-commerce',
    desc: 'Maximize online conversions with dynamic product ads, shopping feed optimization, and AI-powered bidding strategies across major marketplaces.',
    color: '#56D1D1'
  },
  {
    icon: <Car className="w-6 h-6" />,
    title: 'Automotive',
    desc: 'Generate quality test drive leads using vehicle inventory ads, model-specific targeting, and advanced audience segmentation for dealerships.',
    color: '#EF6C3D'
  }
]

export default function Industry() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-[#FDF8FA]" id="industries">
      <div className="max-w-8xl mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <div className="flex items-center justify-center">
              <span className="px-6 py-2 text-sm font-semibold bg-[#16232e] text-white rounded-full tracking-wide">
                Industry Solutions
              </span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#16232e] tracking-tight leading-tight">
              Tailored for Your{' '}
              <span className="bg-gradient-to-r from-[#EB3B77] to-[#6366F1] bg-clip-text text-transparent">
                Industry
              </span>
            </h2>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed">
              Industry-specific solutions designed to meet your unique business objectives
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {industries.map((industry) => (
              <div 
                key={industry.title}
                style={{
                  boxShadow: `0 8px 24px ${industry.color}10, 0 4px 8px ${industry.color}05`
                }}
                className="group px-10 py-8 bg-white rounded-[40px] border-0 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-8">
                  <div 
                    style={{
                      backgroundColor: `${industry.color}15`,
                      boxShadow: `0 12px 32px ${industry.color}20, 0 2px 24px ${industry.color}30, inset 0 2px 12px ${industry.color}10`
                    }}
                    className="w-20 h-20 rounded-3xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  >
                    <div 
                      style={{ 
                        color: industry.color,
                        filter: `drop-shadow(0 2px 4px ${industry.color}30)`
                      }}
                      className="transform transition-transform duration-300 group-hover:scale-110"
                    >
                      {industry.icon}
                    </div>
                  </div>
                  <div className="flex flex-col items-start text-left py-2">
                    <h3 
                      style={{ 
                        color: industry.color,
                        textShadow: `0 2px 8px ${industry.color}20`
                      }}
                      className="text-2xl font-bold mb-3 leading-tight"
                    >
                      {industry.title}
                    </h3>
                    <p className="text-[#64748B] text-base leading-relaxed">
                      {industry.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 