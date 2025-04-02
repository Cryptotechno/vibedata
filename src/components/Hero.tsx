import React from 'react'
import { ArrowRight, MessageSquare, Play, BarChart3, Users, DollarSign, TrendingUp, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center py-12 md:py-20 overflow-hidden bg-[#FAFBFF]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8FAFF] to-[#FDF8FA]"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-[0.02]"></div>
      
      {/* Gradient Orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-b from-[#EB3B77]/5 to-[#EF6C3D]/5 blur-xl -z-10 animate-pulse [animation-duration:4s]"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Content */}
          <div className="order-1 text-left">
            <div className="space-y-8 md:space-y-10">            
              {/* Main Content */}
              <div className="space-y-5 fade-in-up [--delay:200ms]">
                <div className="space-y-3">
                  <h1 className="text-[2.5rem] md:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#16232e] to-[#16232e]/80">
                    <span className="block">Full-Service</span>
                    <span className="block">Programmatic Platform</span>
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-medium leading-snug text-[#16232e]/80">
                    Programmatic media buying with<br className="hidden md:block" />
                    expert trading team
                  </h2>
                </div>
                <p className="text-base md:text-lg text-[#64748B] max-w-xl leading-relaxed">
                  Access premium inventory across display, video, and CTV. Our expert traders optimize your campaigns using advanced bidding algorithms and first-party data strategies.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-start gap-3 fade-in-up [--delay:400ms]">
                <button className="group bg-gradient-to-r from-[#EB3B77] to-[#EF6C3D] text-white px-8 py-4 rounded-[20px] text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-[#EB3B77]/10 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center w-full sm:w-[280px] justify-center">
                  Talk to Trading Expert
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="group bg-white text-[#16232e] px-8 py-4 rounded-[20px] text-lg font-semibold border border-[#E5E7EB] hover:border-[#EB3B77] hover:text-[#EB3B77] shadow-sm hover:shadow-md hover:shadow-[#EB3B77]/5 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center w-full sm:w-[280px] justify-center">
                  View Case Studies
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative order-2 fade-in-up [--delay:600ms]">
            <div className="relative w-[112%] aspect-[4/5] bg-white rounded-[20px] shadow-xl overflow-y-auto border border-black/5 hover:shadow-2xl hover:shadow-[#EB3B77]/5 transition-shadow duration-300">
              {/* Dashboard Header */}
              <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-100 p-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#EB3B77] bg-opacity-10 rounded-lg flex items-center justify-center group-hover:bg-opacity-20 transition-colors">
                      <BarChart3 className="w-4 h-4 text-[#EB3B77]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#16232e]">Campaign Analytics Hub</h3>
                      <p className="text-[#64748B] text-xs">Programmatic Performance Metrics</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-1.5 text-[#64748B] hover:text-[#16232e] hover:bg-gray-50 rounded-md transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                    </button>
                    <button className="p-1.5 text-[#64748B] hover:text-[#16232e] hover:bg-gray-50 rounded-md transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </button>
                    <button className="p-1.5 text-[#64748B] hover:text-[#16232e] hover:bg-gray-50 rounded-md transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="sticky top-[48px] z-10 bg-white/95 backdrop-blur-sm border-b border-gray-100 grid grid-cols-4 gap-2 p-2.5">
                <div className="bg-white rounded-lg border border-gray-100 p-3 hover:border-[#EB3B77]/20 hover:shadow-sm transition-all duration-200">
                  <div className="space-y-1">
                    <p className="text-[#64748B] text-sm">Total Reach</p>
                    <div className="flex items-center gap-2">
                      <p className="text-2xl font-bold text-[#16232e]">2.4M</p>
                      <span className="text-[#EB3B77] text-sm font-medium">↑ 12.5%</span>
                    </div>
                  </div>
                  <div className="mt-3 h-[32px] flex items-end space-x-1">
                    <div className="w-[10%] h-[40%] bg-[#EB3B77]/10 rounded"></div>
                    <div className="w-[10%] h-[60%] bg-[#EB3B77]/10 rounded"></div>
                    <div className="w-[10%] h-[45%] bg-[#EB3B77]/10 rounded"></div>
                    <div className="w-[10%] h-[80%] bg-[#EB3B77]/10 rounded"></div>
                    <div className="w-[10%] h-[60%] bg-[#EB3B77]/20 rounded"></div>
                    <div className="w-[10%] h-[90%] bg-[#EB3B77]/20 rounded"></div>
                    <div className="w-[10%] h-[70%] bg-[#EB3B77]/30 rounded"></div>
                    <div className="w-[10%] h-[100%] bg-[#EB3B77] rounded"></div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-100 p-3 hover:border-[#2D61E8]/20 hover:shadow-sm transition-all duration-200">
                  <div className="space-y-1">
                    <p className="text-[#64748B] text-sm">Conversions</p>
                    <div className="flex items-center gap-2">
                      <p className="text-2xl font-bold text-[#16232e]">12.8K</p>
                      <span className="text-[#2D61E8] text-sm font-medium">↑ 8.2%</span>
                    </div>
                  </div>
                  <div className="mt-3 h-[32px] flex items-end space-x-1">
                    <div className="w-[10%] h-[50%] bg-[#2D61E8]/10 rounded"></div>
                    <div className="w-[10%] h-[70%] bg-[#2D61E8]/10 rounded"></div>
                    <div className="w-[10%] h-[55%] bg-[#2D61E8]/10 rounded"></div>
                    <div className="w-[10%] h-[85%] bg-[#2D61E8]/10 rounded"></div>
                    <div className="w-[10%] h-[65%] bg-[#2D61E8]/20 rounded"></div>
                    <div className="w-[10%] h-[95%] bg-[#2D61E8]/20 rounded"></div>
                    <div className="w-[10%] h-[80%] bg-[#2D61E8]/30 rounded"></div>
                    <div className="w-[10%] h-[100%] bg-[#2D61E8] rounded"></div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-100 p-3 hover:border-[#56D1D1]/20 hover:shadow-sm transition-all duration-200">
                  <div className="space-y-1">
                    <p className="text-[#64748B] text-sm">Avg. CPC</p>
                    <div className="flex items-center gap-2">
                      <p className="text-2xl font-bold text-[#16232e]">$1.24</p>
                      <span className="text-[#56D1D1] text-sm font-medium">↑ 4.2%</span>
                    </div>
                  </div>
                  <div className="mt-3 h-[32px] flex items-end space-x-1">
                    <div className="w-[10%] h-[60%] bg-[#56D1D1]/10 rounded"></div>
                    <div className="w-[10%] h-[75%] bg-[#56D1D1]/10 rounded"></div>
                    <div className="w-[10%] h-[50%] bg-[#56D1D1]/10 rounded"></div>
                    <div className="w-[10%] h-[90%] bg-[#56D1D1]/10 rounded"></div>
                    <div className="w-[10%] h-[70%] bg-[#56D1D1]/20 rounded"></div>
                    <div className="w-[10%] h-[85%] bg-[#56D1D1]/20 rounded"></div>
                    <div className="w-[10%] h-[95%] bg-[#56D1D1]/30 rounded"></div>
                    <div className="w-[10%] h-[100%] bg-[#56D1D1] rounded"></div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-100 p-3 hover:border-[#EF6C3D]/20 hover:shadow-sm transition-all duration-200">
                  <div className="space-y-1">
                    <p className="text-[#64748B] text-sm">ROI</p>
                    <div className="flex items-center gap-2">
                      <p className="text-2xl font-bold text-[#16232e]">285%</p>
                      <span className="text-[#EF6C3D] text-sm font-medium">↑ 15.3%</span>
                    </div>
                  </div>
                  <div className="mt-3 h-[32px] flex items-end space-x-1">
                    <div className="w-[10%] h-[40%] bg-[#EF6C3D]/10 rounded"></div>
                    <div className="w-[10%] h-[55%] bg-[#EF6C3D]/10 rounded"></div>
                    <div className="w-[10%] h-[70%] bg-[#EF6C3D]/10 rounded"></div>
                    <div className="w-[10%] h-[85%] bg-[#EF6C3D]/10 rounded"></div>
                    <div className="w-[10%] h-[75%] bg-[#EF6C3D]/20 rounded"></div>
                    <div className="w-[10%] h-[90%] bg-[#EF6C3D]/20 rounded"></div>
                    <div className="w-[10%] h-[95%] bg-[#EF6C3D]/30 rounded"></div>
                    <div className="w-[10%] h-[100%] bg-[#EF6C3D] rounded"></div>
                  </div>
                </div>
              </div>

              {/* Channel Performance */}
              <div className="p-2.5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#EB3B77] bg-opacity-10 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-[#EB3B77]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#16232e]">Channel Performance</h3>
                  </div>
                  <span className="px-3 py-1 bg-[#F8FAFF] text-[#EB3B77] text-sm font-medium rounded-full border border-[#EB3B77]/10">AI-Optimized</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#F8FAFF] transition-colors group">
                    <div className="w-8 h-8 bg-[#2D61E8]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#2D61E8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M9 12h6m-3-3v6" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <p className="text-[#16232e] font-medium">Display RTB</p>
                          <p className="text-[#64748B] text-sm">Open Exchange</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[#16232e] font-medium">$18.4k</p>
                          <p className="text-[#2D61E8] text-sm">+12.8%</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#F8FAFF] transition-colors group">
                    <div className="w-8 h-8 bg-[#2D61E8]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#2D61E8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
                        <path d="M17 2l-5 5-5-5" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <p className="text-[#16232e] font-medium">Display PMP</p>
                          <p className="text-[#64748B] text-sm">Private Marketplace</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[#16232e] font-medium">$24.6k</p>
                          <p className="text-[#2D61E8] text-sm">+16.5%</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#F8FAFF] transition-colors group">
                    <div className="w-8 h-8 bg-[#EB3B77]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#EB3B77]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                        <circle cx="12" cy="12" r="9" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <p className="text-[#16232e] font-medium">Video RTB</p>
                          <p className="text-[#64748B] text-sm">Open Exchange</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[#16232e] font-medium">$15.6k</p>
                          <p className="text-[#EB3B77] text-sm">+15.5%</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#F8FAFF] transition-colors group">
                    <div className="w-8 h-8 bg-[#EB3B77]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#EB3B77]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M10 9l5 3-5 3V9z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <p className="text-[#16232e] font-medium">Video PMP</p>
                          <p className="text-[#64748B] text-sm">Private Marketplace</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[#16232e] font-medium">$28.2k</p>
                          <p className="text-[#EB3B77] text-sm">+19.8%</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#F8FAFF] transition-colors group">
                    <div className="w-8 h-8 bg-[#56D1D1]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#56D1D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="7" width="20" height="15" rx="2" />
                        <path d="M17 2l-5 5-5-5" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <p className="text-[#16232e] font-medium">CTV Direct</p>
                          <p className="text-[#64748B] text-sm">Premium Publishers</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[#16232e] font-medium">$32.8k</p>
                          <p className="text-[#56D1D1] text-sm">+22.3%</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#F8FAFF] transition-colors group">
                    <div className="w-8 h-8 bg-[#56D1D1]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#56D1D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 7v10c0 1.1.9 2 2 2h12a2 2 0 002-2V7c0-1.1-.9-2-2-2H6a2 2 0 00-2 2z" />
                        <path d="M10 10l4 2-4 2v-4z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <p className="text-[#16232e] font-medium">CTV PMP</p>
                          <p className="text-[#64748B] text-sm">Private Marketplace</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[#16232e] font-medium">$45.2k</p>
                          <p className="text-[#56D1D1] text-sm">+25.8%</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#F8FAFF] transition-colors group">
                    <div className="w-8 h-8 bg-[#EF6C3D]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#EF6C3D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <p className="text-[#16232e] font-medium">DOOH Premium</p>
                          <p className="text-[#64748B] text-sm">High-Traffic Locations</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[#16232e] font-medium">$19.8k</p>
                          <p className="text-[#EF6C3D] text-sm">+14.2%</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#F8FAFF] transition-colors group">
                    <div className="w-8 h-8 bg-[#EF6C3D]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#EF6C3D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18M9 21V9" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <p className="text-[#16232e] font-medium">DOOH RTB</p>
                          <p className="text-[#64748B] text-sm">Programmatic Boards</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[#16232e] font-medium">$12.4k</p>
                          <p className="text-[#EF6C3D] text-sm">+11.5%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance Summary */}
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-[#2D61E8] bg-opacity-10 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-[#2D61E8]" />
                      </div>
                      <h3 className="text-base font-semibold text-[#16232e]">Performance Summary</h3>
                    </div>
                    <span className="text-[#64748B] text-xs">Last 30 Days</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#F8FAFF] p-2.5 rounded-lg hover:bg-[#F8FAFF]/80 transition-colors">
                      <div className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-[#2D61E8] mt-0.5" />
                        <div>
                          <p className="font-medium text-[#16232e] mb-1">Top Performing</p>
                          <p className="text-[#64748B] text-sm">CTV PMP shows highest ROI at 25.8% growth with premium inventory performance.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#F8FAFF] p-2.5 rounded-lg hover:bg-[#F8FAFF]/80 transition-colors">
                      <div className="flex items-start gap-2">
                        <BarChart3 className="w-4 h-4 text-[#EB3B77] mt-0.5" />
                        <div>
                          <p className="font-medium text-[#16232e] mb-1">Growth Opportunity</p>
                          <p className="text-[#64748B] text-sm">Video PMP shows 19.8% increase in engagement across premium publishers.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Shadow and Glow Effects */}
            <div className="absolute -inset-3 bg-gradient-to-r from-[#EB3B77]/5 to-[#EF6C3D]/5 rounded-2xl blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}