import React, { useState, useEffect } from 'react';

// Recibe la función handleClose desde el Header para poder cerrarse
export const Login = ({ handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    usuario: '',
    contraseña: ''
  });

  // Inyecta el script de Tenor para que el GIF funcione
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); 
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🔐 Inicio de sesión simulado - ¡Bienvenido a Cyber-Botánico!");
    handleClose(); // Cierra la ventana tras "iniciar sesión"
  };

  return (
    /* CAPA OSCURA DE FONDO (Overlay) */
    <div 
      className="position-fixed top-0 start-0 vw-100 vh-100 d-flex justify-content-center align-items-center" 
      style={{ zIndex: 9999, backgroundColor: 'rgba(0, 0, 0, 0.75)', backdropFilter: 'blur(5px)' }}
    >
      
      {/* CONTENEDOR DEL FORMULARIO */}
      <div className="modal-dialog modal-dialog-centered w-100 px-3" style={{ maxWidth: "420px" }}>
        
        {/* LA CAJA NEON (Con overflow-hidden para que el GIF no se salga de los bordes curvos) */}
        <div className="modal-content border-neon-pink text-light p-1 shadow-lg position-relative overflow-hidden" 
             style={{ 
               boxShadow: "0 0 40px rgba(255, 0, 255, 0.6)", 
               backgroundColor: "rgba(10, 10, 10, 0.95)", 
               borderRadius: "12px"
             }}>
          
          {/* 💥 FONDO ANIMADO DE TENOR (DEDSEC) INTEGRADO DENTRO DE LA VENTANA 💥 */}
          <div className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center" 
               style={{ top: 0, left: 0, zIndex: 0, opacity: 0.35, pointerEvents: 'none' }}>
            <div style={{ width: '100%' }}>
              <div className="tenor-gif-embed" data-postid="16933832306325286942" data-share-method="host" data-aspect-ratio="1" data-width="100%">
                <a href="https://tenor.com/view/dedsec-gif-16933832306325286942">Dedsec GIF</a> from <a href="https://tenor.com/search/dedsec-gifs">Dedsec GIFs</a>
              </div>
            </div>
          </div>

          {/* CONTENIDO REAL DEL FORMULARIO (z-index: 1 para que quede encima del GIF) */}
          <div className="position-relative z-1">
            
            {/* Header del Modal con botón de cerrar */}
            <div className="modal-header border-bottom border-neon-pink p-3 d-flex justify-content-between align-items-center">
              <h5 className="modal-title text-neon-pink fw-bold text-uppercase m-0">INICIO DE SESIÓN</h5>
              <button 
                type="button" 
                className="btn-close btn-close-white" 
                onClick={handleClose} /* Llama a la función para cerrar */
                aria-label="Cerrar"
                style={{ filter: "drop-shadow(0 0 5px #ff00ff)" }}
              ></button>
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
                      className="btn border-neon-cyan text-neon-cyan bg-dark"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                          <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-3.79 1.11L13.359 11.238z"/>
                          <path d="M5.5 8a2.5 2.5 0 0 1 3.24-2.39L5.5 8z"/>
                          <path d="M16 8s-3 5.5-8 5.5a7 7 0 0 1-3.79-1.11L13.359 11.238 16 8z"/>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8z"/>
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="d-grid mt-5">
                  <button type="submit" className="btn btn-success fw-bold py-3 text-uppercase border-neon-green shadow-sm">
                    ACCEDER AL SISTEMA
                  </button>
                </div>

                <div className="text-center mt-4">
                  <a href="#" className="text-neon-cyan text-decoration-none border-bottom border-neon-cyan pb-1">
                    ¿Recuperar Contraseña?
                  </a>
                </div>
              </form>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};