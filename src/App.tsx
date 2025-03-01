import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Index from './components/index';

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
