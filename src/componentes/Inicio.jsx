/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// CORRECCIÓN: Se importan con llaves { } porque usaste "export const Inicio" 
import { Inicio } from './componentes/Inicio';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-vh-100">
        <Routes>
          {/* Rutas principales *///}
          //<Route path="/" element={<Inicio />} />
          //<Route path="/inicio" element={<Inicio />} />
          
          //{/* Agrega el resto de tus rutas aquí a futuro */}
          
          //{/* Pantalla 404 adaptada al estilo del mockup (Bordes rojos de Bootstrap) */}
          //<Route path="*" element={
            //<div className="container text-center my-5 p-5 border border-2 border-danger text-danger">
              //<h3 className="fw-bold">ERROR 404 - Ruta No Encontrada</h3>
              //<p className="text-dark">La página que buscas no existe o fue movida.</p>
            //</div>
          /*} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;*/
import React from 'react';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';

export const Inicio = () => {
  return (
    <div className="min-vh-100">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};