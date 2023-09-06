import React from 'react'
import ReactDOM from 'react-dom/client';
import FirstApp from './FirstApp';
import ComponentApp from './ComponentApp';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp 
    title="GENSHIN IMPACT" 
    title2="Travelers: Hydro, Anemo, Dendro, Electro"
    title3=" Personajes: Amber, Eula, Diluc, Sucrose, Raiden, Kaeya"
    value={10}/>
    <ComponentApp
    />
  </React.StrictMode>
)
