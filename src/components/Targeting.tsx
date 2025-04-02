import React from 'react'
import { Bot, Users, Gauge, Target } from 'lucide-react'

const bullets = [
  {
    icon: <Bot className="w-7 h-7" />,
    title: 'AI/ML-based Optimization',
    desc: 'Harness the power of machine learning algorithms to optimize bidding strategies and creative performance in real-time. Our AI models analyze billions of data points to predict user behavior and maximize campaign effectiveness.',
    color: '#EB3B77'
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Exclusive Audience Segments',
    desc: 'Access premium third-party audience segments and leverage our proprietary data marketplace. Create custom segments based on demographics, interests, behaviors, and purchase intent signals across devices and platforms.',
    color: '#2D61E8'
  },
  {
    icon: <Gauge className="w-7 h-7" />,
    title: 'Performance Signals',
    desc: 'Dynamic optimization based on real-time performance metrics including viewability, engagement, and conversion data. Automatically adjust targeting parameters based on audience response and campaign goals.',
    color: '#56D1D1'
  },
  {
    icon: <Target className="w-7 h-7" />,
    title: 'Cross-Channel Precision',
    desc: 'Unified targeting across all channels including display, video, CTV, and DOOH. Reach your ideal audience with precision using advanced geo-targeting, contextual targeting, and look-alike modeling capabilities.',
    color: '#EF6C3D'
  }
]

export default function Targeting() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-[#FDF8FA]" id="targeting">
      <div className="max-w-8xl mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <div className="flex items-center justify-center">
              <span className="px-6 py-2 text-sm font-semibold bg-[#16232e] text-white rounded-full tracking-wide">
                Advanced Targeting
              </span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#16232e] tracking-tight leading-tight">
              Precision Targeting for{' '}
              <span className="bg-gradient-to-r from-[#EB3B77] to-[#6366F1] bg-clip-text text-transparent">
                Maximum ROI
              </span>
            </h2>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed">
              Advanced targeting capabilities powered by machine learning to reach your ideal audience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {bullets.map((item) => (
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