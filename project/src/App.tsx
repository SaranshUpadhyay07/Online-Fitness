import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CoachDetail from './pages/CoachDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coach/:id" element={<CoachDetail />} />
    </Routes>
  );
}

export default App;