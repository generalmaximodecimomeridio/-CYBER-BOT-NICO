import React from 'react';
import { Link } from 'react-router-dom'; 

export const Header = () => {
  return (
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
            
            <li className="nav-item">
              <a href="#" className="nav-link text-light px-2">Testimonios</a>
            </li>
            
            <li className="nav-item">
              <Link to="/procesar" className="nav-link text-neon-cyan px-2 fs-5">Procesar</Link>
            </li>
            
            <li className="nav-item">
              <Link to="/api" className="nav-link text-neon-cyan px-2 fs-5">Api</Link>
            </li>
            
            {/* LOGIN en Azul Neon */}
            <li className="nav-item">
              <Link to="/login" className="nav-link text-neon-blue px-2 fs-5">LOGIN</Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};