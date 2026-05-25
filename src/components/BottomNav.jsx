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
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center py-base px-gutter bg-surface-container border-t border-outline-variant shadow-lg z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center transition-all duration-200 ${
              isActive 
                ? 'text-primary-container font-bold translate-y-[-2px]' 
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            <span 
              className="material-symbols-outlined"
              style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              {item.icon}
            </span>
            <span className="font-label-sm text-label-sm mt-xs">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
