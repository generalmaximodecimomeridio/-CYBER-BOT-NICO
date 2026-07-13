import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Faqs = () => {
  const faqs = [
    {
      id: "collapseOne",
      pregunta: "¿El uso del sitio web tiene algún costo?",
      respuesta: "Texto descriptivo, respondiendo a la pregunta."
    },
    {
      id: "collapseTwo",
      pregunta: "¿Puedo acceder al sitio desde dispositivos móviles?",
      respuesta: "Texto descriptivo, respondiendo a la pregunta."
    },
    {
      id: "collapseThree",
      pregunta: "¿Existe algún límite de zona para usar la aplicación?",
      respuesta: "Texto descriptivo, respondiendo a la pregunta."
    },
    {
      id: "collapseFour",
      pregunta: "¿Es seguro ingresar mis datos personales en este sitio?",
      respuesta: "Texto descriptivo, respondiendo a la pregunta."
    },
    {
      id: "collapseFive",
      pregunta: "¿Cómo puedo actualizar mis datos personales?",
      respuesta: "Texto descriptivo, respondiendo a la pregunta."
    },
    {
      id: "collapseSix",
      pregunta: "¿Olvidé mi contraseña, cómo puedo recuperarla?",
      respuesta: "Texto descriptivo, respondiendo a la pregunta."
    },
    {
      id: "collapseSeven",
      pregunta: "¿Cómo puedo contactar al servicio de atención al cliente?",
      respuesta: "Texto descriptivo, respondiendo a la pregunta."
    }
  ];

  return (
    <div className="min-vh-100 bg-black d-flex flex-column">
      <Header />

      <main className="container my-4 p-4 flex-grow-1 border-neon-pink rounded" 
            style={{ background: "rgba(10, 10, 10, 0.95)" }}>
        
        <h2 className="text-center fw-bold mb-5 text-neon-pink text-uppercase" style={{ letterSpacing: "3px" }}>
          PREGUNTAS FRECUENTES (FAQS)
        </h2>

        <div className="accordion" id="accordionFaqs">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="accordion-item mb-3 border-neon-cyan bg-black rounded overflow-hidden">
              <h2 className="accordion-header" id={`heading${index}`}>
                <button 
                  className="accordion-button collapsed bg-dark text-neon-green fw-bold d-flex justify-content-between align-items-center"
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target={`#${faq.id}`} 
                  aria-expanded="false" 
                  aria-controls={faq.id}
                >
                  <span>💀 {faq.pregunta}</span>
                  
                  {/* Iconos que cambian según estado */}
                  <span className="accordion-chevron ms-3">
                    {/* Chevron Right (cerrado) */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    {/* Chevron Down (abierto) - se muestra con Bootstrap */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-chevron-down d-none" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </span>
                </button>
              </h2>
              
              <div 
                id={faq.id} 
                className="accordion-collapse collapse" 
                aria-labelledby={`heading${index}`} 
                data-bs-parent="#accordionFaqs"
              >
                <div className="accordion-body text-light bg-black border-top border-neon-cyan">
                  {faq.respuesta}
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