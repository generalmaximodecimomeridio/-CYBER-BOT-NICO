import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

// Importar las imágenes
import persona1 from '../imagenes/persona1.jpg';
import persona2 from '../imagenes/persona2.jpg';
import persona3 from '../imagenes/persona3.jpg';
import persona4 from '../imagenes/persona4.jpg';
import persona5 from '../imagenes/persona5.jpg';
import persona6 from '../imagenes/persona6.jpg';

export const Testimonios = () => {
  const testimoniosData = [
    { id: 1, nombre: "Hatsune Cyber", imagen: persona1, texto: "Al principio no sabía ni cómo regar una planta... ahora controlo todo desde mi interfaz neural. ¡Gracias Cyber-Botánico!" },
    { id: 2, nombre: "Zero Two Gardener", imagen: persona2, texto: "El sistema de riego inteligente me salvó la vida. Mi jardín cyberpunk ahora brilla más que nunca 💀🌿" },
    { id: 3, nombre: "Anya Forger", imagen: persona3, texto: "¡Me gusta mucho el compost! Mis plantas crecen super rápido y ya no se mueren. Waku waku~" },
    { id: 4, nombre: "Cat Programmer", imagen: persona4, texto: "El gato del equipo aprueba esta plataforma. La API es tan buena que hasta él puede usarla." },
    { id: 5, nombre: "Hamster Hacker", imagen: persona5, texto: "No entiendo nada de jardinería pero la interfaz es tan fácil que hasta yo logré cultivar algo. 10/10" },
    { id: 6, nombre: "Miku Root", imagen: persona6, texto: "Implementaron más herramientas como pedí. Ahora mi jardín es más eficiente que mi setup de streaming." }
  ];

  return (
    <div className="min-vh-100 bg-black d-flex flex-column text-light">
      <Header />

      <main className="container my-5 flex-grow-1">
        <h2 className="text-center text-neon-green mb-5 fw-bold text-uppercase" style={{ letterSpacing: "2px" }}>
          TESTIMONIOS DE USUARIOS
        </h2>

        <div className="row row-cols-1 row-cols-md-3 g-5">
          {testimoniosData.map((user) => (
            <div className="col" key={user.id}>
              <div className="d-flex flex-column align-items-center h-100">
                
                {/* Imagen Circular - Versión Final */}
                <div 
                  className="mb-4 d-flex justify-content-center align-items-center overflow-hidden" 
                  style={{ 
                    width: "180px",      // ← Más grande
                    height: "195px",     // ← Más grande
                    borderRadius: "100%", 
                    border: "5px solid #00ffff",
                    boxShadow: "0 0 35px #00ffff" 
                  }}
                >
                  <img 
                    src={user.imagen} 
                    alt={user.nombre} 
                    style={{ 
                      width: "100", 
                      height: "100%", 
                      objectFit: "cover",     // ← Volvimos a cover para que llene mejor
                      backgroundColor: "#111" 
                    }} 
                  />
                </div>

                <div className="bg-dark border-neon-pink px-4 py-2 mb-3 rounded text-center w-100">
                  <h5 className="text-neon-pink fw-bold m-0 text-uppercase">{user.nombre}</h5>
                </div>

                <div className="bg-dark border-neon-cyan p-4 rounded text-center w-100 h-100 flex-grow-1 d-flex align-items-center shadow">
                  <p className="card-text text-light m-0 fst-italic">"{user.texto}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};