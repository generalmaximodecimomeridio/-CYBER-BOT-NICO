import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Noticia1 = () => {
  return (
    <div>
      {/* Carga el Header arriba */}
      <Header />
      
      {/* Contenedor principal con el borde negro grueso */}
      <main className="container my-4 p-4" style={{ border: "2px solid black" }}>
        
        {/* Título de la noticia */}
        <h3 className="text-center fw-bold mb-4">Título de Noticia 1</h3>

        {/* Caja 1: Imagen Principal */}
        <div className="border border-2 border-dark d-flex justify-content-center align-items-center mb-4" 
             style={{ height: "250px", backgroundColor: "#f8f9fa" }}>
          <h4 className="fw-bold mb-0">Imagen Principal de Noticia 1</h4>
          {/* Cuando tengas la imagen real, puedes reemplazar el <h4> de arriba por:
              <img src={rutaDeTuImagen} alt="Noticia 1" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> 
          */}
        </div>

        {/* Caja 2: Párrafo Principal (Resumen) */}
        <div className="border border-2 border-dark p-4 text-center mb-4 d-flex justify-content-center align-items-center">
          <p className="mb-0 fs-5">
            Párrafo de texto principal de noticia 1 <br/>
            (descripción general resumida).
          </p>
        </div>

        {/* Caja 3: Las 3 columnas inferiores */}
        <div className="row g-4 mb-2">
          
          {/* Columna Izquierda */}
          <div className="col-md-4">
            <div className="border border-2 border-dark p-4 h-100 text-center d-flex align-items-center justify-content-center">
              <p className="mb-0">Párrafo de texto con la primera parte de la noticia.</p>
            </div>
          </div>
          
          {/* Columna Central */}
          <div className="col-md-4">
            <div className="border border-2 border-dark p-4 h-100 text-center d-flex align-items-center justify-content-center">
              <p className="mb-0">Párrafo de texto con la segunda parte de la noticia.</p>
            </div>
          </div>
          
          {/* Columna Derecha */}
          <div className="col-md-4">
            <div className="border border-2 border-dark p-4 h-100 text-center d-flex align-items-center justify-content-center">
              <p className="mb-0">Párrafo de texto con la tercera parte de la noticia.</p>
            </div>
          </div>

        </div>
      </main>

      {/* Carga el Footer abajo */}
      <Footer />
    </div>
  );
};