import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

import imgTijera from '../imagenes/Tijera Cortasetos de Dos Manos.png';

export const Noticia2 = () => {
  return (
    <div>
      <Header />
      
      <main className="container my-4 p-4 border-neon-cyan rounded" style={{ background: "rgba(10, 10, 10, 0.95)" }}>
        
        <h3 className="text-center fw-bold mb-4 text-neon-pink">Tijera Cortasetos de Dos Manos - Precisión Profesional</h3>

        <div className="border border-2 border-neon-cyan mb-4 overflow-hidden rounded">
          <img 
            src={imgTijera} 
            alt="Tijera Cortasetos" 
            className="w-100" 
            style={{ height: "350px", objectFit: "cover" }} 
          />
        </div>

        <div className="border border-2 border-neon-pink p-4 text-light mb-4 rounded">
          <p className="mb-0 fs-5">
            Tijera Cortasetos de Dos Manos. Herramienta de alta precisión para tus setos y arbustos.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="border border-2 border-neon-cyan p-4 h-100 text-light rounded">
              <p>Diseño ergonómico que reduce la fatiga en sesiones largas de poda.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border border-2 border-neon-cyan p-4 h-100 text-light rounded">
              <p>Hojas afiladas de acero premium para cortes limpios y precisos.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border border-2 border-neon-cyan p-4 h-100 text-light rounded">
              <p>Ideal para jardines grandes y mantenimiento profesional.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};