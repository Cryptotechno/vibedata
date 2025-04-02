import React from 'react'
import { BarChart3, Users2, TrendingUp, LineChart } from 'lucide-react'

const metrics = [
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: 'ROAS by Channel',
    desc: 'Track return on ad spend across all channels with granular breakdowns by campaign, creative, and audience segment. Monitor performance trends and identify optimization opportunities through interactive dashboards.',
    color: '#EB3B77'
  },
  {
    icon: <Users2 className="w-7 h-7" />,
    title: 'Audience Insights',
    desc: 'Deep-dive into audience behavior patterns, engagement metrics, and conversion paths. Understand demographic profiles, interests, and purchase intent signals to refine targeting strategies.',
    color: '#2D61E8'
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: 'Goal Pacing Analysis',
    desc: 'Real-time monitoring of campaign spend and performance against KPIs. Automated alerts and recommendations to optimize budget allocation and maintain efficient spending trajectories.',
    color: '#56D1D1'
  },
  {
    icon: <LineChart className="w-7 h-7" />,
    title: 'Predictive Analytics',
    desc: 'Leverage machine learning models to forecast campaign performance and identify future trends. Make data-driven decisions with predictive insights and automated optimization suggestions.',
    color: '#EF6C3D'
  }
]

export default function Analytics() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-[#FDF8FA]" id="analytics">
      <div className="max-w-8xl mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <div className="flex items-center justify-center">
              <span className="px-6 py-2 text-sm font-semibold bg-[#16232e] text-white rounded-full tracking-wide">
                Real-Time Analytics
              </span>
            </div>
            <h2 className="text-5xl font-extrabold text-[#16232e] tracking-tight leading-tight">
              Transparent Analytics,{' '}
              <span className="bg-gradient-to-r from-[#EB3B77] to-[#6366F1] bg-clip-text text-transparent">
                Actionable Insights
              </span>
            </h2>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed">
              Comprehensive analytics platform providing real-time visibility and actionable insights across all your media investments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {metrics.map((metric) => (
              <div 
                key={metric.title}
                style={{
                  boxShadow: `0 8px 24px ${metric.color}10, 0 4px 8px ${metric.color}05`
                }}
                className="group px-10 py-8 bg-white rounded-[40px] border-0 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-8">
                  <div 
                    style={{
                      backgroundColor: `${metric.color}15`,
                      boxShadow: `0 12px 32px ${metric.color}20, 0 2px 24px ${metric.color}30, inset 0 2px 12px ${metric.color}10`
                    }}
                    className="w-20 h-20 rounded-3xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  >
                    <div 
                      style={{ 
                        color: metric.color,
                        filter: `drop-shadow(0 2px 4px ${metric.color}30)`
                      }}
                      className="transform transition-transform duration-300 group-hover:scale-110"
                    >
                      {metric.icon}
                    </div>
                  </div>
                  <div className="flex flex-col items-start text-left py-2">
                    <h3 
                      style={{ 
                        color: metric.color,
                        textShadow: `0 2px 8px ${metric.color}20`
                      }}
                      className="text-2xl font-bold mb-3 leading-tight"
                    >
                      {metric.title}
                    </h3>
                    <p className="text-[#64748B] text-base leading-relaxed">
                      {metric.desc}
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