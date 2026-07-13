import React, { useState, useEffect } from 'react';

// =====================================================================
// IMPORTACIONES DE IMÁGENES
// =====================================================================
import imgAbono from '../imagenes/hunus de lombriz premium.jpg';
import imgSemilla from '../imagenes/cemilla.jpg';
import imgHerramienta from '../imagenes/Motocultivador a Gasolina Compacto.jpg';
import imgRiego from '../imagenes/riesgintel.jpg';
import imgPlanta from '../imagenes/Almácigo de Espinaca Matador.jpg';

function CarruselPublicidad() {
  const [indiceActivo, setIndiceActivo] = useState(0);
  const [animando, setAnimando] = useState(false);

  // Agregamos la propiedad 'imagen' a cada objeto del arreglo
  const anuncios = [
    { id: 1, titulo: "Abono Orgánico Premium", desc: "Nutrientes naturales de alta absorción para un crecimiento óptimo.", color: "text-neon-green", imagen: imgAbono },
    { id: 2, titulo: "Semillas de Cultivo", desc: "Variedades seleccionadas con alta resistencia y bajo consumo hídrico.", color: "text-neon-cyan", imagen: imgSemilla },
    { id: 3, titulo: "Herramientas de Jardinería", desc: "Tijeras de podar y palas ergonómicas fabricadas en acero reforzado.", color: "text-neon-pink", imagen: imgHerramienta },
    { id: 4, titulo: "Sistemas de Riego Eficiente", desc: "Controladores automáticos de flujo para optimizar el uso de agua.", color: "text-neon-cyan", imagen: imgRiego },
    { id: 5, titulo: "Plantas Ornamentales", desc: "Variedades de interior y exterior listas para trasplantes directos.", color: "text-neon-green", imagen: imgPlanta }
  ];

  // Función para manejar el cambio manual con la animación
  const cambiarSlide = (nuevoIndice) => {
    setAnimando(true);
    setTimeout(() => {
      setIndiceActivo(nuevoIndice);
      setAnimando(false);
    }, 400); // 400ms para que calce perfecto con la transición de tu estetic.css
  };

  const irAnterior = () => cambiarSlide((indiceActivo - 1 + anuncios.length) % anuncios.length);
  const irSiguiente = () => cambiarSlide((indiceActivo + 1) % anuncios.length);

  // El auto-play ahora se reinicia si el usuario hace clic manualmente
  useEffect(() => {
    const intervalo = setInterval(() => {
      irSiguiente();
    }, 5000);
    return () => clearInterval(intervalo);
  }, [indiceActivo]); // Agregamos indiceActivo aquí para reiniciar el contador

  return (
    // Agregué un minHeight para asegurar que el carrusel tenga buen tamaño y la imagen se aprecie bien
    <div className="w-100 overflow-hidden position-relative my-2 p-1 border-neon-cyan rounded bg-black d-flex flex-column justify-content-center" style={{ minHeight: "350px" }}>
      
      {/* ========================================================= */}
      {/* CAPA DE IMAGEN DE FONDO (Opaca y con transición) */}
      {/* ========================================================= */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url(${anuncios[indiceActivo].imagen})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // Cuando está animando baja la opacidad a 0, creando un suave efecto de transición
          opacity: animando ? 0 : 0.25, 
          transition: 'opacity 0.4s ease-out',
          zIndex: 0 // Lo mantenemos al fondo
        }}
      />

      {/* Botón Anterior */}
      <button 
        onClick={irAnterior}
        className="btn position-absolute top-50 start-0 translate-middle-y ms-2 text-neon-cyan fs-2 bg-transparent border-0"
        style={{ zIndex: 10 }}
      >
        &#10094;
      </button>

      {/* Contenido animado */}
      <div 
        className={`py-5 px-5 text-center ${animando ? 'carrusel-impulso' : 'carrusel-estatico'} position-relative`} 
        style={{ zIndex: 1 }} // Z-index 1 para que quede por encima de la imagen
      >
        <div className="container py-2">
          {/* Corregido el renderizado del ID */}
          <span className="badge border-neon-pink text-neon-pink mb-2">Novedades {anuncios[indiceActivo].id}</span>
          <h2 className={`display-5 fw-bold ${anuncios[indiceActivo].color}`}>
            {anuncios[indiceActivo].titulo}
          </h2>
          <p className="lead text-light mt-2" style={{ textShadow: "1px 1px 3px #000" }}>
            {anuncios[indiceActivo].desc}
          </p>
        </div>
      </div>

      {/* Botón Siguiente */}
      <button 
        onClick={irSiguiente}
        className="btn position-absolute top-50 end-0 translate-middle-y me-2 text-neon-cyan fs-2 bg-transparent border-0"
        style={{ zIndex: 10 }}
      >
        &#10095;
      </button>

      {/* Paginación (Barritas clickeables) */}
      <div className="d-flex justify-content-center pb-3 position-relative mt-auto" style={{ zIndex: 10 }}>
        {anuncios.map((_, idx) => (
          <div 
            key={idx}
            onClick={() => cambiarSlide(idx)}
            className="mx-1 rounded-circle"
            style={{
              width: idx === indiceActivo ? '24px' : '8px',
              height: '8px',
              backgroundColor: idx === indiceActivo ? '#00f0ff' : '#333',
              transition: 'all 0.3s ease',
              cursor: 'pointer' /* Cambia el mouse a manito para indicar que se puede clickear */
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default CarruselPublicidad;