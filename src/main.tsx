import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/style.scss'
// import './styles/debug.css'
import 'bootstrap/dist/js/bootstrap.min.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)