import React from 'react'
import { BarChart3, LineChart, Users2, TrendingUp } from 'lucide-react'

const tools = [
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Post-view Attribution',
    desc: 'Track user interactions across all touchpoints with multi-touch attribution modeling, view-through conversion tracking, and cross-device journey mapping.',
    color: '#EB3B77'
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: 'Online-to-Offline Impact',
    desc: 'Measure digital campaign influence on in-store sales with advanced location analytics, POS integration, and customer journey attribution across channels.',
    color: '#2D61E8'
  },
  {
    icon: <Users2 className="w-6 h-6" />,
    title: 'Store Visit Analytics',
    desc: 'Monitor store visit patterns, footfall attribution, and conversion rates with precision location data and machine learning-powered insights.',
    color: '#56D1D1'
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Conversion Lift Studies',
    desc: 'Quantify true incremental impact with controlled experiments, A/B testing, and advanced statistical modeling to measure campaign effectiveness.',
    color: '#EF6C3D'
  }
]

export default function Measurement() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-[#FDF8FA]" id="measurement">
      <div className="max-w-8xl mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <div className="flex items-center justify-center">
              <span className="px-6 py-2 text-sm font-semibold bg-[#16232e] text-white rounded-full tracking-wide">
                Advanced Analytics
              </span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#16232e] tracking-tight leading-tight">
              Measure What{' '}
              <span className="bg-gradient-to-r from-[#EB3B77] to-[#6366F1] bg-clip-text text-transparent">
                Matters
              </span>
            </h2>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade measurement tools that deliver actionable insights through advanced analytics, machine learning, and cross-channel attribution
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {tools.map((tool) => (
              <div 
                key={tool.title}
                style={{
                  boxShadow: `0 8px 24px ${tool.color}10, 0 4px 8px ${tool.color}05`
                }}
                className="group px-10 py-8 bg-white rounded-[40px] border-0 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-8">
                  <div 
                    style={{
                      backgroundColor: `${tool.color}15`,
                      boxShadow: `0 12px 32px ${tool.color}20, 0 2px 24px ${tool.color}30, inset 0 2px 12px ${tool.color}10`
                    }}
                    className="w-20 h-20 rounded-3xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  >
                    <div 
                      style={{ 
                        color: tool.color,
                        filter: `drop-shadow(0 2px 4px ${tool.color}30)`
                      }}
                      className="transform transition-transform duration-300 group-hover:scale-110"
                    >
                      {tool.icon}
                    </div>
                  </div>
                  <div className="flex flex-col items-start text-left py-2">
                    <h3 
                      style={{ 
                        color: tool.color,
                        textShadow: `0 2px 8px ${tool.color}20`
                      }}
                      className="text-2xl font-bold mb-3 leading-tight"
                    >
                      {tool.title}
                    </h3>
                    <p className="text-[#64748B] text-base leading-relaxed">
                      {tool.desc}
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