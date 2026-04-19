import React from 'react';

const Placeholder = ({ title }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-8">
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 text-center max-w-2xl mx-auto border border-white/50">
      <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
        <span className="text-3xl">🚧</span>
      </div>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
        Coming Soon
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        {title}
      </h2>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        Fitur ini sedang dikembangkan untuk memberikan pengalaman terbaik dalam manajemen HSSE.
      </p>
      <div className="space-y-3">
        <p className="text-sm text-gray-500">Stay tuned for updates!</p>
        <div className="flex gap-3 justify-center pt-6 border-t border-gray-200">
          <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
            Refresh
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Placeholder;

