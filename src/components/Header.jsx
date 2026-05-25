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
      <header className="bg-surface/80 backdrop-blur-md fixed top-0 left-0 z-50 flex justify-between items-center w-full px-margin-mobile h-16 border-b border-outline-variant shadow-lg shadow-black/20">
        <div className="flex items-center gap-base">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="material-symbols-outlined text-primary cursor-pointer active:scale-95 transition-all p-2 hover:bg-surface-variant rounded-full focus:outline-none drop-shadow-[0_0_8px_rgba(255,180,172,0.4)]"
          >
            menu
          </button>
          <div className="h-10 w-10 rounded-full overflow-hidden border border-primary/50 bg-surface-container-high shadow-glow-sm shadow-primary/20">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB-lojq2ypQRMEYjpm6roWNsKnv58FWAL8QbR4xomkokqb6qbUT8Uum31_M_lBNs8en-Q5b2GXwynfDgss9DjWqtKwZCJ-Zt8Y3vvgbY3oFSI-HnfjOMQSOnTw7B-drMjiHVhSE1VE2zFWSJLBztgDeJZKx3XzD03jt7CWnfdDe_YDluWXLAFpNnLOXISRYYRzY7WUnm1z3aG2ha-92-1ACWufL1rK54rY62wbwAJWpAjsGjw8-Uafv3OGGODKkopP98oRL_mvCA" 
              alt="IVK-RACING" 
              className="h-full w-full object-contain"
            />
          </div>
          <span className="font-bold text-primary text-xl ml-2 uppercase font-display tracking-tight drop-shadow-[0_0_10px_rgba(255,180,172,0.3)]">IVK-RACING</span>
        </div>
        
        <div className="flex items-center gap-md">
          {children}
          <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-high transition-colors p-base rounded-full focus:outline-none hover:text-primary">
            notifications
          </button>
        </div>
      </header>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-[60] backdrop-blur-md transition-opacity duration-500"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-gradient-dark border-r border-outline-variant z-[70] transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) shadow-2xl ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-gutter h-full flex flex-col relative overflow-hidden">
          {/* Background Glow Effect */}
          <div className="absolute top-0 left-0 w-full h-64 bg-primary-container/5 blur-[80px] pointer-events-none"></div>
          
          <div className="flex items-center justify-between mb-xl relative z-10">
            <div className="flex items-center gap-sm">
              <div className="h-8 w-8 rounded-full border border-primary/50 overflow-hidden shadow-glow-sm">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB-lojq2ypQRMEYjpm6roWNsKnv58FWAL8QbR4xomkokqb6qbUT8Uum31_M_lBNs8en-Q5b2GXwynfDgss9DjWqtKwZCJ-Zt8Y3vvgbY3oFSI-HnfjOMQSOnTw7B-drMjiHVhSE1VE2zFWSJLBztgDeJZKx3XzD03jt7CWnfdDe_YDluWXLAFpNnLOXISRYYRzY7WUnm1z3aG2ha-92-1ACWufL1rK54rY62wbwAJWpAjsGjw8-Uafv3OGGODKkopP98oRL_mvCA" 
                  alt="IVK Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-primary tracking-tighter uppercase">IVK-RACING</span>
            </div>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="material-symbols-outlined text-on-surface-variant hover:bg-surface-variant p-base rounded-full transition-colors hover:text-primary"
            >
              close
            </button>
          </div>

          <nav className="flex-grow space-y-md relative z-10">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className="w-full flex items-center gap-md p-md rounded-lg text-on-surface-variant hover:bg-surface-variant transition-all group active:scale-95 border border-transparent hover:border-outline-variant/30"
              >
                <span className="material-symbols-outlined group-hover:text-primary group-hover:scale-110 transition-all drop-shadow-[0_0_5px_rgba(255,180,172,0)] group-hover:drop-shadow-[0_0_5px_rgba(255,180,172,0.5)]">
                  {item.icon}
                </span>
                <span className="font-label-sm uppercase tracking-wider font-bold group-hover:text-primary transition-colors">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          <div className="mt-auto border-t border-outline-variant pt-lg pb-md relative z-10">
            <div className="flex items-center gap-md px-md mb-md">
              <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden border-2 border-primary/30 shadow-glow-sm">
                <img 
                  alt="User" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX1fYKsCUaKJ-32ri760ZVsOt4P4_Ov3eEuW8WnXd9dwD35ZuJ8HhcZm-AA7gNmWGodGR7oVzW9Zwj1cUILChpxBH0siRQxSoQkDsuIXQPetl6ZUHyx7GS9G9ys8wDYWX-5rLJIb-a0OAz72WLDXsd_mwAVnKgYfROtrje0nhgMMynEuPA4hGNCTYd2S2IsJyvPFvpr4TnezhNQQnmCjpM60bNxeKH9C5d7OOzpJ7p-v1G9tKd-StTWFdlequBsGHdj9eGlXARuA" 
                />
              </div>
              <div>
                <p className="font-label-sm text-on-surface font-bold uppercase tracking-tight">Admin IVK</p>
                <div className="flex items-center gap-xs">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <p className="text-[10px] text-primary uppercase font-bold">En línea</p>
                </div>
              </div>
            </div>
            <button className="w-full flex items-center gap-md p-md rounded-lg text-error hover:bg-error/10 hover:text-error transition-all group active:scale-95">
              <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">logout</span>
              <span className="font-label-sm uppercase tracking-wider font-bold">Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
