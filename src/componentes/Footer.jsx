import React from 'react';

export const Footer = () => {
  return (
    <footer className="container mb-3 p-4" style={{ border: "2px solid red" }}>
      <div className="row">
        
        {/* Columna Izquierda - Derechos y Redes */}
        <div className="col-md-6 d-flex flex-column">
          <h5 className="fw-bold mb-4">©2026 Derechos</h5>
          <div>
            <p className="mb-2 fw-bold">Instagram: <a href="#" className="text-primary text-decoration-underline fw-normal">Link</a></p>
            <p className="mb-2 fw-bold">Facebook: <a href="#" className="text-primary text-decoration-underline fw-normal">Link</a></p>
            <p className="mb-0 fw-bold">LinkedIn: <a href="#" className="text-primary text-decoration-underline fw-normal">Link</a></p>
          </div>
        </div>

        {/* Columna Derecha - Información Relevante */}
        <div className="col-md-6 d-flex flex-column">
          <h5 className="fw-bold mb-4">Información Relevante</h5>
          <div>
            <p className="mb-2 fw-bold">Ubicación: <span className="fst-italic fw-normal">Texto Inventado.</span></p>
            <p className="mb-2 fw-bold">Fono <span className="ms-4">:</span> <span className="fst-italic fw-normal">Texto Inventado.</span></p>
            <p className="mb-0 fw-bold">Director <span className="ms-3">:</span> <span className="fst-italic fw-normal">Texto Inventado.</span></p>
          </div>
        </div>

      </div>
    </footer>
  );
};