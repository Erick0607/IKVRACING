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
      borderColor: 'border-primary-container',
      iconColor: 'text-primary-container',
    },
    {
      label: 'INGRESOS SEMANALES',
      value: 'S/ 0',
      icon: 'payments',
      borderColor: 'border-secondary',
      iconColor: 'text-secondary',
      trend: '+0%',
    },
    {
      label: 'STOCK BAJO',
      value: '08',
      icon: 'inventory_2',
      borderColor: 'border-error-container',
      iconColor: 'text-error',
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
        <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant overflow-hidden">
          <img 
            alt="Admin Avatar" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX1fYKsCUaKJ-32ri760ZVsOt4P4_Ov3eEuW8WnXd9dwD35ZuJ8HhcZm-AA7gNmWGodGR7oVzW9Zwj1cUILChpxBH0siRQxSoQkDsuIXQPetl6ZUHyx7GS9G9ys8wDYWX-5rLJIb-a0OAz72WLDXsd_mwAVnKgYfROtrje0nhgMMynEuPA4hGNCTYd2S2IsJyvPFvpr4TnezhNQQnmCjpM60bNxeKH9C5d7OOzpJ7p-v1G9tKd-StTWFdlequBsGHdj9eGlXARuA" 
          />
        </div>
      </Header>

      <main className="pt-20 pb-24 px-margin-mobile max-w-5xl mx-auto">
        {/* Welcome Section */}
        <section className="mb-lg">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-xs">Panel de Control</h2>
          <p className="font-body-md text-on-surface-variant">Gestión técnica y operativa del taller.</p>
        </section>

        {/* Bento Grid: Quick Metrics */}
        <section className="grid grid-cols-2 md:grid-cols-3 gap-gutter mb-lg">
          {metrics.map((metric, i) => (
            <div key={i} className={`bg-surface-container p-md rounded-lg border-l-4 ${metric.borderColor} shadow-sm flex flex-col justify-between ${i === 2 ? 'col-span-2 md:col-span-1' : ''}`}>
              <div>
                <span className={`material-symbols-outlined ${metric.iconColor} mb-sm`}>{metric.icon}</span>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">{metric.label}</p>
              </div>
              <div className="flex items-baseline gap-xs mt-sm">
                <p className="font-display-lg text-4xl font-black text-on-surface">{metric.value}</p>
                {metric.trend && <span className="text-green-400 font-label-technical text-xs">{metric.trend}</span>}
                {metric.action && <button className="font-label-technical text-xs underline text-primary">{metric.action}</button>}
              </div>
            </div>
          ))}
        </section>

        {/* Quick Actions */}
        <section className="flex flex-wrap gap-sm mb-lg">
          <button 
            onClick={() => navigate('/booking')}
            className="flex-1 min-w-[160px] bg-primary-container text-on-primary-fixed-variant h-12 flex items-center justify-center gap-sm rounded border-none font-label-sm active:scale-95 transition-transform uppercase tracking-wider"
          >
            <span className="material-symbols-outlined">motorcycle</span>
            Registrar Nueva Moto
          </button>
          <button 
            onClick={() => navigate('/store')}
            className="flex-1 min-w-[160px] border border-outline text-on-surface h-12 flex items-center justify-center gap-sm rounded font-label-sm active:scale-95 transition-transform hover:bg-surface-container-high uppercase tracking-wider"
          >
            <span className="material-symbols-outlined">add_shopping_cart</span>
            Añadir Producto
          </button>
        </section>

        {/* Upcoming Appointments List */}
        <section className="bg-surface-container rounded-xl overflow-hidden mb-lg">
          <div className="p-md border-b border-outline-variant flex justify-between items-center">
            <h3 className="font-headline-md text-on-surface">Citas Próximas</h3>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">filter_list</span>
          </div>
          <div className="divide-y divide-outline-variant">
            {appointments.map((apt) => (
              <div key={apt.id} className="p-md flex items-center gap-md hover:bg-surface-container-high transition-colors cursor-pointer group">
                <div className={`w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center ${apt.iconColor}`}>
                  <span className="material-symbols-outlined">{apt.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="font-body-md text-on-surface font-bold">{apt.name}</p>
                    <p className="font-label-technical text-label-technical text-primary">{apt.time}</p>
                  </div>
                  <p className="font-label-sm text-on-surface-variant">{apt.bike}</p>
                </div>
                <div className={`px-sm py-xs text-white text-[10px] font-bold rounded ${apt.statusColor}`}>{apt.status}</div>
              </div>
            ))}
          </div>
          <button className="w-full py-md text-center font-label-sm text-primary-container hover:bg-surface-container-high transition-colors uppercase tracking-widest font-bold">
            Ver Todas las Citas
          </button>
        </section>

        {/* System Alerts / Status */}
        <section className="bg-surface-variant/30 border border-outline-variant p-md rounded-lg flex items-center gap-md">
          <span className="material-symbols-outlined text-on-surface-variant">info</span>
          <p className="font-label-technical text-label-technical text-on-surface-variant leading-tight">
            Sistema sincronizado con base de datos central. Próxima copia de seguridad en 4 horas.
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
