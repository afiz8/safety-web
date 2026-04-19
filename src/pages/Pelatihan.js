import React from 'react';

const Pelatihan = () => {
  const trainings = [
    { name: 'Fire Safety & Evacuation', completion: '98%', attendees: '245', date: '2024-10-04', status: 'Completed' },
    { name: 'Heavy Equipment Operation', completion: '95%', attendees: '189', date: '2024-10-03', status: 'Completed' },
    { name: 'First Aid Training', completion: '100%', attendees: '156', date: '2024-10-02', status: 'Completed' },
    { name: 'Confined Space Entry', completion: '92%', attendees: '134', date: '2024-10-01', status: 'Completed' },
    { name: 'H2S Awareness', completion: '89%', attendees: '167', date: '2024-09-30', status: 'Completed' },
  ];

  const stats = [
    { label: 'Total Sessions', value: '245', trend: '+15' },
    { label: 'Avg Completion', value: '95%', trend: '+3%' },
    { label: 'Certified Workers', value: '1,234', trend: '+28' },
    { label: 'Upcoming', value: '5', trend: 'Next week' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto p-6 lg:p-8 space-y-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-purple-900 to-indigo-800 bg-clip-text text-transparent mb-2">
              Pelatihan Keselamatan
            </h1>
            <p className="text-xl text-gray-700">Manajemen training dan sertifikasi K3</p>
          </div>
          <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-200">
            <p className="text-2xl font-bold text-purple-800">95% Average Completion</p>
            <p className="text-purple-600 font-semibold">245 sessions total</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="group bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl border border-white/60 hover:border-purple-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-6">{stat.label}</h3>
              <p className="text-3xl font-black text-gray-900 mb-2">{stat.value}</p>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-bold">
                {stat.trend}
              </span>
            </div>
          ))}
        </div>

        {/* Recent Trainings Table */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Recent Training Sessions</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                <tr>
                  <th className="p-4 text-left font-semibold">Training</th>
                  <th className="p-4 text-left font-semibold">Completion</th>
                  <th className="p-4 text-right font-semibold">Attendees</th>
                  <th className="p-4 text-right font-semibold">Date</th>
                  <th className="p-4 text-right font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {trainings.map((training, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-purple-50">
                    <td className="p-4 font-semibold">{training.name}</td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                          <div className="bg-purple-500 h-2 rounded-full" style={{width: training.completion}}></div>
                        </div>
                        <span>{training.completion}</span>
                      </div>
                    </td>
                    <td className="p-4 text-right font-medium">{training.attendees}</td>
                    <td className="p-4">{training.date}</td>
                    <td className="p-4 text-right">
                      <span className="px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
                        {training.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6">Training Calendar</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border">
                <p className="text-sm text-gray-500">Oct 7</p>
                <p className="font-bold text-purple-600">Crane Safety</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border">
                <p className="text-sm text-gray-500">Oct 10</p>
                <p className="font-bold text-indigo-600">Permit to Work</p>
              </div>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-6">Certification Status</h3>
            <p className="text-3xl font-black text-purple-600 mb-4">1,234 certified</p>
            <p className="text-lg text-gray-600">87% workforce certified for current roles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pelatihan;

