import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';
import FirstApp from './FirstApp';
import ComponentApp from './ComponentApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp 
    title="GENSHIN IMPACT" 
    title2="Travelers: Hydro, Anemo, Dendro, Electro"
    title3=" Personajes: Amber, Eula, Diluc, Sucrose, Raiden, Navia"
    value={1}/>
    <ComponentApp
    />
  </React.StrictMode>
)
