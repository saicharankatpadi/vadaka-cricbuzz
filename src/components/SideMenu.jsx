import React from 'react';
import { X, ChevronRight, Download, MapPin, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SideMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const menuItems = [
    { 
      label: 'TEAMS', 
      path: '/teams',
    },
    { 
      label: 'SCHEDULE', 
      path: '/schedule',
      icon: <Calendar size={20} />,
      downloadable: true,
    },
    { 
      label: 'VENUES', 
      path: '/venues', // Changed to lowercase for consistency
      icon: <MapPin size={20} />,
    },
  ];

  const handleDownload = async (item) => {
    if (item.label === 'SCHEDULE') {
      alert('Download schedule - Backend integration needed');
    }
  };

  const handleNavigation = (path) => {
    console.log('Navigating to:', path); // Debug log
    navigate(path);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      <div className={`fixed top-0 right-0 h-full w-80 bg-[#0a0e2e] z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <span className="text-white font-bold text-lg">MENU</span>
          <button 
            onClick={onClose}
            className="text-white hover:opacity-80"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col py-4">
          {menuItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.downloadable ? (
                <button
                  onClick={() => handleDownload(item)}
                  className="w-full flex items-center justify-between px-6 py-4 text-white font-semibold text-lg hover:bg-white/5 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    {item.icon}
                    {item.label}
                  </span>
                  <Download size={20} className="text-blue-400" />
                </button>
              ) : (
                <button
                  onClick={() => handleNavigation(item.path)}
                  className="w-full flex items-center justify-between px-6 py-4 text-white font-semibold text-lg hover:bg-white/5 transition-colors text-left"
                >
                  <span className="flex items-center gap-3">
                    {item.icon}
                    {item.label}
                  </span>
                  <ChevronRight size={20} className="text-gray-500" />
                </button>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default SideMenu;