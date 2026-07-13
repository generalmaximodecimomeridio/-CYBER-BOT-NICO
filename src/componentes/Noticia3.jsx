import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

import imgCompost from '../imagenes/compost organico madurado.jpg';

export const Noticia3 = () => {
  return (
    <div>
      <Header />
      
      <main className="container my-4 p-4 border-neon-cyan rounded" style={{ background: "rgba(10, 10, 10, 0.95)" }}>
        
        <h3 className="text-center fw-bold mb-4 text-neon-pink">Compost Orgánico Madurado - El Secreto de un Jardín Saludable</h3>

        {/* Imagen Principal Centrada */}
<div className="border border-2 border-neon-cyan mb-4 overflow-hidden rounded d-flex justify-content-center align-items-center" 
     style={{ height: "280px", backgroundColor: "#111" }}>
  
  <img 
    src={imgCompost} 
    alt="Pala Jardinera" 
    style={{ 
      maxWidth: "100%", 
      maxHeight: "100%", 
      objectFit: "contain" 
    }} 
  />
</div>

        <div className="border border-2 border-neon-pink p-4 text-light mb-4 rounded">
          <p className="mb-0 fs-5">
            Compost orgánico madurado. El nutriente esencial para que tu jardín prospere en cualquier temporada.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="border border-2 border-neon-cyan p-4 h-100 text-light rounded">
              <p>Rico en nutrientes naturales y microorganismos beneficiosos.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border border-2 border-neon-cyan p-4 h-100 text-light rounded">
              <p>Mejora la estructura del suelo y retiene mejor la humedad.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border border-2 border-neon-cyan p-4 h-100 text-light rounded">
              <p>100% orgánico y apto para agricultura ecológica.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};