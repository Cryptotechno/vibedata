import React from 'react'
import { Globe2, Tv2, Clock, Zap } from 'lucide-react'

const features = [
  {
    icon: <Globe2 className="w-7 h-7" />,
    title: 'Global Inventory Access',
    desc: 'Access premium inventory across 190+ countries with advanced targeting capabilities, major ad exchange integrations, and cross-device optimization.',
    color: '#EB3B77'
  },
  {
    icon: <Tv2 className="w-7 h-7" />,
    title: 'Multi-Format Campaigns',
    desc: 'Execute seamless campaigns across display, video, CTV, DOOH, native, and rich media formats with full creative support and optimization.',
    color: '#2D61E8'
  },
  {
    icon: <Clock className="w-7 h-7" />,
    title: '1-Day Campaign Launch',
    desc: 'Accelerate your go-to-market with our streamlined setup process, automated creative optimization, and rapid campaign deployment.',
    color: '#56D1D1'
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: 'Real-Time Optimization',
    desc: 'Leverage AI-powered performance monitoring and automated bid adjustments for continuous campaign optimization across all channels.',
    color: '#EF6C3D'
  }
]

export default function Features() {
  return (
    <section className="relative section-padding overflow-hidden bg-gradient-to-b from-white to-[#FDF8FA]" id="features">
      <div className="max-w-8xl mx-auto container-padding relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 mb-24">
            <div className="flex items-center justify-center fade-in-up [--delay:200ms]">
              <span className="px-6 py-2.5 text-sm font-semibold bg-[#16232e] text-white rounded-full tracking-wide shadow-md">
                Enterprise Features
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#16232e] tracking-tight leading-tight max-w-4xl mx-auto fade-in-up [--delay:300ms]">
              Enterprise-Grade Capabilities for{' '}
              <span className="text-gradient">
                Maximum Impact
              </span>
            </h2>
            <p className="text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto leading-relaxed fade-in-up [--delay:400ms]">
              Powerful features designed to scale your programmatic advertising with precision and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feat, index) => (
              <div 
                key={feat.title}
                style={{
                  boxShadow: `0 8px 32px ${feat.color}08, 0 4px 16px ${feat.color}05`,
                  animationDelay: `${500 + index * 100}ms`
                }}
                className="group px-8 py-10 bg-white rounded-[32px] border border-gray-100/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl fade-in-up"
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div 
                    style={{
                      backgroundColor: `${feat.color}10`,
                      boxShadow: `0 12px 32px ${feat.color}15, 0 2px 24px ${feat.color}20, inset 0 2px 12px ${feat.color}08`
                    }}
                    className="w-20 h-20 rounded-3xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  >
                    <div 
                      style={{ 
                        color: feat.color,
                        filter: `drop-shadow(0 2px 4px ${feat.color}25)`
                      }}
                      className="transform transition-transform duration-500 group-hover:scale-110"
                    >
                      {feat.icon}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 
                      style={{ 
                        color: feat.color,
                        textShadow: `0 2px 8px ${feat.color}15`
                      }}
                      className="text-xl font-bold leading-tight"
                    >
                      {feat.title}
                    </h3>
                    <p className="text-[#64748B] text-base leading-relaxed">
                      {feat.desc}
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