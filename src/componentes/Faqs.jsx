import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Faqs = () => {
  const faqs = [
    {
      id: "collapseOne",
      pregunta: "¿Cómo realizan los despachos dentro de Chile?",
      respuesta: "Hacemos envíos a todo el territorio nacional a través de agencias de transporte integradas en nuestra red. El tiempo estimado de entrega varía entre 48 y 72 horas hábiles dependiendo de la región."
    },
    {
      id: "collapseTwo",
      pregunta: "¿Los productos importados cuentan con garantía oficial?",
      respuesta: "Sí, todas nuestras herramientas automáticas y manuales importadas cuentan con una garantía técnica de 6 meses contra cualquier falla de fabricación."
    },
    {
      id: "collapseThree",
      pregunta: "¿Cómo funciona la regla de disponibilidad e imágenes?",
      respuesta: "Nuestro inventario actualiza dinámicamente. Si el producto tiene imagen válida se muestra como 'Disponible', de lo contrario aparece como 'Agotado'."
    },
    {
      id: "collapseFour",
      pregunta: "¿Qué métodos de pago acepta el sistema?",
      respuesta: "Aceptamos Webpay, transferencias bancarias y pasarelas seguras. Toda transacción queda registrada de forma segura en el sistema."
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