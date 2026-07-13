import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

import imgPala from '../imagenes/palametalanegra.jpg';

export const Noticia1 = () => {
  return (
    <div>
      <Header />
      
      <main className="container my-4 p-4 border-neon-cyan rounded" style={{ background: "rgba(10, 10, 10, 0.95)" }}>
        
        <h3 className="text-center fw-bold mb-4 text-neon-pink">¡Alerta! Pala y Alergias en el Jardín</h3>

        {/* Imagen Principal */}
        <div className="border border-2 border-neon-cyan mb-4 overflow-hidden rounded d-flex justify-content-center align-items-center" 
     style={{ height: "280px", backgroundColor: "#111" }}>
  
  <img 
    src={imgPala} 
    alt="Pala Jardinera" 
    style={{ 
      maxWidth: "100%", 
      maxHeight: "100%", 
      objectFit: "contain" 
    }} 
  />
</div>

        {/* Resumen */}
        <div className="border border-2 border-neon-pink p-4 text-light mb-4 rounded">
          <p className="mb-0 fs-5">
            ¡Alerta! Tu hijo tiene miedo o es alérgico a la pala. Revisa nuestra protección para agentes alérgicos a la pala. 
            La jardinería puede ser peligrosa si no se toman las precauciones adecuadas.
          </p>
        </div>

        {/* Tres columnas */}
        <div className="row g-4">
          <div className="col-md-4">
            <div className="border border-2 border-neon-cyan p-4 h-100 text-light rounded">
              <p>Las palas son herramientas esenciales, pero pueden causar alergias por el contacto con metales y tierra contaminada.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border border-2 border-neon-cyan p-4 h-100 text-light rounded">
              <p>Recomendamos usar guantes especiales y palas con mango ergonómico para evitar lesiones y reacciones alérgicas.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border border-2 border-neon-cyan p-4 h-100 text-light rounded">
              <p>En Cyber-Botánico te ofrecemos alternativas seguras y herramientas hipoalergénicas para toda la familia.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};