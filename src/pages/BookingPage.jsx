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
    <div className="bg-[#121212] text-white font-body-md min-h-screen pb-24 selection:bg-[#E53935] selection:text-white">
      {/* Top App Bar */}
      <Header />

      {/* Content Canvas */}
      <main className="pt-24 px-margin-mobile py-lg max-w-lg mx-auto">
        <div className="mb-lg">
          <h2 className="font-display-lg text-headline-lg-mobile text-white mb-xs uppercase tracking-tighter">Agendar Cita</h2>
          <p className="font-body-md text-[#B0BEC5]">Configura tu próxima visita técnica en 4 pasos.</p>
        </div>

        {/* Original Step-by-Step Layout */}
        <div className="flex flex-col gap-gutter">
          
          {/* Step 1: Service Type */}
          <section className="p-gutter border border-[#37474F] bg-[#1E1E1E] rounded-lg shadow-industrial-lift overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#E53935] scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
            <div className="flex items-center gap-sm mb-md relative z-10">
              <span className={`font-label-technical px-base py-xs rounded-sm ${selectedService ? 'bg-[#E53935] text-white' : 'bg-[#37474F] text-[#B0BEC5]'}`}>01</span>
              <h3 className="font-display-lg text-lg uppercase tracking-wider">Tipo de Servicio</h3>
            </div>
            <div className="grid grid-cols-1 gap-sm relative z-10">
              {services.map((service) => (
                <button
                  key={service.id}
                  className={`flex items-center justify-between p-md border rounded-sm transition-all group/btn ${selectedService === service.id ? 'border-[#E53935] bg-[#2C2C2C]' : 'border-[#37474F] hover:border-[#E53935]'}`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="flex items-center gap-md">
                    <span className={`material-symbols-outlined ${selectedService === service.id ? 'text-[#E53935]' : 'text-[#B0BEC5] group-hover/btn:text-[#E53935]'}`}>{service.icon}</span>
                    <span className="font-label-technical uppercase tracking-tight font-black">{service.label}</span>
                  </div>
                  <span className={`material-symbols-outlined text-[#E53935] ${selectedService === service.id ? 'opacity-100' : 'opacity-0'}`}>check_circle</span>
                </button>
              ))}
            </div>
          </section>

          {/* Step 2: Calendar Selection */}
          <section className="p-gutter border border-[#37474F] bg-[#1E1E1E] rounded-lg shadow-industrial-lift overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#E53935] scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
            <div className="flex items-center gap-sm mb-md relative z-10">
              <span className={`font-label-technical px-base py-xs rounded-sm ${selectedDate ? 'bg-[#E53935] text-white' : 'bg-[#37474F] text-[#B0BEC5]'}`}>02</span>
              <h3 className="font-display-lg text-lg uppercase tracking-wider">Seleccionar Fecha</h3>
            </div>
            <div className="bg-[#121212] p-sm rounded-sm border border-[#37474F] relative z-10">
              <div className="flex justify-between items-center mb-sm px-xs">
                <span className="font-label-technical uppercase tracking-widest text-[#E53935] font-black">Octubre 2024</span>
                <div className="flex gap-sm">
                  <span className="material-symbols-outlined text-[#B0BEC5] cursor-pointer hover:text-[#E53935] transition-colors">chevron_left</span>
                  <span className="material-symbols-outlined text-[#B0BEC5] cursor-pointer hover:text-[#E53935] transition-colors">chevron_right</span>
                </div>
              </div>
              <div className="grid grid-cols-7 text-center mb-xs w-full">
                {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
                  <span key={i} className={`font-label-technical font-black ${day === 'D' ? 'text-[#E53935]' : 'text-[#B0BEC5]'}`}>{day}</span>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-y-xs text-center w-full" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
                {[28, 29, 30].map((d) => (
                  <button key={d} className="h-10 w-full flex items-center justify-center font-label-technical text-[#B0BEC5]/20 disabled cursor-not-allowed">{d}</button>
                ))}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((d) => (
                  <button
                    key={d}
                    className={`h-10 w-full flex items-center justify-center font-label-technical rounded-sm transition-all ${d === selectedDate ? 'bg-[#E53935] text-white font-bold shadow-glow-sm' : 'hover:bg-[#2C2C2C] text-[#B0BEC5]'} ${d === 4 || d === 11 ? 'text-[#E53935]' : ''}`}
                    onClick={() => setSelectedDate(d)}
                  >
                    {d < 10 ? `0${d}` : d}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Step 3: Time Selection */}
          <section className="p-gutter border border-[#37474F] bg-[#1E1E1E] rounded-lg shadow-industrial-lift overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#E53935] scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
            <div className="flex items-center gap-sm mb-md relative z-10">
              <span className={`font-label-technical px-base py-xs rounded-sm ${selectedTime ? 'bg-[#E53935] text-white' : 'bg-[#37474F] text-[#B0BEC5]'}`}>03</span>
              <h3 className="font-display-lg text-lg uppercase tracking-wider">Seleccionar Hora</h3>
            </div>
            <div className="flex gap-gutter overflow-x-auto scrollbar-hide pb-xs relative z-10">
              {times.map((time) => (
                <button
                  key={time.id}
                  className={`flex-shrink-0 flex flex-col items-center gap-xs px-lg py-md border rounded-sm group/time transition-all ${selectedTime === time.id ? 'border-[#E53935] bg-[#2C2C2C] shadow-inner' : 'border-[#37474F] hover:border-[#E53935]'}`}
                  onClick={() => setSelectedTime(time.id)}
                >
                  <span className={`material-symbols-outlined ${selectedTime === time.id ? 'text-[#E53935]' : 'text-[#B0BEC5] group-hover/time:text-[#E53935]'}`}>{time.icon}</span>
                  <span className="font-label-technical uppercase font-black tracking-widest text-[12px]">{time.label}</span>
                  <span className="font-label-technical text-[10px] text-[#B0BEC5] uppercase">{time.range}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Step 4: Bike Info */}
          <section className="p-gutter border border-[#37474F] bg-[#1E1E1E] rounded-lg shadow-industrial-lift overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#E53935] scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
            <div className="flex items-center gap-sm mb-md relative z-10">
              <span className={`font-label-technical px-base py-xs rounded-sm ${bikeModel ? 'bg-[#E53935] text-white' : 'bg-[#37474F] text-[#B0BEC5]'}`}>04</span>
              <h3 className="font-display-lg text-lg uppercase tracking-wider">Detalles</h3>
            </div>
            <div className="flex flex-col gap-md relative z-10">
              <div>
                <label className="font-label-technical text-[#B0BEC5] mb-xs block uppercase font-black text-[10px] tracking-[0.2em]">Modelo de la Moto</label>
                <input 
                  className="w-full bg-[#121212] border border-[#37474F] rounded-sm p-md text-white focus:outline-none focus:border-[#E53935] transition-all font-label-technical uppercase placeholder:opacity-30" 
                  placeholder="Ej. Yamaha MT-07" 
                  type="text" 
                  value={bikeModel}
                  onChange={(e) => setBikeModel(e.target.value)}
                />
              </div>
              <div>
                <label className="font-label-technical text-[#B0BEC5] mb-xs block uppercase font-black text-[10px] tracking-[0.2em]">Descripción del Problema</label>
                <textarea 
                  className="w-full bg-[#121212] border border-[#37474F] rounded-sm p-md text-white focus:outline-none focus:border-[#E53935] transition-all font-body-md placeholder:opacity-30" 
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
              className="w-full bg-[#E53935] text-white hover:shadow-glow transition-all active:scale-95 duration-200 py-md rounded-sm font-black uppercase tracking-[0.2em] flex items-center justify-center gap-sm shadow-industrial-lift"
            >
              <span className="material-symbols-outlined">event_available</span>
              Confirmar Reserva
            </button>
            <p className="text-center font-label-technical text-[10px] text-[#B0BEC5] mt-md uppercase tracking-widest font-bold">Sujeto a disponibilidad del taller.</p>
          </div>
        </div>
      </main>

      {/* Bottom Nav Bar */}
      <BottomNav />
    </div>
  );
};

export default BookingPage;
