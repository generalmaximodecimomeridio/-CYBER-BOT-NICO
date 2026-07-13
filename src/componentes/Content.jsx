import React from 'react';
import { Link } from 'react-router-dom'; 
import CarruselPublicidad from './CarruselPublicidad';
import fotoUsuario from '../imagenes/usuario.jpg'; 

// 👇 Importaciones agregadas (no se borró nada)
import imgPala from '../imagenes/palametalanegra.jpg'; 
import imgTijera from '../imagenes/Tijera Cortasetos de Dos Manos.png'; 
import imgCompost from '../imagenes/compost organico madurado.jpg'; 

export const Content = () => {
  
  // Actualización del arreglo de noticias
  const noticias = [
    {
      id: 1,
      titulo: "Noticia 1",
      imagen: imgPala,
      texto: "¡Alerta! tu hijo tiene miedo o es alergico a la pala revisa nuestra producot par agente alergica a la pala",
      link: "/Noticia1"
    },
    {
      id: 2,
      titulo: "Noticia 2",
      imagen: imgTijera,
      texto: "Tijera Cortasetos de Dos Manos. Herramienta de alta precisión para tus setos.",
      link: "/Noticia2"
    },
    {
      id: 3,
      titulo: "Noticia 3",
      imagen: imgCompost,
      texto: "Compost orgánico madurado. El nutriente esencial para que tu jardín prospere en cualquier temporada.",
      link: "/Noticia3"
    }
  ];

  return (
    <main className="container my-4 p-4 border-neon-cyan rounded" style={{ background: "rgba(10, 10, 10, 0.95)" }}>
      <h3 className="text-center fw-bold mb-4 text-neon-cyan text-uppercase">Página de Inicio</h3>

      {/* Nuestra Misión */}
      <div className="border border-neon-pink rounded p-4 text-center mb-4 bg-black text-light">
        <h5 className="fw-bold mb-2 text-neon-pink">Nuestra Misión:</h5>
        <p className="mb-0">Ser el aliado digital indispensable para cada entusiasta de la agricultura y la jardinería. En Cyber-Botánico, nuestra misión es potenciar tu pasión por cultivar, brindándote herramientas tecnológicas precisas y accesibles que faciliten el cuidado de tus plantas, optimicen tus cultivos y te conecten profundamente con la naturaleza en la era moderna.</p>
      </div>

      {/* Carrusel Interactivo y Animado */}
      <CarruselPublicidad />

      {/* Noticias - Apiladas verticalmente */}
      <div className="d-flex flex-column gap-3 mb-5 mt-4 text-light">
        {noticias.map((noticia) => (
          <div key={noticia.id} className="row g-3 align-items-center">
            
            {/* Columna de la Imagen */}
            <div className="col-md-3">
              <div className="border border-neon-cyan rounded d-flex flex-column justify-content-center align-items-center p-0 text-center fw-bold overflow-hidden bg-black" style={{ height: "150px" }}>
                {noticia.imagen ? (
                  <img 
                    src={noticia.imagen} 
                    alt={noticia.titulo} 
                    className="w-100 h-100" 
                    style={{ objectFit: "cover" }} 
                  />
                ) : (
                  <div className="text-neon-cyan">Sin Imagen</div>
                )}
              </div>
            </div>

            {/* Columna del Texto */}
            <div className="col-md-9">
              <div className="border border-neon-cyan rounded h-100 d-flex align-items-center justify-content-center p-4 bg-black">
                <p className="mb-0 text-center fs-5">
                  {noticia.texto}
                  
                  <Link to={noticia.link} className="text-neon-pink text-decoration-underline ms-2 fw-bold text-nowrap">
                    [Leer Más]
                  </Link>
                </p>
              </div>
            </div>
            
          </div>
        ))}
      </div>

      {/* Estudiante Destacado */}
      <div className="text-center mt-5 mb-3 text-light">
        <div className="mx-auto rounded-circle border border-2 border-neon-green d-flex flex-column justify-content-center align-items-center mb-3 overflow-hidden shadow-lg" 
             style={{ width: "220px", height: "220px", backgroundColor: "#000", boxShadow: "0 0 20px #39ff14" }}>
          
          <img 
            src={fotoUsuario} 
            alt="Foto de shnaider" 
            style={{ width: "100%", height: "100%", objectFit: "cover" }} 
          />
          
        </div>
        <h5 className="fw-bold mb-1 text-neon-green">shnaider</h5>
        <h6 className="fw-bold mb-1 text-neon-cyan">Analista Programador</h6>
        <h6 className="fw-bold mb-0 text-light">Sección Rancagua</h6>
        <h6 className="fw-bold mb-0 text-muted fst-italic mt-2">"Yo y dios con los desafios del mundo"</h6>
        <h6 className="fw-bold mb-0 text-muted fst-italic mt-2">"O TI3V31/V-IEC-N3-P2-C2 B/V"</h6>
      </div>
    </main>
  );
};