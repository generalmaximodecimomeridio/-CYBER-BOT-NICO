import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

// ¡AQUÍ ESTÁ LA CLAVE! Exportar con el nombre exacto que busca App.jsx
export const Noticia3 = () => {
  return (
    <div>
      <Header />
      
      <main className="container my-4 p-4" style={{ border: "2px solid black" }}>
        <h3 className="text-center fw-bold mb-4">Título de Noticia 3</h3>

        <div className="border border-2 border-dark d-flex justify-content-center align-items-center mb-4" 
             style={{ height: "250px", backgroundColor: "#f8f9fa" }}>
          <h4 className="fw-bold mb-0">Imagen Principal de Noticia 3</h4>
        </div>

        <div className="border border-2 border-dark p-4 text-center mb-4 d-flex justify-content-center align-items-center">
          <p className="mb-0 fs-5">
            Párrafo de texto principal de noticia 3 <br/>
            (descripción general resumida).
          </p>
        </div>

        <div className="row g-4 mb-2">
          <div className="col-md-4">
            <div className="border border-2 border-dark p-4 h-100 text-center d-flex align-items-center justify-content-center">
              <p className="mb-0">Párrafo de texto con la primera parte de la noticia.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border border-2 border-dark p-4 h-100 text-center d-flex align-items-center justify-content-center">
              <p className="mb-0">Párrafo de texto con la segunda parte de la noticia.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border border-2 border-dark p-4 h-100 text-center d-flex align-items-center justify-content-center">
              <p className="mb-0">Párrafo de texto con la tercera parte de la noticia.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};