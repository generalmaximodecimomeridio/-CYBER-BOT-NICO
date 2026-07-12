import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Inicio } from './componentes/Inicio';
import { Noticia1 } from './componentes/Noticia1'; 
import { Noticia2 } from './componentes/Noticia2';
import { Noticia3 } from './componentes/Noticia3';
import { Api } from './componentes/Api';
import { Galeria } from './componentes/Galeria';   // ← Nueva importación

import 'bootstrap/dist/css/bootstrap.min.css';
import './componentes/estetic.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        
        <Route path="/Noticia1" element={<Noticia1 />} />
        <Route path="/Noticia2" element={<Noticia2 />} /> 
        <Route path="/Noticia3" element={<Noticia3 />} />
        
        <Route path="/api" element={<Api />} />
        <Route path="/galeria" element={<Galeria />} />   {/* ← Nueva ruta */}

        <Route path="*" element={<h1 className="text-center mt-5">404 - Página no encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default App;