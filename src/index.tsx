import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Head from './pages/Main';
import Poster from './pages/Poster';
import AddPost from './pages/AddPost';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Head />
    <Poster />
    <AddPost />
    <App />
    <SignUpPage/>
    <SignInPage/>
  </React.StrictMode>
);
