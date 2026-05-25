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
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden pb-32 min-h-screen">
      {/* TopAppBar */}
      <Header>
        <div className="relative">
          <span className="material-symbols-outlined text-primary">notifications</span>
          <span className="absolute top-0 right-0 w-2 h-2 bg-primary-container rounded-full"></span>
        </div>
      </Header>

      <main className="mt-20 px-margin-mobile space-y-lg">
        {/* Welcome Section */}
        <section className="space-y-xs">
          <p className="font-label-technical text-label-technical text-primary uppercase tracking-widest">Bienvenido de nuevo</p>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile">Hola, Alex Rivera</h2>
        </section>

        {/* Status Card (Maintenance) */}
        <section className="bg-surface-container rounded-xl border-l-4 border-primary-container p-gutter shadow-lg relative overflow-hidden">
          <div className="flex justify-between items-start relative z-10">
            <div className="space-y-base">
              <div className="flex items-center gap-xs">
                <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>build</span>
                <span className="font-label-technical text-label-technical uppercase text-on-surface-variant">Estado del Vehículo</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md-mobile text-on-surface">Ducati Panigale V4</h3>
                <p className="font-body-md text-primary">En mantenimiento - 60% completado</p>
              </div>
            </div>
            <div className="bg-surface-variant p-base rounded-lg flex flex-col items-center">
              <span className="font-label-technical text-label-technical text-on-surface">EST.</span>
              <span className="font-headline-md text-primary-container">14:00</span>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="mt-lg h-2 bg-surface-variant rounded-full overflow-hidden">
            <div className="h-full bg-primary-container shadow-[0_0_10px_#ff544c] transition-all duration-1000 ease-in-out" style={{ width: '60%' }}></div>
          </div>
          <div className="mt-md flex justify-between text-label-sm font-label-sm text-on-surface-variant italic">
            <span>Diagnóstico</span>
            <span>Reparación</span>
            <span className="text-on-surface">Prueba</span>
          </div>
          {/* Background subtle pattern */}
          <div className="absolute top-0 right-0 opacity-5 -translate-y-1/4 translate-x-1/4">
            <span className="material-symbols-outlined text-[120px]">settings_suggest</span>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="grid grid-cols-2 gap-gutter">
          <button 
            onClick={() => navigate('/booking')}
            className="col-span-2 bg-primary-container text-on-primary-container py-lg rounded-lg font-headline-md flex items-center justify-center gap-base active:scale-95 transition-transform shadow-lg"
          >
            <span className="material-symbols-outlined">calendar_month</span>
            Agendar Cita
          </button>
          <button 
            onClick={() => navigate('/store')}
            className="bg-surface-container border border-outline-variant p-gutter rounded-lg flex flex-col items-center gap-base hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-primary text-3xl">menu_book</span>
            <span className="font-label-sm text-label-sm">Ver Catálogo</span>
          </button>
          <button 
            onClick={() => {
              const address = "IVK-RACING Lima Peru"; // Cambia esta dirección cuando quieras
              const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
              window.open(url, '_blank');
            }}
            className="bg-surface-container border border-outline-variant p-gutter rounded-lg flex flex-col items-center gap-base hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
            <span className="font-label-sm text-label-sm">Ubicación</span>
          </button>
        </section>

        {/* Offers Section */}
        <section className="space-y-gutter">
          <div className="flex justify-between items-center">
            <h3 className="font-headline-md text-headline-md-mobile">Ofertas del Mes</h3>
            <span className="text-primary font-label-sm text-label-sm uppercase tracking-tighter cursor-pointer">Ver todo</span>
          </div>
          {/* Horizontal Scroll Offers */}
          <div className="flex gap-gutter overflow-x-auto pb-gutter scrollbar-hide snap-x">
            {offers.map((offer, i) => (
              <div key={i} className="min-w-[240px] snap-start bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant">
                <div className="h-40 bg-surface-variant relative">
                  <img src={offer.image} alt={offer.name} className="w-full h-full object-cover" />
                  {offer.discount && (
                    <div className="absolute top-base right-base bg-error-container text-on-error-container px-base py-xs rounded font-label-technical text-[10px] uppercase">
                      {offer.discount}
                    </div>
                  )}
                  {offer.tag && (
                    <div className="absolute top-base right-base bg-error-container text-on-error-container px-base py-xs rounded font-label-technical text-[10px] uppercase">
                      {offer.tag}
                    </div>
                  )}
                </div>
                <div className="p-gutter space-y-xs">
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">{offer.brand}</p>
                  <h4 className="font-body-lg text-body-lg font-bold">{offer.name}</h4>
                  <p className="font-headline-md text-primary-container">{offer.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Grid (Bento Style) */}
        <section className="grid grid-cols-2 gap-gutter">
          <div className="bg-surface-container-high p-gutter rounded-xl space-y-base">
            <span className="material-symbols-outlined text-primary">history</span>
            <div>
              <p className="text-[10px] uppercase font-label-technical text-on-surface-variant">Último Servicio</p>
              <p className="font-label-sm text-label-sm">12 Oct 2023</p>
            </div>
          </div>
          <div className="bg-surface-container-high p-gutter rounded-xl space-y-base">
            <span className="material-symbols-outlined text-primary">speed</span>
            <div>
              <p className="text-[10px] uppercase font-label-technical text-on-surface-variant">Kilometraje</p>
              <p className="font-label-sm text-label-sm">14,200 KM</p>
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
