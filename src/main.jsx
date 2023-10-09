import React from 'react'
import ReactDOM from 'react-dom/client';
import FirstApp from './FirstApp';
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <FirstApp title="Genshin Impact"
       title2="Personajes actualmente disponibles en el juego" 
       title3="Sujeto a cambios" 
       sum={75} />
  </React.StrictMode>
)
