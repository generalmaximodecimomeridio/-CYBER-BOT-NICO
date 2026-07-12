import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Galeria = () => {
  const productos = [
    { id: 1, nombre: "Tijera de Podar", precio: "14990", img: "https://via.placeholder.com/300x200?text=Tijera+Podar", desc: "Herramienta ergonómica para poda precisa de plantas y arbustos." },
    { id: 2, nombre: "Pala Jardinera", precio: "11990", img: "https://via.placeholder.com/300x200?text=Pala+Jardinera", desc: "Pala reforzada ideal para trasplantes y movimiento de tierra." },
    { id: 3, nombre: "Manguera Reforzada", precio: "19990", img: "https://via.placeholder.com/300x200?text=Manguera", desc: "Manguera de alta resistencia con sistema anti-torsión." },
    { id: 4, nombre: "Fertilizante Orgánico", precio: "6990", img: "https://via.placeholder.com/300x200?text=Fertilizante", desc: "Abono natural rico en nutrientes para un crecimiento saludable." },
    { id: 5, nombre: "Macetero Decorativo", precio: "8990", img: "https://via.placeholder.com/300x200?text=Macetero", desc: "Diseño moderno para interiores y exteriores." },
    { id: 6, nombre: "Semillas de Césped", precio: "9990", img: "https://via.placeholder.com/300x200?text=Semillas+Cesped", desc: "Variedad de rápido crecimiento y alta resistencia." },
  ];

  return (
    <div className="min-vh-100 bg-black">
      <Header />
      
      <main className="container my-4 p-4" style={{ border: "2px solid #00f0ff", borderRadius: "8px", background: "rgba(10, 10, 10, 0.95)" }}>
        
        <h2 className="text-center fw-bold mb-5 text-neon-cyan text-uppercase" style={{ letterSpacing: "3px" }}>
          GALERÍA DE PRODUCTOS Y/O SERVICIOS
        </h2>

        <div className="row g-4">
          {productos.map((producto) => (
            <div key={producto.id} className="col-md-4 col-sm-6">
              <div className="border border-neon-cyan rounded p-3 h-100 bg-dark text-light">
                
                <h5 className="text-neon-green fw-bold mb-2">{producto.nombre}</h5>
                <p className="text-neon-cyan mb-3"><strong>Precio: ${producto.precio}</strong></p>

                <div className="border border-2 border-dark mb-3" style={{ height: "200px", backgroundColor: "#1a1a1a" }}>
                  <img 
                    src={producto.img} 
                    alt={producto.nombre} 
                    className="w-100 h-100" 
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label text-light">Cantidad:</label>
                  <input 
                    type="number" 
                    className="form-control bg-dark text-light border-neon-cyan" 
                    min="1" 
                    defaultValue="1"
                  />
                </div>

                <p className="text-light small">{producto.desc}</p>

              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};