import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import DevEdit from './pages/DevEdit';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/editar/:username" element={<DevEdit />} />
      </Routes>
    </BrowserRouter>
  );
}
