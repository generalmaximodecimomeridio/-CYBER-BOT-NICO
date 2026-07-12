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
              <a href="#" className="nav-link text-light px-2">FAQs</a>
            </li>
            
            <li className="nav-item">
              <a href="#" className="nav-link text-light px-2">Testimonios</a>
            </li>
            
            <li className="nav-item">
              <a href="#" className="nav-link text-light px-2">Procesar</a>
            </li>
            
            <li className="nav-item">
              <Link to="/api" className="nav-link text-neon-cyan px-2 fs-5">Api</Link>
            </li>
            
            {/* LOGIN en Naranja Neon */}
            <li className="nav-item">
              <a href="#" className="nav-link text-orange-neon px-2 fs-5">LOGIN</a>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};