import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

const BookingPage = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDate, setSelectedDate] = useState(5);
  const [bikeModel, setBikeModel] = useState('');
  const [description, setDescription] = useState('');

  const services = [
    { id: 'Mantenimiento', icon: 'build', label: 'Mantenimiento' },
    { id: 'Reparación', icon: 'settings', label: 'Reparación' },
    { id: 'Revisión técnica', icon: 'fact_check', label: 'Revisión técnica' },
  ];

  const times = [
    { id: 'Mañana', icon: 'light_mode', label: 'Mañana', range: '08:00 - 12:00' },
    { id: 'Tarde', icon: 'wb_twilight', label: 'Tarde', range: '14:00 - 18:00' },
  ];

  const handleReserve = () => {
    if (!selectedService || !selectedTime || !bikeModel) {
      alert('Por favor completa los campos obligatorios: Servicio, Hora y Modelo de Moto.');
      return;
    }

    const newAppointment = {
      id: Date.now(),
      service: selectedService,
      date: `Octubre ${selectedDate < 10 ? `0${selectedDate}` : selectedDate}, 2024`,
      time: selectedTime,
      bike: bikeModel,
      description: description,
      status: 'PENDIENTE',
      createdAt: new Date().toISOString()
    };

    const existingAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    localStorage.setItem('appointments', JSON.stringify([...existingAppointments, newAppointment]));

    alert(`¡Cita registrada con éxito para tu ${bikeModel}!`);
    navigate('/dashboard');
  };

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen pb-24 selection:bg-primary-container selection:text-on-primary-container">
      {/* Top App Bar */}
      <Header />

      {/* Content Canvas */}
      <main className="pt-24 px-margin-mobile py-lg max-w-lg mx-auto">
        <div className="mb-lg">
          <h2 className="font-headline-lg-mobile text-on-surface mb-xs uppercase tracking-tight">Agendar Cita</h2>
          <p className="font-body-md text-on-surface-variant">Configura tu próxima visita técnica en 4 pasos.</p>
        </div>

        {/* Original Step-by-Step Layout */}
        <div className="flex flex-col gap-gutter">
          
          {/* Step 1: Service Type */}
          <section className="p-gutter border border-outline-variant bg-surface-container rounded-lg shadow-sm overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary-container scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
            <div className="flex items-center gap-sm mb-md relative z-10">
              <span className={`font-label-technical px-base py-xs rounded-sm ${selectedService ? 'bg-gradient-ivk text-white' : 'bg-surface-variant text-on-surface-variant'}`}>01</span>
              <h3 className="font-headline-md text-lg uppercase tracking-wider font-bold">Tipo de Servicio</h3>
            </div>
            <div className="grid grid-cols-1 gap-sm relative z-10">
              {services.map((service) => (
                <button
                  key={service.id}
                  className={`flex items-center justify-between p-md border rounded-sm transition-all group/btn ${selectedService === service.id ? 'border-primary-container bg-surface-variant shadow-inner-glow' : 'border-outline-variant hover:border-primary-container'}`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="flex items-center gap-md">
                    <span className={`material-symbols-outlined ${selectedService === service.id ? 'text-primary-container' : 'text-on-surface-variant group-hover/btn:text-primary-container'}`}>{service.icon}</span>
                    <span className="font-body-md font-bold uppercase tracking-tight">{service.label}</span>
                  </div>
                  <span className={`material-symbols-outlined text-primary-container ${selectedService === service.id ? 'opacity-100' : 'opacity-0'}`}>check_circle</span>
                </button>
              ))}
            </div>
          </section>

          {/* Step 2: Calendar Selection */}
          <section className="p-gutter border border-outline-variant bg-surface-container rounded-lg shadow-sm overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary-container scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
            <div className="flex items-center gap-sm mb-md relative z-10">
              <span className={`font-label-technical px-base py-xs rounded-sm ${selectedDate ? 'bg-gradient-ivk text-white' : 'bg-surface-variant text-on-surface-variant'}`}>02</span>
              <h3 className="font-headline-md text-lg uppercase tracking-wider font-bold">Seleccionar Fecha</h3>
            </div>
            <div className="bg-surface p-sm rounded-sm border border-outline-variant relative z-10">
              <div className="flex justify-between items-center mb-sm px-xs">
                <span className="font-label-technical uppercase tracking-widest text-primary font-bold">Octubre 2024</span>
                <div className="flex gap-sm">
                  <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">chevron_left</span>
                  <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">chevron_right</span>
                </div>
              </div>
              <div className="grid grid-cols-7 text-center mb-xs w-full">
                {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
                  <span key={i} className={`font-label-sm font-black ${day === 'D' ? 'text-primary' : 'text-on-surface-variant'}`}>{day}</span>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-y-xs text-center w-full" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
                {[28, 29, 30].map((d) => (
                  <button key={d} className="h-10 w-full flex items-center justify-center font-label-technical text-on-surface-variant/20 disabled cursor-not-allowed">{d}</button>
                ))}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((d) => (
                  <button
                    key={d}
                    className={`h-10 w-full flex items-center justify-center font-label-technical rounded-sm transition-all ${d === selectedDate ? 'bg-gradient-ivk text-white font-bold shadow-glow-sm' : 'hover:bg-surface-variant text-on-surface-variant'} ${d === 4 || d === 11 ? 'text-primary' : ''}`}
                    onClick={() => setSelectedDate(d)}
                  >
                    {d < 10 ? `0${d}` : d}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Step 3: Time Selection */}
          <section className="p-gutter border border-outline-variant bg-surface-container rounded-lg shadow-sm overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary-container scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
            <div className="flex items-center gap-sm mb-md relative z-10">
              <span className={`font-label-technical px-base py-xs rounded-sm ${selectedTime ? 'bg-gradient-ivk text-white' : 'bg-surface-variant text-on-surface-variant'}`}>03</span>
              <h3 className="font-headline-md text-lg uppercase tracking-wider font-bold">Seleccionar Hora</h3>
            </div>
            <div className="flex gap-gutter overflow-x-auto scrollbar-hide pb-xs relative z-10">
              {times.map((time) => (
                <button
                  key={time.id}
                  className={`flex-shrink-0 flex flex-col items-center gap-xs px-lg py-md border rounded-sm group/time transition-all ${selectedTime === time.id ? 'border-primary-container bg-surface-variant shadow-inner-glow' : 'border-outline-variant hover:border-primary-container'}`}
                  onClick={() => setSelectedTime(time.id)}
                >
                  <span className={`material-symbols-outlined ${selectedTime === time.id ? 'text-primary-container' : 'text-on-surface-variant group-hover/time:text-primary-container'}`}>{time.icon}</span>
                  <span className="font-label-sm uppercase font-black">{time.label}</span>
                  <span className="font-label-technical text-[12px] text-on-surface-variant">{time.range}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Step 4: Bike Info */}
          <section className="p-gutter border border-outline-variant bg-surface-container rounded-lg shadow-sm overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary-container scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
            <div className="flex items-center gap-sm mb-md relative z-10">
              <span className={`font-label-technical px-base py-xs rounded-sm ${bikeModel ? 'bg-gradient-ivk text-white' : 'bg-surface-variant text-on-surface-variant'}`}>04</span>
              <h3 className="font-headline-md text-lg uppercase tracking-wider font-bold">Detalles</h3>
            </div>
            <div className="flex flex-col gap-md relative z-10">
              <div>
                <label className="font-label-technical text-on-surface-variant mb-xs block uppercase font-bold text-[10px] tracking-widest">Modelo de la Moto</label>
                <input 
                  className="w-full bg-surface border border-outline-variant rounded-sm p-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/30 transition-all font-label-technical" 
                  placeholder="Ej. Yamaha MT-07" 
                  type="text" 
                  value={bikeModel}
                  onChange={(e) => setBikeModel(e.target.value)}
                />
              </div>
              <div>
                <label className="font-label-technical text-on-surface-variant mb-xs block uppercase font-bold text-[10px] tracking-widest">Descripción del Problema</label>
                <textarea 
                  className="w-full bg-surface border border-outline-variant rounded-sm p-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/30 transition-all font-body-md" 
                  placeholder="Describe brevemente lo que necesita tu moto..." 
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
          </section>

          {/* Confirmation Area */}
          <div className="mt-lg px-xs">
            <button 
              onClick={handleReserve}
              className="w-full bg-gradient-ivk text-white hover:shadow-glow-sm transition-all active:scale-95 duration-200 py-md rounded-sm font-black uppercase tracking-widest flex items-center justify-center gap-sm shadow-md"
            >
              <span className="material-symbols-outlined">event_available</span>
              Confirmar Reserva
            </button>
            <p className="text-center font-label-technical text-[10px] text-on-surface-variant mt-md uppercase tracking-tighter">Sujeto a disponibilidad del taller.</p>
          </div>
        </div>
      </main>

      {/* Bottom Nav Bar */}
      <BottomNav />
    </div>
  );
};

export default BookingPage;
