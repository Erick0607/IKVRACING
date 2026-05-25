import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import DashboardPage from './pages/DashboardPage';
import StorePage from './pages/StorePage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* Fallback to dashboard if route not found */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
