import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Head from './pages/Main';
import Poster from './pages/Poster';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Head />
    <Poster />
    <App />
  </React.StrictMode>
);
