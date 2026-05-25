import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ children }) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { label: 'Inicio', icon: 'dashboard', path: '/dashboard' },
    { label: 'Agendar Cita', icon: 'calendar_month', path: '/booking' },
    { label: 'Tienda', icon: 'shopping_cart', path: '/store' },
    { label: 'Mi Perfil', icon: 'person', path: '/profile' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header className="bg-surface fixed top-0 left-0 z-50 flex justify-between items-center w-full px-margin-mobile h-16 border-b border-outline-variant">
        <div className="flex items-center gap-base">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="material-symbols-outlined text-primary cursor-pointer active:scale-95 transition-all p-2 hover:bg-surface-variant rounded-full focus:outline-none"
          >
            menu
          </button>
          <div className="h-10 w-10 rounded-full overflow-hidden border border-primary bg-surface-container-high">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB-lojq2ypQRMEYjpm6roWNsKnv58FWAL8QbR4xomkokqb6qbUT8Uum31_M_lBNs8en-Q5b2GXwynfDgss9DjWqtKwZCJ-Zt8Y3vvgbY3oFSI-HnfjOMQSOnTw7B-drMjiHVhSE1VE2zFWSJLBztgDeJZKx3XzD03jt7CWnfdDe_YDluWXLAFpNnLOXISRYYRzY7WUnm1z3aG2ha-92-1ACWufL1rK54rY62wbwAJWpAjsGjw8-Uafv3OGGODKkopP98oRL_mvCA" 
              alt="IVK-RACING" 
              className="h-full w-full object-contain"
            />
          </div>
          <span className="font-bold text-primary text-xl ml-2 uppercase font-display">IVK-RACING</span>
        </div>
        
        <div className="flex items-center gap-md">
          {children}
          <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-high transition-colors p-base rounded-full focus:outline-none">
            notifications
          </button>
        </div>
      </header>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-surface-container border-r border-outline-variant z-[70] transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-gutter h-full flex flex-col">
          <div className="flex items-center justify-between mb-xl">
            <div className="flex items-center gap-sm">
              <div className="h-8 w-8 rounded-full border border-primary overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB-lojq2ypQRMEYjpm6roWNsKnv58FWAL8QbR4xomkokqb6qbUT8Uum31_M_lBNs8en-Q5b2GXwynfDgss9DjWqtKwZCJ-Zt8Y3vvgbY3oFSI-HnfjOMQSOnTw7B-drMjiHVhSE1VE2zFWSJLBztgDeJZKx3XzD03jt7CWnfdDe_YDluWXLAFpNnLOXISRYYRzY7WUnm1z3aG2ha-92-1ACWufL1rK54rY62wbwAJWpAjsGjw8-Uafv3OGGODKkopP98oRL_mvCA" 
                  alt="IVK Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-primary tracking-tighter">IVK-RACING</span>
            </div>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="material-symbols-outlined text-on-surface-variant hover:bg-surface-variant p-base rounded-full transition-colors"
            >
              close
            </button>
          </div>

          <nav className="flex-grow space-y-sm">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className="w-full flex items-center gap-md p-md rounded-lg text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container transition-all group active:scale-95"
              >
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="font-label-sm uppercase tracking-wider">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          <div className="mt-auto border-t border-outline-variant pt-lg pb-md">
            <div className="flex items-center gap-md px-md mb-md">
              <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant">
                <img 
                  alt="User" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX1fYKsCUaKJ-32ri760ZVsOt4P4_Ov3eEuW8WnXd9dwD35ZuJ8HhcZm-AA7gNmWGodGR7oVzW9Zwj1cUILChpxBH0siRQxSoQkDsuIXQPetl6ZUHyx7GS9G9ys8wDYWX-5rLJIb-a0OAz72WLDXsd_mwAVnKgYfROtrje0nhgMMynEuPA4hGNCTYd2S2IsJyvPFvpr4TnezhNQQnmCjpM60bNxeKH9C5d7OOzpJ7p-v1G9tKd-StTWFdlequBsGHdj9eGlXARuA" 
                />
              </div>
              <div>
                <p className="font-label-sm text-on-surface font-bold">Admin IVK</p>
                <p className="text-[10px] text-primary uppercase">Administrador</p>
              </div>
            </div>
            <button className="w-full flex items-center gap-md p-md rounded-lg text-error hover:bg-error-container hover:text-on-error-container transition-all">
              <span className="material-symbols-outlined">logout</span>
              <span className="font-label-sm uppercase tracking-wider">Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
