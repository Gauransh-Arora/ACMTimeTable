import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import './App.css'
import Schedule from './pages/Schedule';
import Maintenance from './pages/Maintenance';


function App() {
  // Set this to false to disable maintenance mode
  const isMaintenanceMode = false;

  return (
    <>
      <BrowserRouter>
        {isMaintenanceMode ? (
          <Routes>
            <Route path="*" element={<Maintenance />} />
          </Routes>
        ) : (
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path ="/schedule/:sub" element = { <Schedule /> } />




            <Route path="*" element={<NotFound />} />
          </Routes>
        )} 
      </BrowserRouter>
    </>
  )
}

export default App
