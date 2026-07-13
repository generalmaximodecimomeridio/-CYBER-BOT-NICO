import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

// =====================================================================
// IMPORTACIONES DE IMÁGENES
// =====================================================================
import imgPala from '../imagenes/palametalanegra.jpg';
import imgHerramientas from '../imagenes/herramientas_jardin01.jpg';

const mapImagenes = {
  "pala jardinera": imgPala,
  "pala": imgPala,
  "tijera de podar": imgHerramientas,
  "tijera": imgHerramientas,
  "herramientas": imgHerramientas,
};

export const Api = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/API_JSON/19_jardineria_api.json')
      .then(res => {
        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
        return res.json();
      })
      .then(datos => {
        let listado = datos.listado_jardineria || datos.data || datos.productos || datos || [];

        const productosProcesados = listado.map((item, index) => {
          const productoRaw = item?.producto || item?.nombre || `Producto ${index + 1}`;
          const nombreLimpio = String(productoRaw).trim().toLowerCase();

          let imagen = null;
          for (const [clave, img] of Object.entries(mapImagenes)) {
            if (nombreLimpio.includes(clave)) {
              imagen = img;
              break;
            }
          }

          const precio = item?.vivero?.precio ?? item?.precio ?? 'N/A';
          const categoria = item?.vivero?.herramienta?.categoria ?? item?.categoria ?? 'Sin categoría';
          const uso = item?.vivero?.herramienta?.uso ?? item?.uso ?? 'Sin información';
          const proveedor = item?.vivero?.herramienta?.proveedor?.nombre ?? item?.proveedor ?? 'Sin proveedor';

          return {
            ...item,
            id: item?.id || index,
            producto: productoRaw,
            imagen,
            // Si hay imagen es Disponible, si no, es Agotado
            estado: imagen ? "Disponible" : "Agotado",
            precio,
            categoria,
            uso,
            proveedor
          };
        });

        setProductos(productosProcesados);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error cargando JSON:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-vh-100 d-flex flex-column bg-black">
        <Header />
        <div className="flex-grow-1 d-flex align-items-center justify-content-center">
          <h3 className="text-center text-neon-cyan">Cargando inventario...</h3>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-vh-100 d-flex flex-column bg-black">
        <Header />
        <div className="flex-grow-1 d-flex align-items-center justify-content-center text-danger">
          <h4>Error: {error}</h4>
          <p>Verifica que el archivo /API_JSON/19_jardineria_api.json exista.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-vh-100 bg-black d-flex flex-column">
      <Header />
      
      <main className="container my-4 p-4 flex-grow-1 border-neon-cyan rounded" style={{ background: "rgba(10, 10, 10, 0.95)" }}>
        
        <h2 className="text-center fw-bold mb-5 text-neon-cyan text-uppercase" style={{ letterSpacing: "3px" }}>
          INVENTARIO CYBER-BOTÁNICO
        </h2>

        <div className="row g-4">
          {productos.map((item) => (
            <div key={item.id} className="col-md-4 col-sm-6">
              <div className="cyber-card border-neon-cyan p-0 h-100 text-light rounded position-relative overflow-hidden" style={{ backgroundColor: "#111" }}>
                
                {/* === CONDICIÓN DE IMAGEN === */}
                {item.estado === "Agotado" ? (
                  <div className="caja-agotado d-flex flex-column align-items-center justify-content-center bg-dark" style={{ height: "220px", borderBottom: "1px solid #00f0ff" }}>
                    <h4 className="text-danger fw-bold m-0">AGOTADO</h4>
                    <span className="text-muted small mt-2">(Sin Imagen)</span>
                  </div>
                ) : (
                  <img 
                    src={item.imagen} 
                    alt={item.producto} 
                    className="w-100" 
                    style={{ height: "220px", objectFit: "cover", borderBottom: "1px solid #00f0ff" }}
                  />
                )}

                <div className="p-4">
                  <h5 className="fw-bold text-neon-green mb-3 text-uppercase">{item.producto}</h5>
                  
                  <p className="mb-1"><strong>Precio:</strong> <span className="text-neon-yellow">${item.precio}</span></p>
                  <p className="mb-1"><strong>Categoría:</strong> {item.categoria}</p>
                  <p className="mb-1"><strong>Uso:</strong> {item.uso}</p>
                  
                  <hr className="border-neon-pink" />
                  
                  <p className="mb-0">
                    <strong>Proveedor:</strong> <span className="text-neon-cyan">{item.proveedor}</span>
                  </p>

                  <div className={`mt-3 badge ${item.estado === "Disponible" ? "bg-success border border-success" : "bg-dark text-danger border border-danger"}`}>
                    {item.estado}
                  </div>
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