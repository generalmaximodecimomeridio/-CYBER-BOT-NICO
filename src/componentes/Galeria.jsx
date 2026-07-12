import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Galeria = () => {
  const productos = [
    { id: 1, nombre: "Tijera de Podar", precio: "14990", desc: "Herramienta ergonómica para poda precisa de plantas y arbustos." },
    { id: 2, nombre: "Pala Jardinera", precio: "11990", desc: "Pala reforzada ideal para trasplantes y movimiento de tierra." },
    { id: 3, nombre: "Manguera Reforzada", precio: "19990", desc: "Manguera de alta resistencia con sistema anti-torsión." },
    { id: 4, nombre: "Fertilizante Orgánico", precio: "6990", desc: "Abono natural rico en nutrientes para un crecimiento saludable." },
    { id: 5, nombre: "Macetero Decorativo", precio: "8990", desc: "Diseño moderno para interiores y exteriores." },
    { id: 6, nombre: "Semillas de Césped", precio: "9990", desc: "Variedad de rápido crecimiento y alta resistencia." },
  ];

  return (
    <div className="min-vh-100 bg-black">
      <Header />
      
      <main className="container my-4 p-4 border-neon-cyan rounded" style={{ background: "rgba(10, 10, 10, 0.95)" }}>
        
        <h2 className="text-center fw-bold mb-5 text-neon-cyan text-uppercase" style={{ letterSpacing: "3px" }}>
          GALERÍA DE PRODUCTOS Y/O SERVICIOS
        </h2>

        <div className="row g-4">
          {productos.map((producto) => (
            <div key={producto.id} className="col-md-4 col-sm-6">
              <div className="cyber-card border-neon-cyan p-0 h-100 text-light rounded overflow-hidden">
                
                {/* Imagen */}
                <div className="border-bottom border-neon-cyan" style={{ height: "200px", backgroundColor: "#1a1a1a" }}>
                  <img 
                    src={`https://via.placeholder.com/400x200/0a0a0a/00ffff?text=${producto.nombre.replace(/ /g, '+')}`} 
                    alt={producto.nombre} 
                    className="w-100 h-100" 
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className="p-4">
                  <h5 className="fw-bold text-neon-green mb-3">{producto.nombre}</h5>
                  
                  <p className="mb-2"><strong className="text-neon-cyan">Precio:</strong> <span className="text-neon-cyan">${producto.precio}</span></p>
                  
                  <div className="mb-3">
                    <label className="form-label text-light fw-bold">Cantidad:</label>
                    <input 
                      type="number" 
                      className="form-control bg-dark text-light border-neon-cyan" 
                      min="1" 
                      defaultValue="1"
                    />
                  </div>

                  <p className="text-light small mb-0">{producto.desc}</p>
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