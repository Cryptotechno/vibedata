import React from 'react'
import { UserCircle2, Target, Settings2, Zap } from 'lucide-react'

const highlights = [
  {
    icon: <UserCircle2 className="w-6 h-6" />,
    title: 'Dedicated Media Strategist',
    desc: 'Work directly with experienced strategists who understand your industry, objectives, and create custom campaign strategies for maximum ROI.',
    color: '#EB3B77'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Business-Goal Alignment',
    desc: 'Strategic planning focused on your KPIs with custom audience targeting, creative optimization, and performance benchmarking.',
    color: '#2D61E8'
  },
  {
    icon: <Settings2 className="w-6 h-6" />,
    title: 'End-to-End Service',
    desc: 'Comprehensive campaign management including media planning, creative development, optimization, and detailed performance reporting.',
    color: '#56D1D1'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Rapid Optimization',
    desc: 'Real-time performance monitoring with AI-powered optimizations to maximize campaign effectiveness and budget efficiency.',
    color: '#EF6C3D'
  }
]

export default function Strategy() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-[#FDF8FA]" id="strategy">
      <div className="max-w-8xl mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <div className="flex items-center justify-center">
              <span className="px-6 py-2 text-sm font-semibold bg-[#16232e] text-white rounded-full tracking-wide">
                Strategic Approach
              </span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#16232e] tracking-tight leading-tight">
              Strategy-First{' '}
              <span className="bg-gradient-to-r from-[#EB3B77] to-[#6366F1] bg-clip-text text-transparent">
                Execution
              </span>
            </h2>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed">
              Expert strategists craft custom campaign plans aligned with your KPIs, handling everything from media planning to optimization
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {highlights.map((item) => (
              <div 
                key={item.title}
                style={{
                  boxShadow: `0 8px 24px ${item.color}10, 0 4px 8px ${item.color}05`
                }}
                className="group px-10 py-8 bg-white rounded-[40px] border-0 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-8">
                  <div 
                    style={{
                      backgroundColor: `${item.color}15`,
                      boxShadow: `0 12px 32px ${item.color}20, 0 2px 24px ${item.color}30, inset 0 2px 12px ${item.color}10`
                    }}
                    className="w-20 h-20 rounded-3xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  >
                    <div 
                      style={{ 
                        color: item.color,
                        filter: `drop-shadow(0 2px 4px ${item.color}30)`
                      }}
                      className="transform transition-transform duration-300 group-hover:scale-110"
                    >
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex flex-col items-start text-left py-2">
                    <h3 
                      style={{ 
                        color: item.color,
                        textShadow: `0 2px 8px ${item.color}20`
                      }}
                      className="text-2xl font-bold mb-3 leading-tight"
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#64748B] text-base leading-relaxed">
                      {item.desc}
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