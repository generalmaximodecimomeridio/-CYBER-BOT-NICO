import React from 'react';
import { Link } from 'react-router-dom'; // 👇 1. Agregamos esta importación para los enlaces
import CarruselPublicidad from './CarruselPublicidad';
import fotoUsuario from '../imagenes/usuario.jpg'; 

export const Content = () => {
  return (
    <main className="container my-4 p-4" style={{ border: "2px solid black" }}>
      <h3 className="text-center fw-bold mb-4">Página de Inicio</h3>

      {/* Nuestra Misión */}
      <div className="border border-2 border-dark p-4 text-center mb-4">
        <h5 className="fw-bold mb-2">Nuestra Misión:</h5>
        <p className="mb-0">Texto descriptivo inventado según el contexto/temática.</p>
      </div>

      {/* Carrusel Interactivo y Animado */}
      <CarruselPublicidad />

      {/* Noticias - Apiladas verticalmente */}
      <div className="d-flex flex-column gap-3 mb-5 mt-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="row g-3">
            <div className="col-md-3">
              <div className="border border-2 border-dark h-100 d-flex flex-column justify-content-center align-items-center p-4 text-center fw-bold">
                <div>Noticia {i}</div>
                <div>(Imagen)</div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="border border-2 border-dark h-100 d-flex align-items-center justify-content-center p-4">
                <p className="mb-0 text-center">
                  Párrafo descriptivo indicando un resumen de la noticia indicada... 
                  
                  <Link to={`/Noticia${i}`} className="text-primary text-decoration-underline ms-1 fw-bold">
                    click
                  </Link>

                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Estudiante Destacado */}
      <div className="text-center mt-5 mb-3">
        <div className="mx-auto rounded-circle border border-2 border-dark d-flex flex-column justify-content-center align-items-center mb-3 overflow-hidden" 
             style={{ width: "220px", height: "220px", backgroundColor: "#fff" }}>
          
          <img 
            src={fotoUsuario} 
            alt="Foto de shnaider" 
            style={{ width: "100%", height: "100%", objectFit: "cover" }} 
          />
          
        </div>
        <h5 className="fw-bold mb-1">shnaider</h5>
        <h6 className="fw-bold mb-1">Analista Programador</h6>
        <h6 className="fw-bold mb-0">Sección Rancagua</h6>
      </div>
    </main>
  );
};