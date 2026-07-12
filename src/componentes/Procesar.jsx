import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Procesar = () => {
  // 1. Inicializamos el estado leyendo el 'localStorage'. 
  // Si hay datos guardados previamente, los cargamos; si no, iniciamos vacío.
  const [registros, setRegistros] = useState(() => {
    const datosGuardados = localStorage.getItem('registros_cyberbotanicos');
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });

  const [formData, setFormData] = useState({
    dato1: '', dato2: '', dato3: '', dato4: '', dato5: '',
    dato6: '', dato7: '', dato8: 'Opción 1', dato9: '', dato10: ''
  });

  // 2. Cada vez que 'registros' cambie, lo guardamos automáticamente en localStorage
  useEffect(() => {
    localStorage.setItem('registros_cyberbotanicos', JSON.stringify(registros));
  }, [registros]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'radio' ? (checked ? value : formData[name]) : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistros([...registros, formData]);
    // Limpiamos el formulario
    setFormData({
      dato1: '', dato2: '', dato3: '', dato4: '', dato5: '',
      dato6: '', dato7: '', dato8: 'Opción 1', dato9: '', dato10: ''
    });
  };

  const eliminarRegistro = (index) => {
    const nuevaLista = registros.filter((_, i) => i !== index);
    setRegistros(nuevaLista);
  };

  // 3. FUNCIÓN PARA CARGAR EL JSON Y GUARDARLO EN STORAGE
  const cargarDatosJSON = async () => {
    try {
      // Usamos la misma ruta que usa tu Api.jsx
      const res = await fetch('/API_JSON/19_jardineria_api.json');
      if (!res.ok) throw new Error("No se pudo cargar el JSON");
      
      const data = await res.json();
      const listado = data.listado_jardineria || [];

      // Procesamos los valores brutos del JSON para adaptarlos a tu tabla de "Datos"
      const registrosProcesados = listado.map((item) => ({
        dato1: item.producto,                                 // Nombre
        dato2: item.vivero.precio,                            // Precio
        dato3: item.vivero.herramienta.categoria,             // Categoría
        dato4: item.vivero.herramienta.uso,                   // Uso
        dato5: item.vivero.herramienta.proveedor.nombre,      // Proveedor
        dato6: item.vivero.asesoria.ventas,                   // Fono Ventas
        dato7: item.vivero.asesoria.mantencion,               // Fono Mantención
        dato8: `Cód: ${item.vivero.herramienta.codigo}`,      // Código
        dato9: 'Importado JSON',                              // Etiqueta
        dato10: 'Disponible'                                  // Estado
      }));

      // Agregamos los nuevos registros a los que ya existen
      setRegistros([...registros, ...registrosProcesados]);
      alert("¡Datos del JSON procesados y guardados en Storage con éxito!");

    } catch (error) {
      console.error("Error al procesar el JSON:", error);
      alert("Error al cargar el JSON. Revisa la consola.");
    }
  };

  // 4. FUNCIÓN PARA LIMPIAR TODO EL STORAGE
  const purgarSistema = () => {
    if (window.confirm("¿Estás seguro de eliminar todos los registros del Storage?")) {
      setRegistros([]);
      localStorage.removeItem('registros_cyberbotanicos');
    }
  };

  // Cálculos estadísticos usando Dato2 (Precio)
  const cantidad = registros.length;
  const suma = registros.reduce((acc, reg) => acc + (Number(reg.dato2) || 0), 0);
  const promedio = cantidad > 0 ? (suma / cantidad).toFixed(2) : 0;

  return (
    <div className="min-vh-100 bg-black d-flex flex-column">
      <Header />

      <main className="container my-4 flex-grow-1">
        <div className="p-4 border-neon-pink rounded" style={{ background: "rgba(15, 10, 20, 0.95)" }}>
          
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold m-0 text-neon-pink text-uppercase" style={{ letterSpacing: "2px" }}>
              Gestión de Base de Datos
            </h2>
            <div className="d-flex gap-2">
              <button onClick={cargarDatosJSON} className="btn btn-outline-neon-cyan fw-bold">
                📥 Cargar JSON Bruto
              </button>
              <button onClick={purgarSistema} className="btn btn-outline-danger fw-bold text-shadow">
                ☠️ Purgar Storage
              </button>
            </div>
          </div>

          {/* ================= FORMULARIO ================= */}
          <form onSubmit={handleSubmit} className="text-light">
            <div className="row mb-3 align-items-center">
              <div className="col-md-2">
                <label className="col-form-label fw-bold text-neon-green">Producto (Dato1):</label>
              </div>
              <div className="col-md-4">
                <div className="input-group border-neon-cyan rounded">
                  <input type="text" name="dato1" value={formData.dato1} onChange={handleChange} className="form-control bg-dark text-light border-0" required />
                  <button className="btn bg-neon-cyan border-0 text-black fw-bold" type="button">🔍</button>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4 d-flex align-items-center gap-2">
                <label className="fw-bold text-neon-green">Precio (Dato2):</label>
                <input type="number" name="dato2" value={formData.dato2} onChange={handleChange} className="form-control bg-dark text-light border-neon-cyan" placeholder="Ej: 15000" />
              </div>
              <div className="col-md-4 d-flex align-items-center gap-2">
                <label className="fw-bold text-neon-green">Categoría (Dato3):</label>
                <input type="text" name="dato3" value={formData.dato3} onChange={handleChange} className="form-control bg-dark text-light border-neon-cyan" />
              </div>
              <div className="col-md-4 d-flex align-items-center gap-2">
                <label className="fw-bold text-neon-green">Uso (Dato4):</label>
                <input type="text" name="dato4" value={formData.dato4} onChange={handleChange} className="form-control bg-dark text-light border-neon-cyan" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4 d-flex align-items-center gap-2">
                <label className="fw-bold text-neon-green">Proveedor (Dato5):</label>
                <select name="dato5" value={formData.dato5} onChange={handleChange} className="form-select bg-dark text-light border-neon-cyan">
                  <option value="">Seleccione</option>
                  <option value="GardenTools">GardenTools</option>
                  <option value="AgroRiego">AgroRiego</option>
                  <option value="BioCultivo">BioCultivo</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div className="col-md-4 d-flex align-items-center gap-2">
                <label className="fw-bold text-neon-green">Fono 1 (Dato6):</label>
                <input type="text" name="dato6" value={formData.dato6} onChange={handleChange} className="form-control bg-dark text-light border-neon-cyan" />
              </div>
              <div className="col-md-4 d-flex align-items-center gap-2">
                <label className="fw-bold text-neon-green">Fono 2 (Dato7):</label>
                <input type="text" name="dato7" value={formData.dato7} onChange={handleChange} className="form-control bg-dark text-light border-neon-cyan" />
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-4 d-flex flex-column justify-content-center">
                <div className="d-flex align-items-center gap-2 mb-1">
                  <label className="fw-bold me-2 text-neon-green">Tipo (Dato8):</label>
                  <input type="radio" name="dato8" value="Opción 1" checked={formData.dato8 === 'Opción 1'} onChange={handleChange} className="form-check-input mt-0 bg-dark border-neon-pink" />
                  <span>Nacional</span>
                </div>
                <div className="d-flex align-items-center gap-2 ms-5">
                  <input type="radio" name="dato8" value="Opción 2" checked={formData.dato8 === 'Opción 2'} onChange={handleChange} className="form-check-input mt-0 bg-dark border-neon-pink" />
                  <span>Importado</span>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center gap-2">
                <label className="fw-bold text-neon-green">Notas (Dato9):</label>
                <input type="text" name="dato9" value={formData.dato9} onChange={handleChange} className="form-control bg-dark text-light border-neon-cyan" />
              </div>
              <div className="col-md-4 d-flex align-items-center gap-2">
                <label className="fw-bold text-neon-green">Estado (Dato10):</label>
                <select name="dato10" value={formData.dato10} onChange={handleChange} className="form-select bg-dark text-light border-neon-cyan">
                  <option value="">Seleccione</option>
                  <option value="Disponible">Disponible</option>
                  <option value="Agotado">Agotado</option>
                </select>
              </div>
            </div>

            <div className="text-center mt-4">
              <button type="submit" className="btn px-5 py-2 fw-bold text-uppercase border-neon-green text-light" style={{ backgroundColor: "#1b8a07" }}>
                Registrar En Sistema 💾
              </button>
            </div>
          </form>

          {/* ================= LISTADO STORAGE ================= */}
          <div className="mt-5 p-3 border border-1 border-neon-cyan bg-black rounded position-relative">
            <h3 className="text-center fw-bold mb-3 text-neon-cyan">
              Registros en Almacenamiento Local (Storage)
            </h3>
            
            <div className="d-flex justify-content-center gap-5 mb-4 fw-bold fs-5">
              <span className="text-neon-pink">Total Registros: {cantidad}</span>
              <span className="text-neon-green">Inversión: ${suma.toLocaleString('es-CL')}</span>
              <span className="text-neon-cyan">Promedio: ${promedio}</span>
            </div>

            <div className="table-responsive">
              <table className="table table-dark table-hover text-center align-middle" style={{ borderCollapse: "separate", borderSpacing: "0 5px" }}>
                <thead>
                  <tr className="text-neon-pink">
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Categoría</th>
                    <th>Uso</th>
                    <th>Proveedor</th>
                    <th>Fono 1</th>
                    <th>Fono 2</th>
                    <th>Tipo</th>
                    <th>Notas</th>
                    <th>Estado</th>
                    <th className="text-danger">Del</th>
                  </tr>
                </thead>
                <tbody>
                  {registros.length === 0 ? (
                    <tr>
                      <td colSpan="11" className="text-muted py-4">Sistema vacío. Ingresa datos o carga el JSON.</td>
                    </tr>
                  ) : (
                    registros.map((item, index) => (
                      <tr key={index} style={{ backgroundColor: "#111", borderBottom: "1px solid #ff00ff" }}>
                        <td className="text-light fw-bold">{item.dato1}</td>
                        <td className="text-neon-green">${item.dato2}</td>
                        <td>{item.dato3}</td>
                        <td>{item.dato4}</td>
                        <td>{item.dato5}</td>
                        <td className="small">{item.dato6}</td>
                        <td className="small">{item.dato7}</td>
                        <td>{item.dato8}</td>
                        <td className="fst-italic">{item.dato9}</td>
                        <td>
                          <span className={`badge ${item.dato10 === 'Disponible' ? 'bg-success' : 'bg-secondary'}`}>
                            {item.dato10}
                          </span>
                        </td>
                        <td>
                          <button onClick={() => eliminarRegistro(index)} className="btn btn-sm btn-outline-danger border-0 fs-5">
                            ❌
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};