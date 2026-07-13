import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const NotFound = () => {
  return (
    <div className="min-vh-100 bg-black d-flex flex-column">
      <Header />

      <main className="flex-grow-1 d-flex align-items-center justify-content-center p-4">
        <div className="text-center">
          
          {/* Gato ASCII Cyber */}
          <pre
  className="sad-face text-neon-cyan mb-4"
  style={{
    fontFamily: '"Cascadia Code", Consolas, monospace',
    lineHeight: 1,
    display: "inline-block",
    textAlign: "left",
    fontSize: "16px",
    whiteSpace: "pre",
    overflow: "hidden",
    margin: 0,
    padding: 0,
    maxWidth: "100%"
  }}
>
{`           へ  Error404  ╱| 、
       ૮ - _ ՛)         (-_ - 7
        / ⁻  ៸|          |、 ⁻〵
     乀 (ˍ,ل ل           じしˍ,)ノ`}
          </pre>

          <h1 className="text-neon-cyan display-1 fw-bold mb-2">404</h1>
          <h2 className="text-neon-pink fw-bold mb-4">ERROR</h2>
          <p className="text-light fs-3 mb-5">PAGE NOT FOUND</p>

          <p className="text-muted fs-5 mb-4">
            El gato del sistema no encontró la página...
          </p>

          <Link 
            to="/" 
            className="btn btn-outline-neon-cyan btn-lg px-5 py-3 fw-bold"
          >
            ← VOLVER AL INICIO
          </Link>

        </div>
      </main>

      <Footer />
    </div>
  );
};