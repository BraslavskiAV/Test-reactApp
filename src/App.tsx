import './App.css';
import './components/Footer/Footer.css';
import Head from './pages/Main';
import Poster from './pages/Poster';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeContext from './components/providers/themeCon';

function App() {
  return (
    <>
    {/* <AddPost />*/}
    <ThemeContext>
      <BrowserRouter>
        <Routes><Route path='/' element={<Head/>}/></Routes>
        <Routes><Route path='/signin' element={<SignInPage/>}/></Routes>
        <Routes><Route path='/blog' element={<Poster/>}/></Routes>
        <Routes><Route path='/signup' element={<SignUpPage/>}/></Routes>
      </BrowserRouter>
    </ThemeContext>
    </>
  );
}

export default App;
