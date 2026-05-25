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

    // Guardar en localStorage para persistencia simple
    const existingAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    localStorage.setItem('appointments', JSON.stringify([...existingAppointments, newAppointment]));

    alert(`¡Cita registrada con éxito para tu ${bikeModel}!`);
    navigate('/dashboard');
  };

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen pb-24">
      {/* Top App Bar */}
      <Header />

      {/* Content Canvas */}
      <main className="pt-20 px-margin-mobile py-lg max-w-lg mx-auto">
        <div className="mb-lg">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-xs">Agendar Cita</h2>
          <p className="font-body-md text-on-surface-variant">Configura tu próxima visita técnica en 4 pasos.</p>
        </div>

        {/* Step-by-Step Layout */}
        <div className="flex flex-col gap-gutter">
          {/* Step 1: Service Type */}
          <section className="p-gutter border border-outline-variant bg-surface-container rounded-lg">
            <div className="flex items-center gap-sm mb-md">
              <span className={`font-label-technical text-label-technical px-base py-xs rounded-xs ${selectedService ? 'bg-primary-container text-on-primary-container' : 'bg-surface-variant text-on-surface-variant'}`}>01</span>
              <h3 className="font-headline-md text-body-lg uppercase tracking-wider">Tipo de Servicio</h3>
            </div>
            <div className="grid grid-cols-1 gap-sm">
              {services.map((service) => (
                <button
                  key={service.id}
                  className={`flex items-center justify-between p-md border rounded-lg transition-all group ${selectedService === service.id ? 'border-primary-container bg-surface-variant' : 'border-outline-variant hover:border-primary-container'}`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="flex items-center gap-md">
                    <span className={`material-symbols-outlined ${selectedService === service.id ? 'text-primary-container' : 'text-on-surface-variant group-hover:text-primary-container'}`}>{service.icon}</span>
                    <span className="font-body-md font-semibold">{service.label}</span>
                  </div>
                  <span className={`material-symbols-outlined text-on-surface-variant ${selectedService === service.id ? 'opacity-100' : 'opacity-0'}`}>check_circle</span>
                </button>
              ))}
            </div>
          </section>

          {/* Step 2: Calendar Selection */}
          <section className="p-gutter border border-outline-variant bg-surface-container rounded-lg">
            <div className="flex items-center gap-sm mb-md">
              <span className={`font-label-technical text-label-technical px-base py-xs rounded-xs ${selectedDate ? 'bg-primary-container text-on-primary-container' : 'bg-surface-variant text-on-surface-variant'}`}>02</span>
              <h3 className="font-headline-md text-body-lg uppercase tracking-wider">Seleccionar Fecha</h3>
            </div>
            <div className="bg-surface p-sm rounded-lg border border-outline-variant">
              <div className="flex justify-between items-center mb-sm px-xs">
                <span className="font-label-sm uppercase tracking-widest text-primary-container">Octubre 2024</span>
                <div className="flex gap-sm">
                  <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">chevron_left</span>
                  <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">chevron_right</span>
                </div>
              </div>
              <div className="custom-calendar-grid text-center mb-xs">
                {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
                  <span key={i} className={`font-label-sm ${day === 'D' ? 'text-primary-container' : 'text-on-surface-variant'}`}>{day}</span>
                ))}
              </div>
              <div className="custom-calendar-grid gap-y-xs text-center">
                {[28, 29, 30].map((d) => (
                  <button key={d} className="h-10 w-full flex items-center justify-center font-label-technical text-on-surface-variant/30 disabled cursor-not-allowed">{d}</button>
                ))}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((d) => (
                  <button
                    key={d}
                    className={`h-10 w-full flex items-center justify-center font-label-technical rounded-lg transition-all ${d === selectedDate ? 'bg-primary-container text-on-primary-container font-bold' : 'hover:bg-surface-variant text-on-surface-variant'} ${d === 4 || d === 11 ? 'text-primary-container' : ''}`}
                    onClick={() => setSelectedDate(d)}
                  >
                    {d < 10 ? `0${d}` : d}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Step 3: Time Selection */}
          <section className="p-gutter border border-outline-variant bg-surface-container rounded-lg">
            <div className="flex items-center gap-sm mb-md">
              <span className={`font-label-technical text-label-technical px-base py-xs rounded-xs ${selectedTime ? 'bg-primary-container text-on-primary-container' : 'bg-surface-variant text-on-surface-variant'}`}>03</span>
              <h3 className="font-headline-md text-body-lg uppercase tracking-wider">Seleccionar Hora</h3>
            </div>
            <div className="flex gap-gutter overflow-x-auto scrollbar-hide pb-xs">
              {times.map((time) => (
                <button
                  key={time.id}
                  className={`flex-shrink-0 flex flex-col items-center gap-xs px-lg py-md border rounded-lg group transition-all ${selectedTime === time.id ? 'border-primary-container bg-surface-variant' : 'border-outline-variant hover:border-primary-container'}`}
                  onClick={() => setSelectedTime(time.id)}
                >
                  <span className={`material-symbols-outlined ${selectedTime === time.id ? 'text-primary-container' : 'text-on-surface-variant group-hover:text-primary-container'}`}>{time.icon}</span>
                  <span className="font-label-sm uppercase">{time.label}</span>
                  <span className="font-label-technical text-on-surface-variant">{time.range}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Step 4: Bike Info */}
          <section className="p-gutter border border-outline-variant bg-surface-container rounded-lg">
            <div className="flex items-center gap-sm mb-md">
              <span className="font-label-technical text-label-technical px-base py-xs bg-surface-variant text-on-surface-variant rounded-xs">04</span>
              <h3 className="font-headline-md text-body-lg uppercase tracking-wider">Detalles</h3>
            </div>
            <div className="flex flex-col gap-md">
              <div>
                <label className="font-label-sm text-on-surface-variant mb-xs block">Modelo de la Moto</label>
                <input 
                  className="w-full bg-surface border border-outline-variant rounded-lg p-md text-on-surface focus:outline-none focus:border-primary-container transition-colors font-label-technical" 
                  placeholder="Ej. Yamaha MT-07" 
                  type="text" 
                  value={bikeModel}
                  onChange={(e) => setBikeModel(e.target.value)}
                />
              </div>
              <div>
                <label className="font-label-sm text-on-surface-variant mb-xs block">Descripción del Problema (Opcional)</label>
                <textarea 
                  className="w-full bg-surface border border-outline-variant rounded-lg p-md text-on-surface focus:outline-none focus:border-primary-container transition-colors font-body-md" 
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
              className="w-full bg-primary-container text-on-primary-fixed hover:bg-error-container hover:text-on-primary transition-all active:scale-95 duration-100 py-md rounded-lg font-bold uppercase tracking-widest flex items-center justify-center gap-sm shadow-lg"
            >
              <span className="material-symbols-outlined">event_available</span>
              Reservar Cita
            </button>
            <p className="text-center font-label-sm text-on-surface-variant mt-md">Recibirás una confirmación vía SMS en minutos.</p>
          </div>
        </div>
      </main>

      {/* Bottom Nav Bar */}
      <BottomNav />
    </div>
  );
};

export default BookingPage;
