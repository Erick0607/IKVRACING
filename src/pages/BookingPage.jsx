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
      <main className="pt-24 pb-32 px-margin-mobile max-w-2xl mx-auto">
        <div className="mb-xl">
          <h2 className="font-headline-lg text-4xl text-on-surface mb-sm">Agendar Cita</h2>
          <p className="font-body-md text-on-surface-variant max-w-xs">Configura tu próxima visita técnica en 4 pasos simples.</p>
        </div>

        {/* Step-by-Step Layout with Stepper Line */}
        <div className="relative space-y-lg">
          {/* Vertical Stepper Line */}
          <div className="absolute left-6 top-10 bottom-10 w-[2px] bg-outline-variant z-0 hidden sm:block"></div>

          {/* Step 1: Service Type */}
          <section className="relative z-10 flex flex-col sm:flex-row gap-gutter group">
            <div className="flex-shrink-0 flex items-start">
              <span className={`w-12 h-12 flex items-center justify-center font-label-technical rounded-lg border transition-all duration-500 ${selectedService ? 'bg-primary-container text-on-primary-container border-primary-container shadow-[0_0_15px_#ff544c]' : 'bg-surface-variant text-on-surface-variant border-outline-variant'}`}>
                01
              </span>
            </div>
            
            <div className="flex-grow p-gutter border border-outline-variant bg-surface-container rounded-xl shadow-sm group-hover:border-primary-container/30 transition-colors">
              <h3 className="font-headline-md text-lg uppercase tracking-wider mb-md text-on-surface">Tipo de Servicio</h3>
              <div className="grid grid-cols-1 gap-sm">
                {services.map((service) => (
                  <button
                    key={service.id}
                    className={`flex items-center justify-between p-md border rounded-xl transition-all duration-300 group/btn ${selectedService === service.id ? 'border-primary-container bg-surface-variant shadow-inner' : 'border-outline-variant hover:border-primary-container/50 hover:bg-surface-container-high'}`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <div className="flex items-center gap-md">
                      <span className={`material-symbols-outlined transition-colors duration-300 ${selectedService === service.id ? 'text-primary-container' : 'text-on-surface-variant group-hover/btn:text-primary-container'}`}>{service.icon}</span>
                      <span className={`font-body-md font-semibold ${selectedService === service.id ? 'text-on-surface' : 'text-on-surface-variant'}`}>{service.label}</span>
                    </div>
                    <span className={`material-symbols-outlined text-primary-container transition-all duration-300 ${selectedService === service.id ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>check_circle</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Step 2: Calendar Selection */}
          <section className="relative z-10 flex flex-col sm:flex-row gap-gutter group">
            <div className="flex-shrink-0 flex items-start">
              <span className={`w-12 h-12 flex items-center justify-center font-label-technical rounded-lg border transition-all duration-500 ${selectedDate ? 'bg-primary-container text-on-primary-container border-primary-container shadow-[0_0_15px_#ff544c]' : 'bg-surface-variant text-on-surface-variant border-outline-variant'}`}>
                02
              </span>
            </div>

            <div className="flex-grow p-gutter border border-outline-variant bg-surface-container rounded-xl shadow-sm group-hover:border-primary-container/30 transition-colors">
              <h3 className="font-headline-md text-lg uppercase tracking-wider mb-md text-on-surface">Seleccionar Fecha</h3>
              <div className="bg-surface p-md rounded-xl border border-outline-variant">
                <div className="flex justify-between items-center mb-md px-xs">
                  <span className="font-label-sm uppercase tracking-widest text-primary-container font-bold">Octubre 2024</span>
                  <div className="flex gap-sm">
                    <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">chevron_left</button>
                    <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">chevron_right</button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-y-2 text-center w-full" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
                  {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
                    <span key={i} className={`text-xs font-bold ${day === 'D' ? 'text-red-500' : 'text-gray-400'}`}>{day}</span>
                  ))}
                  {[28, 29, 30].map((d) => (
                    <span key={d} className="h-10 w-full flex items-center justify-center text-gray-800">{d}</span>
                  ))}
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((d) => (
                    <button
                      key={d}
                      className={`h-10 w-full flex items-center justify-center rounded-lg transition-all duration-200 ${d === selectedDate ? 'bg-[#ff544c] text-white font-bold' : 'hover:bg-gray-800 text-gray-200'}`}
                      onClick={() => setSelectedDate(d)}
                    >
                      {d < 10 ? `0${d}` : d}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Step 3: Time Selection */}
          <section className="relative z-10 flex flex-col sm:flex-row gap-gutter group">
            <div className="flex-shrink-0 flex items-start">
              <span className={`w-12 h-12 flex items-center justify-center font-label-technical rounded-lg border transition-all duration-500 ${selectedTime ? 'bg-primary-container text-on-primary-container border-primary-container shadow-[0_0_15px_#ff544c]' : 'bg-surface-variant text-on-surface-variant border-outline-variant'}`}>
                03
              </span>
            </div>

            <div className="flex-grow p-gutter border border-outline-variant bg-surface-container rounded-xl shadow-sm group-hover:border-primary-container/30 transition-colors">
              <h3 className="font-headline-md text-lg uppercase tracking-wider mb-md text-on-surface">Seleccionar Hora</h3>
              <div className="flex gap-gutter overflow-x-auto scrollbar-hide pb-xs">
                {times.map((time) => (
                  <button
                    key={time.id}
                    className={`flex-shrink-0 flex flex-col items-center gap-xs px-lg py-md border rounded-xl group/time transition-all duration-300 ${selectedTime === time.id ? 'border-primary-container bg-surface-variant shadow-inner scale-105' : 'border-outline-variant hover:border-primary-container/50 hover:bg-surface-container-high'}`}
                    onClick={() => setSelectedTime(time.id)}
                  >
                    <span className={`material-symbols-outlined transition-colors duration-300 ${selectedTime === time.id ? 'text-primary-container' : 'text-on-surface-variant group-hover/time:text-primary-container'}`}>{time.icon}</span>
                    <span className={`font-label-sm uppercase font-bold ${selectedTime === time.id ? 'text-on-surface' : 'text-on-surface-variant'}`}>{time.label}</span>
                    <span className="font-label-technical text-primary-container/80 text-xs">{time.range}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Step 4: Bike Info */}
          <section className="relative z-10 flex flex-col sm:flex-row gap-gutter group">
            <div className="flex-shrink-0 flex items-start">
              <span className={`w-12 h-12 flex items-center justify-center font-label-technical rounded-lg border transition-all duration-500 ${bikeModel ? 'bg-primary-container text-on-primary-container border-primary-container shadow-[0_0_15px_#ff544c]' : 'bg-surface-variant text-on-surface-variant border-outline-variant'}`}>
                04
              </span>
            </div>

            <div className="flex-grow p-gutter border border-outline-variant bg-surface-container rounded-xl shadow-sm group-hover:border-primary-container/30 transition-colors">
              <h3 className="font-headline-md text-lg uppercase tracking-wider mb-md text-on-surface">Detalles de la Moto</h3>
              <div className="flex flex-col gap-lg">
                <div className="space-y-xs">
                  <label className="font-label-sm text-primary-container font-bold uppercase tracking-tighter block ml-1">Modelo</label>
                  <input 
                    className="w-full bg-surface border border-outline-variant rounded-xl p-md text-on-surface focus:outline-none focus:border-primary-container transition-all font-label-technical placeholder:text-on-surface-variant/30" 
                    placeholder="Ej. Yamaha MT-07" 
                    type="text" 
                    value={bikeModel}
                    onChange={(e) => setBikeModel(e.target.value)}
                  />
                </div>
                <div className="space-y-xs">
                  <label className="font-label-sm text-primary-container font-bold uppercase tracking-tighter block ml-1">Descripción</label>
                  <textarea 
                    className="w-full bg-surface border border-outline-variant rounded-xl p-md text-on-surface focus:outline-none focus:border-primary-container transition-all font-body-md placeholder:text-on-surface-variant/30" 
                    placeholder="Describe brevemente lo que necesita tu moto..." 
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          </section>

          {/* Confirmation Area */}
          <div className="pt-xl pb-10">
            <button 
              onClick={handleReserve}
              className="w-full bg-primary-container text-on-primary-fixed hover:bg-error-container hover:text-on-primary transition-all active:scale-95 duration-300 py-lg rounded-2xl font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-md shadow-[0_10px_30px_rgba(255,84,76,0.3)] hover:shadow-[0_15px_40px_rgba(255,84,76,0.4)]"
            >
              <span className="material-symbols-outlined text-2xl">event_available</span>
              Reservar Cita
            </button>
            <div className="mt-md flex items-center justify-center gap-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">info</span>
              <p className="font-label-sm italic">Recibirás una confirmación vía SMS en minutos.</p>
            </div>
          </div>
        </div>
      </main>
      </main>

      {/* Bottom Nav Bar */}
      <BottomNav />
    </div>
  );
};

export default BookingPage;
