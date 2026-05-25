import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [metrics, setMetrics] = useState([
    {
      label: 'CITAS DE HOY',
      value: '0',
      icon: 'calendar_month',
      borderColor: 'border-primary',
      iconColor: 'text-primary',
    },
    {
      label: 'INGRESOS SEMANALES',
      value: 'S/ 0',
      icon: 'payments',
      borderColor: 'border-primary',
      iconColor: 'text-primary',
      trend: '+0%',
    },
    {
      label: 'STOCK BAJO',
      value: '08',
      icon: 'inventory_2',
      borderColor: 'border-secondary',
      iconColor: 'text-on-surface-variant',
      action: 'Revisar',
    },
  ]);

  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    
    let currentAppointments = [];
    if (savedAppointments.length === 0) {
      currentAppointments = [
        {
          id: 1,
          name: 'Carlos Rodríguez',
          time: '09:00 AM',
          bike: 'Yamaha MT-07 • Cambio de Aceite',
          status: 'PENDIENTE',
          statusColor: 'bg-error-container',
          icon: 'handyman',
          iconColor: 'text-primary',
        },
        {
          id: 2,
          name: 'Sofía Méndez',
          time: '10:30 AM',
          bike: 'Kawasaki Z900 • Ajuste de Cadena',
          status: 'EN PROCESO',
          statusColor: 'bg-surface-variant text-on-surface-variant',
          icon: 'settings_suggest',
          iconColor: 'text-secondary',
        },
        {
          id: 3,
          name: 'Marcos Polo',
          time: '12:00 PM',
          bike: 'Ducati Monster • Sistema Eléctrico',
          status: 'PENDIENTE',
          statusColor: 'bg-error-container',
          icon: 'electric_bolt',
          iconColor: 'text-primary',
        },
      ];
    } else {
      currentAppointments = savedAppointments.map(apt => ({
        id: apt.id,
        name: 'Cliente Nuevo',
        time: apt.time === 'Mañana' ? '08:30 AM' : '02:30 PM',
        bike: `${apt.bike} • ${apt.service}`,
        status: apt.status,
        statusColor: apt.status === 'PENDIENTE' ? 'bg-error-container' : 'bg-surface-variant text-on-surface-variant',
        icon: apt.service === 'Mantenimiento' ? 'handyman' : apt.service === 'Reparación' ? 'settings_suggest' : 'fact_check',
        iconColor: apt.service === 'Mantenimiento' ? 'text-primary' : 'text-secondary',
      }));
    }
    
    setAppointments(currentAppointments);

    // Actualizar métricas dinámicamente
    setMetrics(prev => prev.map(m => {
      if (m.label === 'CITAS DE HOY') {
        return { ...m, value: currentAppointments.length.toString() };
      }
      if (m.label === 'INGRESOS SEMANALES') {
        // Cálculo ficticio basado en número de citas (e.g. 150 por cita + base)
        const total = (currentAppointments.length * 150) + 1200;
        return { ...m, value: `S/ ${total.toLocaleString()}`, trend: `+${Math.floor(Math.random() * 20)}%` };
      }
      return m;
    }));

  }, []);

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      {/* TopAppBar */}
      <Header>
        <div className="w-10 h-10 rounded-sm bg-surface-container-highest border border-outline-variant overflow-hidden shadow-sm">
          <img 
            alt="Admin Avatar" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX1fYKsCUaKJ-32ri760ZVsOt4P4_Ov3eEuW8WnXd9dwD35ZuJ8HhcZm-AA7gNmWGodGR7oVzW9Zwj1cUILChpxBH0siRQxSoQkDsuIXQPetl6ZUHyx7GS9G9ys8wDYWX-5rLJIb-a0OAz72WLDXsd_mwAVnKgYfROtrje0nhgMMynEuPA4hGNCTYd2S2IsJyvPFvpr4TnezhNQQnmCjpM60bNxeKH9C5d7OOzpJ7p-v1G9tKd-StTWFdlequBsGHdj9eGlXARuA" 
          />
        </div>
      </Header>

      <main className="pt-24 pb-24 px-margin-mobile max-w-5xl mx-auto">
        {/* Welcome Section */}
        <section className="mb-lg">
          <h2 className="font-display-lg text-headline-lg-mobile text-on-surface mb-xs uppercase tracking-tighter">Panel de Control</h2>
          <p className="font-body-md text-on-surface-variant">Gestión técnica y operativa del taller.</p>
        </section>

        {/* Bento Grid: Quick Metrics */}
        <section className="grid grid-cols-2 md:grid-cols-3 gap-gutter mb-lg">
          {metrics.map((metric, i) => (
            <div key={i} className={`bg-[#1E1E1E] p-md rounded-lg border-l-4 ${i < 2 ? 'border-[#E53935]' : 'border-[#37474F]'} shadow-industrial-lift flex flex-col justify-between ${i === 2 ? 'col-span-2 md:col-span-1' : ''} hover:bg-[#2C2C2C] transition-all duration-300 relative overflow-hidden group`}>
              <div className="relative z-10">
                <span className={`material-symbols-outlined ${i < 2 ? 'text-[#E53935]' : 'text-[#B0BEC5]'} mb-sm drop-shadow-[0_0_5px_currentColor]`}>{metric.icon}</span>
                <p className="font-label-technical text-[10px] text-[#B0BEC5] uppercase font-black tracking-widest">{metric.label}</p>
              </div>
              <div className="flex items-baseline gap-xs mt-sm relative z-10">
                <p className="font-display-lg text-4xl font-black text-[#E53935] tracking-tighter">{metric.value}</p>
                {metric.trend && <span className="text-[#66BB6A] font-label-technical text-[10px] font-bold">{metric.trend}</span>}
                {metric.action && <button className="font-label-technical text-[10px] underline text-[#B0BEC5] font-bold hover:text-[#E53935] transition-colors uppercase tracking-widest">{metric.action}</button>}
              </div>
            </div>
          ))}
        </section>

        {/* Quick Actions */}
        <section className="flex flex-wrap gap-sm mb-lg">
          <button 
            onClick={() => navigate('/booking')}
            className="flex-1 min-w-[160px] bg-[#E53935] text-white h-12 flex items-center justify-center gap-sm rounded-sm font-black active:scale-95 transition-all shadow-glow hover:shadow-glow-strong uppercase tracking-widest text-[12px]"
          >
            <span className="material-symbols-outlined text-white">motorcycle</span>
            REGISTRAR MOTO
          </button>
          <button 
            onClick={() => navigate('/store')}
            className="flex-1 min-w-[160px] bg-[#1E1E1E] border border-[#E53935] text-white h-12 flex items-center justify-center gap-sm rounded-sm font-black active:scale-95 transition-all hover:bg-[#2C2C2C] uppercase tracking-widest text-[12px] shadow-sm"
          >
            <span className="material-symbols-outlined text-[#E53935]">add_shopping_cart</span>
            TIENDA
          </button>
        </section>

        {/* Upcoming Appointments List */}
        <section className="bg-[#1E1E1E] rounded-lg overflow-hidden mb-lg border border-[#37474F] shadow-industrial-lift relative">
          <div className="p-md border-b border-[#37474F] flex justify-between items-center bg-[#2C2C2C]">
            <h3 className="font-display-lg text-lg text-white uppercase tracking-wider flex items-center gap-sm">
              <span className="w-2 h-2 bg-[#E53935] rounded-full shadow-glow-sm"></span>
              CITAS PRÓXIMAS
            </h3>
            <span className="material-symbols-outlined text-[#B0BEC5] cursor-pointer hover:text-[#E53935] transition-colors">filter_list</span>
          </div>
          <div className="divide-y divide-[#37474F]">
            {appointments.map((apt) => (
              <div key={apt.id} className="p-md flex items-center gap-md hover:bg-[#2C2C2C] transition-all cursor-pointer group border-l-4 border-transparent hover:border-[#E53935]">
                <div className={`w-12 h-12 rounded-sm bg-[#2C2C2C] flex items-center justify-center ${apt.status === 'PENDIENTE' ? 'text-[#E53935]' : 'text-[#B0BEC5]'} shadow-inner`}>
                  <span className="material-symbols-outlined group-hover:scale-110 transition-transform">{apt.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="font-display-lg text-white uppercase tracking-tight group-hover:text-[#E53935] transition-colors text-sm">{apt.name}</p>
                    <p className="font-label-technical text-[12px] text-[#E53935] font-bold">{apt.time}</p>
                  </div>
                  <p className="font-label-technical text-[10px] text-[#B0BEC5] uppercase tracking-wider">{apt.bike}</p>
                </div>
                <div className={`px-base py-xs text-white text-[9px] font-black rounded-sm shadow-sm uppercase tracking-widest ${apt.status === 'PENDIENTE' ? 'bg-[#E53935]' : 'bg-[#37474F]'}`}>
                  {apt.status}
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-md text-center font-label-technical text-[#E53935] hover:bg-[#2C2C2C] transition-colors uppercase tracking-widest font-black border-t border-[#37474F] text-[10px]">
            VER HISTORIAL COMPLETO
          </button>
        </section>

        {/* System Alerts / Status */}
        <section className="bg-[#1E1E1E] border border-[#37474F] p-md rounded-lg flex items-center gap-md">
          <span className="material-symbols-outlined text-[#E53935] animate-pulse">security</span>
          <p className="font-label-technical text-[10px] text-[#B0BEC5] leading-tight uppercase tracking-wider">
            Sincronización segura activa • MotoTech Pro v1.0.4
          </p>
        </section>
      </main>

      {/* BottomNavBar */}
      <BottomNav />

      {/* FAB Contextual */}
      <button className="fixed right-md bottom-24 w-14 h-14 bg-primary-container text-on-primary-container rounded-full shadow-lg flex items-center justify-center active:scale-95 transition-transform z-40">
        <span className="material-symbols-outlined">add</span>
      </button>
    </div>
  );
};

export default DashboardPage;
