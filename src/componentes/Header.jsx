import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Login } from './Login'; // Importamos el modal de Login

export const Header = () => {
  // Estado para controlar si la ventana modal se muestra o no
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <header className="container mt-3 p-3 cyber-navbar border-neon-cyan rounded">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          
          <div className="d-flex align-items-center gap-3">
            <Link to="/">
              <img 
                src="src/imagenes/logo.jpg" 
                alt="Logo" 
                style={{ width: "80px", height: "auto", objectFit: "contain" }} 
              />
            </Link>

            <Link to="/" className="h4 mb-0 text-neon-green fw-bold text-decoration-none text-uppercase" style={{ letterSpacing: "1.5px" }}>
              CYBER-BOTÁNICO
            </Link>
          </div>

          <nav>
            <ul className="nav gap-3 fw-bold align-items-center">
              
              <li className="nav-item">
                <Link to="/galeria" className="nav-link text-neon-pink px-2 fs-5">Galería</Link>
              </li>
              
              <li className="nav-item">
                <Link to="/faqs" className="nav-link text-neon-purple px-2 fs-5">FAQs</Link>
              </li>
              
              {/* Le pusimos AZUL NEÓN a Testimonios */}
              <li className="nav-item">
                <Link to="/testimonios" className="nav-link text-neon-blue px-2 fs-5">Testimonios</Link>
              </li>
              
              <li className="nav-item">
                <Link to="/procesar" className="nav-link text-neon-cyan px-2 fs-5">Procesar</Link>
              </li>
              
              {/* Le pusimos NARANJA NEÓN a Api */}
              <li className="nav-item">
                <Link to="/api" className="nav-link text-orange-neon px-2 fs-5">Api</Link>
              </li>
              
              {/* BOTÓN LOGIN: Ahora abre la ventana emergente y está en Amarillo Neón */}
              <li className="nav-item">
                <button 
                  onClick={() => setShowLogin(true)} 
                  className="nav-link px-2 fs-5 border-0 bg-transparent text-uppercase"
                  style={{ color: "#ffff00", textShadow: "0 0 5px #ffff00, 0 0 10px #b3b300", cursor: "pointer" }}
                >
                  LOGIN
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* RENDERIZAMOS LA VENTANA EMERGENTE SOLO SI showLogin ES TRUE */}
      {showLogin && <Login handleClose={() => setShowLogin(false)} />}
    </>
  );
};