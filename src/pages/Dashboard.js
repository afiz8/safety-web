import React from 'react';

const Dashboard = () => {
  const features = [
    {
      name: 'Jam Kerja Selamat',
      value: '2.3M jam',
      trend: '+18.2%',
      status: 'Active',
      icon: '🛡️',
      desc: 'Tracking jam kerja aman real-time',
      color: 'emerald'
    },
    {
      name: 'Medical Case',
      value: '15 cases',
      trend: '+2',
      status: 'Monitoring',
      icon: '🏥',
      desc: 'Laporan insiden kesehatan',
      color: 'blue'
    },
    {
      name: 'Pelatihan',
      value: '98%',
      trend: '+5%',
      status: 'Completed',
      icon: '📚',
      desc: 'Training keselamatan kerja',
      color: 'purple'
    },
    {
      name: 'Pemadam & Evakuasi',
      value: '95%',
      trend: 'Ready',
      status: 'Scheduled',
      icon: '🚒',
      desc: 'Simulasi darurat terakhir 2 hari lalu',
      color: 'red'
    },
    {
      name: 'Safe Work Practice',
      value: '127 SOP',
      trend: 'Updated',
      status: 'Active',
      icon: '📋',
      desc: 'SOP keselamatan kerja',
      color: 'orange'
    },
    {
      name: 'Refresh STK',
      value: 'Last 7 days',
      trend: '✅',
      status: 'Updated',
      icon: '🔄',
      desc: 'Update standar keselamatan kerja',
      color: 'yellow'
    },
    {
      name: 'Fleet Safety',
      value: '450 trips',
      trend: '0 incidents',
      status: 'Safe',
      icon: '🚛',
      desc: 'Keselamatan kendaraan operasional',
      color: 'gray'
    },
    {
      name: 'Observasi',
      value: '230 obs',
      trend: '+15',
      status: 'Ongoing',
      icon: '👁️',
      desc: 'Pengamatan bahaya lapangan',
      color: 'indigo'
    },
    {
      name: 'Emergency Readiness',
      value: '95%',
      trend: 'High',
      status: 'Ready',
      icon: '🚨',
      desc: 'Kesiapan tanggap darurat',
      color: 'rose'
    },
    {
      name: 'Meeting/Komunikasi',
      value: '42 sessions',
      trend: 'Weekly',
      status: 'Scheduled',
      icon: '💬',
      desc: 'Catatan briefing HSSE',
      color: 'cyan'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-blue-500/10 to-emerald-500/20"></div>
        <div className="relative z-10 p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="text-center lg:text-left mb-12">
            <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-gray-700 to-black bg-clip-text text-transparent leading-tight mb-6 drop-shadow-2xl">
              Job Safety Management System
            </h1>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              HSSE Dashboard - Complete Safety Management Platform
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-2xl hover:shadow-3xl border border-white/60 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 cursor-pointer overflow-hidden">
                {/* Icon Background */}
                <div className={`w-20 h-20 bg-gradient-to-br ${
                  feature.color === 'emerald' ? 'from-emerald-500 to-emerald-600' : 
                  feature.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  feature.color === 'purple' ? 'from-purple-500 to-purple-600' :
                  feature.color === 'red' ? 'from-red-500 to-orange-500' :
                  feature.color === 'orange' ? 'from-orange-500 to-yellow-500' :
                  feature.color === 'yellow' ? 'from-yellow-500 to-amber-500' :
                  feature.color === 'gray' ? 'from-gray-500 to-gray-600' :
                  feature.color === 'indigo' ? 'from-indigo-500 to-violet-500' :
                  feature.color === 'rose' ? 'from-rose-500 to-pink-500' : 'from-cyan-500 to-teal-500'
                } rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-all duration-300 mx-auto opacity-90 group-hover:opacity-100`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors leading-tight">
                    {feature.name}
                  </h3>
                  <p className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform">
                    {feature.value}
                  </p>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.desc}
                  </p>
                  <div className="flex gap-3 justify-center mb-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 rounded-xl font-semibold text-sm shadow-md">
                      {feature.status}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      feature.trend.startsWith('+') ? 'bg-emerald-100 text-emerald-800' :
                      feature.trend.includes('↓') ? 'bg-orange-100 text-orange-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {feature.trend}
                    </span>
                  </div>
                </div>

                {/* Bottom gradient bar */}
                <div className={`h-2 bg-gradient-to-r ${
                  feature.color === 'emerald' ? 'from-emerald-500 to-emerald-600' : 
                  feature.color === 'blue' ? 'from-blue-500 to-blue-600' : 'from-gray-400 to-gray-500'
                } rounded-full mx-4 opacity-60 group-hover:opacity-100 transition-opacity mt-6`}></div>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/70">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Safety Performance Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-5xl font-black text-emerald-600 mb-2">2.3M</p>
                  <p className="text-xl font-semibold text-gray-700">Jam Kerja Selamat</p>
                  <p className="text-emerald-600 font-bold text-lg">+18.2% MoM</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-red-600 mb-2">0.23</p>
                  <p className="text-xl font-semibold text-gray-700">LTISR Rate</p>
            
                </div>
                <div>
                  <p className="text-5xl font-black text-blue-600 mb-2">127</p>
                  <p className="text-xl font-semibold text-gray-700">Near Miss</p>
                  <p className="text-blue-600 font-bold text-lg">-3.1% WoW</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-3xl p-8 shadow-2xl flex flex-col items-center justify-center text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-2">Zero Harm Goal</h3>
              <p className="text-lg opacity-90 mb-6">Maintaining safety excellence</p>
              <button className="px-8 py-3 bg-white/20 backdrop-blur-sm rounded-2xl font-bold text-lg hover:bg-white/30 transition-all shadow-xl">
                Safety Champion
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

