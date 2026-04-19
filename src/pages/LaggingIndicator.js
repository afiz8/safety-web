import React from 'react';

const LaggingIndicator = () => {
  const stats = [
    { title: 'Total Incidents', value: '45', trend: '+5%', color: 'bg-red-500', icon: '🚨' },
    { title: 'Near Miss', value: '127', trend: '-3%', color: 'bg-orange-500', icon: '⚠️' },
    { title: 'Accident Rate (LTISR)', value: '0.23', trend: '↓0.02', color: 'bg-yellow-500', icon: '📉' },
    { title: 'Jam Kerja Selamat', value: '2.3M', trend: '+18%', color: 'bg-emerald-500', icon: '🛡️' },
  ];

  const incidents = [
    { id: '#INC-001', type: 'Near Miss', date: '2024-01-15', location: 'Site A - Logistik', status: 'Closed' },
    { id: '#INC-002', type: 'Lost Time Injury', date: '2024-01-12', location: 'Site B - TKJP', status: 'Investigating' },
    { id: '#INC-003', type: 'Near Miss', date: '2024-01-10', location: 'Site A - Project', status: 'Closed' },
    { id: '#INC-004', type: 'Medical Treatment', date: '2024-01-08', location: 'Head Office', status: 'Closed' },
    { id: '#INC-005', type: 'Near Miss', date: '2024-01-05', location: 'Site B - Organik', status: 'Closed' },
    { id: '#INC-006', type: 'First Aid', date: '2024-01-03', location: 'Site A - Logistik', status: 'Closed' },
    { id: '#INC-007', type: 'Near Miss', date: '2023-12-30', location: 'Fleet Safety', status: 'Closed' },
    { id: '#INC-008', type: 'Lost Time Injury', date: '2023-12-28', location: 'Site B - Project', status: 'Closed' },
    { id: '#INC-009', type: 'Near Miss', date: '2023-12-25', location: 'Observasi Area', status: 'Closed' },
    { id: '#INC-010', type: 'Medical Treatment', date: '2023-12-22', location: 'Emergency Drill', status: 'Closed' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/10 to-yellow-500/20 opacity-75"></div>
        <div className="relative z-10 p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="text-center lg:text-left mb-12">
            <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-red-700 to-orange-600 bg-clip-text text-transparent leading-tight mb-6 drop-shadow-2xl">
              Lagging Indicators
            </h1>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              Track incidents, accident rates, and safety performance metrics in real-time
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl border border-white/60 hover:-translate-y-2 transition-all duration-500 hover:border-red-200 cursor-pointer">
                <div className="text-5xl mb-6 opacity-75 group-hover:opacity-100 transition-opacity flex justify-center">{stat.icon}</div>
                <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-3 group-hover:text-red-600 transition-colors leading-tight">{stat.value}</h3>
                <p className="text-xl font-semibold text-gray-700 mb-4">{stat.title}</p>
                <p className={`text-sm font-bold ${stat.trend.startsWith('+') || stat.trend.startsWith('↓') ? 'text-emerald-600' : 'text-orange-600'}`}>
                  {stat.trend}
                </p>
              </div>
            ))}
          </div>

          {/* Recent Incidents Table */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/70 overflow-hidden">
            <div className="p-8 border-b border-gray-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Recent Incidents</h3>
              <p className="text-gray-600">Last 30 days - 45 total incidents</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                    <th className="px-8 py-4 text-left text-lg font-bold text-gray-800">ID</th>
                    <th className="px-8 py-4 text-left text-lg font-bold text-gray-800">Type</th>
                    <th className="px-8 py-4 text-left text-lg font-bold text-gray-800">Date</th>
                    <th className="px-8 py-4 text-left text-lg font-bold text-gray-800">Location</th>
                    <th className="px-8 py-4 text-left text-lg font-bold text-gray-800">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {incidents.map((incident, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-4 font-mono text-sm font-bold text-gray-900">{incident.id}</td>
                      <td className="px-8 py-4">
                        <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
                          incident.type === 'Near Miss' ? 'bg-orange-100 text-orange-800' :
                          incident.type === 'First Aid' ? 'bg-emerald-100 text-emerald-800' :
                          incident.type === 'Medical Treatment' ? 'bg-blue-100 text-blue-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {incident.type}
                        </span>
                      </td>
                      <td className="px-8 py-4 text-gray-700 font-semibold">{incident.date}</td>
                      <td className="px-8 py-4 text-gray-700">{incident.location}</td>
                      <td className="px-8 py-4">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
                          {incident.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-8 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">Showing 10 of 45 incidents</p>
                <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  View Full Report
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LaggingIndicator;

