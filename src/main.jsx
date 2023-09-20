import React from 'react'
import ReactDOM from 'react-dom/client';
import FirstApp from './FirstApp';
import ComponentApp from './ComponentApp';
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp 
    title="GENSHIN IMPACT" 
    title2="Travelers: Hydro, Anemo, Dendro, Electro"
    title3=" Personajes Iniciales: Amber, Lisa, Kaeya, Barbara, Xiangling"
    value={10}/>
    <ComponentApp
    />
  </React.StrictMode>
)
