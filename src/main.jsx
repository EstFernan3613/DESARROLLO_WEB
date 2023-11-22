import React from 'react'
import ReactDOM from 'react-dom/client';
import FirstApp from './FirstApp';
import ComponentApp from './ComponentApp';
import { Memorize } from './Components/Memorize';
import { MainApp } from './pages/MainApp';
import './index.css'
import './App.css'
import { TodoApp } from './TodoApp';
import { LinkApp } from './LinkApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
        <MainApp />
  </BrowserRouter>
//     <React.StrictMode>
//     <FirstApp 
//     title="GENSHIN IMPACT" 
//     title2="Travelers: Hydro, Anemo, Dendro, Electro"
//     title3=" Personajes Iniciales: Amber, Lisa, Kaeya, Barbara, Xiangling"
//     value={10}/>
//     <ComponentApp
//     />
//     <Memorize />
//     <TodoApp />
//  </React.StrictMode>
)
