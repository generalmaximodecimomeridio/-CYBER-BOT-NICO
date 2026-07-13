import React from 'react';

export const Footer = () => {
  return (
    <footer 
      className="container mb-3 p-4 text-light" 
      style={{ 
        backgroundColor: "rgba(10, 10, 10, 0.85)", /* Negro intenso pero 85% opaco */
        backdropFilter: "blur(5px)", /* Difumina ligeramente lo que hay detrás */
        borderRadius: "10px",
        border: "1px solid #00ffff", /* Borde neón cian sutil */
        boxShadow: "0 0 15px rgba(0, 255, 255, 0.1)" /* Sombra cian muy suave */
      }}
    >
      <div className="row">
        
        {/* Columna Izquierda - Derechos y Redes */}
        <div className="col-md-6 d-flex flex-column">
          <h5 className="fw-bold mb-4 text-neon-green">©2026 Derechos</h5>
          <div>
            <p className="mb-2 fw-bold">
              Instagram: <a href="#" className="text-neon-cyan text-decoration-underline fw-normal">Link</a>
            </p>
            <p className="mb-2 fw-bold">
              Facebook: <a href="#" className="text-neon-cyan text-decoration-underline fw-normal">Link</a>
            </p>
            <p className="mb-0 fw-bold">
              LinkedIn: <a href="#" className="text-neon-cyan text-decoration-underline fw-normal">Link</a>
            </p>
          </div>
        </div>

        {/* Columna Derecha - Información Relevante */}
        <div className="col-md-6 d-flex flex-column">
          <h5 className="fw-bold mb-4 text-neon-green">Información Relevante</h5>
          <div>
            <p className="mb-2 fw-bold">
              Ubicación: <span className="fst-italic fw-normal text-light">Texto Inventado.</span>
            </p>
            <p className="mb-2 fw-bold">
              Fono <span className="ms-4 text-neon-pink">:</span> <span className="fst-italic fw-normal text-light">Texto Inventado.</span>
            </p>
            <p className="mb-0 fw-bold">
              Director <span className="ms-3 text-neon-pink">:</span> <span className="fst-italic fw-normal text-light">Texto Inventado.</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};