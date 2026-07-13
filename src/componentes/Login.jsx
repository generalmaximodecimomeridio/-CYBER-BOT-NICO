import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    usuario: '',
    contraseña: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🔐 Inicio de sesión simulado - ¡Bienvenido a Cyber-Botánico!");
    // Aquí puedes agregar lógica real después
  };

  return (
    <div className="min-vh-100 bg-black d-flex flex-column">
      <Header />

      <main className="container my-5 flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "420px" }}>
          <div className="modal-content border-neon-pink bg-black text-light" 
               style={{ boxShadow: "0 0 30px #ff00ff" }}>
            
            {/* Header del Modal */}
            <div className="modal-header border-bottom border-neon-pink">
              <h5 className="modal-title text-neon-pink fw-bold text-uppercase">INICIO DE SESIÓN</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>

            {/* Body */}
            <div className="modal-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label text-neon-green fw-bold">Usuario</label>
                  <input 
                    type="text" 
                    name="usuario"
                    value={formData.usuario}
                    onChange={handleChange}
                    className="form-control bg-dark text-light border-neon-cyan" 
                    placeholder="Ingresa tu usuario"
                    required 
                  />
                </div>

                <div className="mb-4 position-relative">
                  <label className="form-label text-neon-green fw-bold">Contraseña</label>
                  <div className="input-group">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      name="contraseña"
                      value={formData.contraseña}
                      onChange={handleChange}
                      className="form-control bg-dark text-light border-neon-cyan" 
                      placeholder="••••••••"
                      required 
                    />
                    <button 
                      type="button"
                      className="btn border-neon-cyan text-neon-cyan"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        // Ojo cerrado
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                          <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-3.79 1.11L13.359 11.238z"/>
                          <path d="M5.5 8a2.5 2.5 0 0 1 3.24-2.39L5.5 8z"/>
                          <path d="M16 8s-3 5.5-8 5.5a7 7 0 0 1-3.79-1.11L13.359 11.238 16 8z"/>
                        </svg>
                      ) : (
                        // Ojo abierto
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8z"/>
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-success fw-bold py-3 text-uppercase border-neon-green">
                    LOGIN
                  </button>
                </div>

                <div className="text-center mt-3">
                  <a href="#" className="text-neon-cyan text-decoration-underline">
                    ¿Olvidaste tu Contraseña?
                  </a>
                </div>
              </form>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};