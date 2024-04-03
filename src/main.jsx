import React from 'react'
import ReactDOM from 'react-dom/client'
import { GamesApp } from './GamesApp'
import './styles.css'
import CollapsibleExample from './NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'






ReactDOM.createRoot(document.getElementById('root')).render(
    
    <BrowserRouter>
    <CollapsibleExample/>
    <Routes>
      {/* Ruta para '/home' */}
      <Route path="/" element={<GamesApp />} />
    
    

    </Routes>

    </BrowserRouter>
    
    
)
