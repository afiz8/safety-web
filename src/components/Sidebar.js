import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { name: 'Dashboard HSSE', path: '/dashboard', icon: '📊' },
  { name: 'Lagging Indicator', path: '/lagging-indicator', icon: '📉' },
  { name: 'Jam Kerja Selamat', path: '/jam-kerja-selamat', icon: '⏰' },
  { name: 'Medical Case', path: '/medical-case', icon: '🏥' },
  { name: 'Pelatihan', path: '/pelatihan', icon: '📚' },
  { name: 'Pemadam/Evakuasi', path: '/pemadam-evakuasi', icon: '🚒' },
  { name: 'Safe Work Practice', path: '/safe-work-practice', icon: '🛡️' },
  { name: 'Refresh STK', path: '/refresh-stk', icon: '🔄' },
  { name: 'Fleet Safety', path: '/fleet-safety', icon: '🚛' },
  { name: 'Observasi', path: '/observasi', icon: '👁️' },
  { name: 'Emergency Readiness', path: '/emergency-readiness', icon: '🚨' },
  { name: 'Meeting/Komunikasi', path: '/meeting-komunikasi', icon: '💬' },
  { name: 'Logout', path: '/login', icon: '🚪' },
];

const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen transition-all duration-300 fixed left-0 top-0 z-40 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="p-6 border-b border-gray-700">
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-white hover:text-gray-300 p-2 rounded-lg hover:bg-gray-700 transition-colors">
          {isCollapsed ? '→' : '←'}
        </button>
        {!isCollapsed && (
          <div className="mt-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              HSSE Dashboard
            </h1>
            <p className="text-gray-400 text-sm mt-1">Safety Management System</p>
          </div>
        )}
      </div>
      <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-140px)]">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center p-4 rounded-xl transition-all duration-200 hover:bg-gray-700 hover:shadow-lg hover:translate-x-1 group w-full ${
              location.pathname === item.path
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg border-r-4 border-orange-400'
                : 'hover:bg-white/10'
            }`}
          >
            <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">{item.icon}</span>
            {!isCollapsed && <span className="font-semibold">{item.name}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

