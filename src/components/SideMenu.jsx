// components/SideMenu.jsx
import React from 'react';
import { X, ChevronRight, Download, MapPin, Calendar } from 'lucide-react';

const SideMenu = ({ isOpen, onClose }) => {
  const menuItems = [
    { 
      label: 'TEAMS', 
      href: '/teams',
      icon: null,
      // TODO: Backend integration - GET /api/tournaments/{id}/teams
    },
    { 
      label: 'SCHEDULE', 
      href: '/schedule',
      icon: <Calendar size={20} />,
      downloadable: true,
      // TODO: Backend integration - GET /api/tournaments/{id}/schedule/download
    },
    { 
      label: 'VENUES', 
      href: '/venues',
      icon: <MapPin size={20} />,
      // TODO: Backend integration - GET /api/venues
    },
  ];

  const handleDownload = async (item) => {
    if (item.label === 'SCHEDULE') {
      // TODO: Backend integration
      // const response = await fetch('/api/schedule/download');
      // const blob = await response.blob();
      // const url = window.URL.createObjectURL(blob);
      // const a = document.createElement('a');
      // a.href = url;
      // a.download = 'tournament-schedule.pdf';
      // a.click();
      
      alert('Download schedule - Backend integration needed');
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-[#0a0e2e] z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Close Button */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <span className="text-white font-bold text-lg">MENU</span>
          <button 
            onClick={onClose}
            className="text-white hover:opacity-80"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Items */}
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
                <a
                  href={item.href}
                  className="flex items-center justify-between px-6 py-4 text-white font-semibold text-lg hover:bg-white/5 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    {item.icon}
                    {item.label}
                  </span>
                  <ChevronRight size={20} className="text-gray-500" />
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Additional Links */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
          <div className="flex flex-col gap-3 text-sm text-gray-400">
            <a href="/about" className="hover:text-white transition-colors">About Us</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;