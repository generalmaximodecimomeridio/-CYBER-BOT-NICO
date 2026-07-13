import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Inicio } from './componentes/Inicio';
import { Noticia1 } from './componentes/Noticia1'; 
import { Noticia2 } from './componentes/Noticia2';
import { Noticia3 } from './componentes/Noticia3';
import { Api } from './componentes/Api';
import { Galeria } from './componentes/Galeria';
import { Procesar } from './componentes/Procesar'; 
import { Faqs } from './componentes/Faqs'; 
import { NotFound } from './componentes/NotFound'; 

// IMPORTACIÓN DEL LOGIN AÑADIDA AQUÍ 👇
import { Login } from './componentes/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import './componentes/estetic.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas Principales */}
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        
        {/* Sección de Noticias */}
        <Route path="/Noticia1" element={<Noticia1 />} />
        <Route path="/Noticia2" element={<Noticia2 />} /> 
        <Route path="/Noticia3" element={<Noticia3 />} />
        
        {/* Componentes de la Aplicación */}
        <Route path="/api" element={<Api />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/procesar" element={<Procesar />} /> 
        <Route path="/faqs" element={<Faqs />} /> 

        {/* RUTA DEL LOGIN AÑADIDA AQUÍ 👇 */}
        <Route path="/login" element={<Login />} /> 

        {/* Página 404 Personalizada Cyberpunk (Siempre al final) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

// NO BORRAR EL COMENTARIO DE ABAJO 
//npm install bootstrap react-bootstrap react-router-dom

// NO BORRAR EL COMENTARIO DE ABAJO 
//npm install bootstrap react-bootstrap react-router-dom
//