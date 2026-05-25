import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Inicio', icon: 'dashboard', path: '/dashboard' },
    { label: 'Citas', icon: 'calendar_month', path: '/booking' },
    { label: 'Tienda', icon: 'shopping_cart', path: '/store' },
    { label: 'Perfil', icon: 'person', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center py-base px-gutter bg-[#1E1E1E]/95 backdrop-blur-xl border-t border-[#37474F] shadow-lg z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center transition-all duration-300 relative group ${
              isActive 
                ? 'text-[#E53935]' 
                : 'text-[#B0BEC5] hover:text-[#E53935]'
            }`}
          >
            {isActive && (
              <span className="absolute -top-base w-8 h-1 bg-[#E53935] rounded-full shadow-glow-sm"></span>
            )}
            <span 
              className={`material-symbols-outlined transition-transform duration-300 ${isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(229,57,53,0.4)]' : 'group-hover:scale-110'}`}
              style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              {item.icon}
            </span>
            <span className="font-label-technical text-[10px] uppercase font-black tracking-widest mt-1">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
