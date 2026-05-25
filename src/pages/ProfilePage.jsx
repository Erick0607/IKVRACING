import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

const ProfilePage = () => {
  const navigate = useNavigate();

  const offers = [
    {
      brand: 'AGV',
      name: 'Pista GP RR Carbon',
      price: 'S/ 1,299',
      discount: '-20% OFF',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5jXBSf5Q1D1Jlua_RJ94QCYUs-9UFiiXF5aRA5_uEiORw5IFqDxJOQ2aV3Nvvsh61uLLn_02xAp73orfIggHL8vAQccmtTWLWnkXWR0-MUkq6Wt_lcnonJ2svNoKny8iRiKIp7DE0dKZ5tt5H4WEA1nTAh_DTqNrQ-SU4VR7PooPw8P_vImWBJPXoVov-gq1XQcQN2xDa88rTjpT4El2cAWUboCfi330SVRaqD4a-Ugo-HKnSKEidmPQkOGqSDuFYppM7GMGGDA',
    },
    {
      brand: 'Michelin',
      name: 'Power 5 Rear',
      price: 'S/ 245',
      tag: 'NUEVO',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyXTMVRzJBDsBHsxo_6JH_XRtAzibfjQgWAvdjOdryDvaaO4jZV1mjWJik7rQwPq1HAJeX1ur4UVG0txKF5woySZTvs1slqvr9cQH0X_vocMrLr8x8Enf2NPgJ5PY7uiwa3SgZG1qGJnx8hYYmv65WJjcQUWICZtGxWnmFsSR4mqa-kwAi3wUaLbPToUMX55eGxr_Cfo3pykk9JPmp_G-sz8AmmisOcGv7o1JUNVcyLJKd0I80QCVXmcM_gVNzNdsaGH99ksL_KQ',
    },
  ];

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden pb-32 min-h-screen selection:bg-primary selection:text-white">
      {/* TopAppBar */}
      <Header>
        <div className="relative">
          <span className="material-symbols-outlined text-primary">notifications</span>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full shadow-glow-sm"></span>
        </div>
      </Header>

      <main className="mt-24 px-margin-mobile space-y-lg max-w-2xl mx-auto">
        {/* Welcome Section */}
        <section className="space-y-xs">
          <p className="font-label-technical text-[10px] text-primary uppercase tracking-[0.2em] font-black">BIENVENIDO DE NUEVO</p>
          <h2 className="font-display-lg text-headline-lg-mobile text-on-surface uppercase tracking-tight">HOLA, ALEX RIVERA</h2>
        </section>

        {/* Status Card (Maintenance) */}
        <section className="bg-surface-lvl1 rounded-lg border-l-4 border-primary p-gutter shadow-industrial-lift relative overflow-hidden group">
          <div className="flex justify-between items-start relative z-10">
            <div className="space-y-base">
              <div className="flex items-center gap-xs">
                <span className="material-symbols-outlined text-primary text-sm animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>build</span>
                <span className="font-label-technical text-[10px] uppercase text-on-surface-variant font-black tracking-widest">Estado del Vehículo</span>
              </div>
              <div>
                <h3 className="font-display-lg text-xl text-on-surface uppercase tracking-tight">Ducati Panigale V4</h3>
                <p className="font-label-technical text-[12px] text-primary font-black uppercase tracking-tighter">En mantenimiento - 60% completado</p>
              </div>
            </div>
            <div className="bg-surface-lvl2 p-base rounded-sm flex flex-col items-center border border-divider shadow-inner">
              <span className="font-label-technical text-[9px] text-on-surface-variant uppercase font-black">EST.</span>
              <span className="font-label-technical text-lg text-primary font-black">14:00</span>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="mt-lg h-2 bg-surface-lvl2 rounded-full overflow-hidden border border-divider">
            <div className="h-full bg-primary shadow-glow-sm transition-all duration-1000 ease-in-out" style={{ width: '60%' }}></div>
          </div>
          <div className="mt-md flex justify-between font-label-technical text-[9px] text-on-surface-variant uppercase font-black tracking-widest">
            <span className="text-primary">Diagnóstico</span>
            <span>Reparación</span>
            <span className="opacity-30">Prueba</span>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="grid grid-cols-2 gap-gutter">
          <button 
            onClick={() => navigate('/booking')}
            className="col-span-2 bg-primary text-white py-lg rounded-sm font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-base active:scale-95 transition-all shadow-glow"
          >
            <span className="material-symbols-outlined">calendar_month</span>
            Agendar Cita
          </button>
          <button 
            onClick={() => navigate('/store')}
            className="bg-surface-lvl1 border border-divider p-gutter rounded-sm flex flex-col items-center gap-base hover:bg-surface-lvl2 transition-all active:scale-95 shadow-sm group"
          >
            <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">menu_book</span>
            <span className="font-label-technical text-[10px] uppercase font-black tracking-widest">Catálogo</span>
          </button>
          <button 
            onClick={() => {
              const address = "IVK-RACING Lima Peru";
              const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
              window.open(url, '_blank');
            }}
            className="bg-surface-lvl1 border border-divider p-gutter rounded-sm flex flex-col items-center gap-base hover:bg-surface-lvl2 transition-all active:scale-95 shadow-sm group"
          >
            <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">location_on</span>
            <span className="font-label-technical text-[10px] uppercase font-black tracking-widest">Ubicación</span>
          </button>
        </section>

        {/* Offers Section */}
        <section className="space-y-gutter">
          <div className="flex justify-between items-center">
            <h3 className="font-display-lg text-lg uppercase font-black tracking-tight">Ofertas del Mes</h3>
            <span className="text-primary font-label-technical text-[10px] uppercase tracking-widest font-black cursor-pointer hover:underline">Ver todo</span>
          </div>
          {/* Horizontal Scroll Offers */}
          <div className="flex gap-gutter overflow-x-auto pb-gutter scrollbar-hide snap-x">
            {offers.map((offer, i) => (
              <div key={i} className="min-w-[260px] snap-start bg-surface-lvl1 rounded-lg overflow-hidden border border-divider shadow-sm group">
                <div className="h-44 bg-surface-lvl2 relative overflow-hidden">
                  <img src={offer.image} alt={offer.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                  {offer.discount && (
                    <div className="absolute top-base right-base bg-primary text-white px-base py-xs rounded-sm font-label-technical text-[9px] uppercase font-black shadow-md">
                      {offer.discount}
                    </div>
                  )}
                </div>
                <div className="p-gutter space-y-base">
                  <p className="font-label-technical text-[9px] text-on-surface-variant uppercase font-black tracking-[0.2em]">{offer.brand}</p>
                  <h4 className="font-display-lg text-sm font-bold uppercase tracking-tight leading-tight line-clamp-1 group-hover:text-primary transition-colors">{offer.name}</h4>
                  <p className="font-label-technical text-lg text-primary font-black tracking-tighter">{offer.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Grid (Bento Style) */}
        <section className="grid grid-cols-2 gap-gutter">
          <div className="bg-surface-lvl1 p-gutter rounded-lg space-y-base border border-divider shadow-sm">
            <span className="material-symbols-outlined text-primary">history</span>
            <div>
              <p className="text-[9px] uppercase font-label-technical text-on-surface-variant font-black tracking-widest">Último Servicio</p>
              <p className="font-label-technical text-sm font-bold text-on-surface uppercase">12 OCT 2023</p>
            </div>
          </div>
          <div className="bg-surface-lvl1 p-gutter rounded-lg space-y-base border border-divider shadow-sm">
            <span className="material-symbols-outlined text-primary">speed</span>
            <div>
              <p className="text-[9px] uppercase font-label-technical text-on-surface-variant font-black tracking-widest">Kilometraje</p>
              <p className="font-label-technical text-sm font-bold text-on-surface uppercase">14,200 KM</p>
            </div>
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <BottomNav />
    </div>
  );
};

export default ProfilePage;
