import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Upload } from './Upload';

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
      <BrowserRouter>
         <Upload />
      </BrowserRouter>
   </Provider>
)
