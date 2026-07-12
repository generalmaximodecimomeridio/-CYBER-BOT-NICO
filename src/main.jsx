import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 👇 ESTA ES LA LÍNEA QUE VA A REVIVIR TU DISEÑO 👇
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)