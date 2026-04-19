import React from 'react';

const JamKerjaSelamat = () => {
  const stats = [
    { label: 'Total JKS', value: '2,345,678 jam', trend: '+18.2%', color: 'emerald' },
    { label: 'This Month', value: '187,234 jam', trend: '+12%', color: 'blue' },
    { label: 'Avg Daily', value: '6,234 jam', trend: 'Target 6K', color: 'purple' },
    { label: 'Sites', value: '8 sites', trend: 'All safe', color: 'orange' }
  ];

  const recentLogs = [
    { site: 'Site A', date: '2024-10-05', hours: '8,234', status: 'Safe' },
    { site: 'Site B', date: '2024-10-05', hours: '7,891', status: 'Safe' },
    { site: 'Site C', date: '2024-10-05', hours: '9,123', status: 'Safe' },
    { site: 'Site D', date: '2024-10-04', hours: '6,789', status: 'Safe' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50">
      <div className="max-w-7xl mx-auto p-6 lg:p-8 space-y-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-emerald-900 to-green-800 bg-clip-text text-transparent mb-2">
              Jam Kerja Selamat
            </h1>
            <p className="text-xl text-gray-700">Tracking real-time jam kerja aman semua site</p>
          </div>
          <div className="bg-emerald-500/10 rounded-2xl p-6 border border-emerald-200">
            <p className="text-2xl font-bold text-emerald-800">2,345,678 jam total</p>
            <p className="text-emerald-600 font-semibold">+18.2% MoM</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="group bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl border border-white/60 hover:border-emerald-200 transition-all">
              <h3 className="text-lg font-semibold text-gray-700 mb-6">{stat.label}</h3>
              <p className="text-3xl font-black text-gray-900 mb-2">{stat.value}</p>
              <span className={`px-3 py-1 rounded-full text-sm font-bold bg-${stat.color}-100 text-${stat.color}-800`}>
                {stat.trend}
              </span>
            </div>
          ))}
        </div>

        {/* Chart Placeholder */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/70">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">JKS Trend 30 Days</h3>
          <div className="h-96 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-emerald-300">
            <div className="text-center">
              <div className="text-6xl mb-6">📈</div>
              <p className="text-2xl font-bold text-emerald-600 mb-2">Growing Strong</p>
              <p className="text-lg text-gray-600">Interactive chart shows steady increase</p>
            </div>
          </div>
        </div>

        {/* Recent Logs Table */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/70 overflow-hidden">
          <div className="p-8 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Recent Daily Logs</h3>
            <p className="text-gray-600">Today's total: 31,247 jam aman</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
                <tr>
                  <th className="p-4 text-left font-semibold">Site</th>
                  <th className="p-4 text-left font-semibold">Date</th>
                  <th className="p-4 text-right font-semibold">Jam</th>
                  <th className="p-4 text-right font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentLogs.map((log, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-emerald-50 transition-colors">
                    <td className="p-4 font-semibold">{log.site}</td>
                    <td className="p-4">{log.date}</td>
                    <td className="p-4 text-right font-bold text-emerald-700">{log.hours}</td>
                    <td className="p-4 text-right">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600">Jam Kerja Selamat tercatat secara otomatis dari semua sistem attendance & timesheet</p>
        </div>
      </div>
    </div>
  );
};

export default JamKerjaSelamat;

