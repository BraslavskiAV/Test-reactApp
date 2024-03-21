import './App.css';
import Head from './pages/Main';
import Poster from './pages/Poster';
import AddPost from './pages/AddPost';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    {/* <AddPost />
    <SignUpPage/> */}
    <BrowserRouter>
      <Routes><Route path='/' element={<Head/>}/></Routes>
      <Routes><Route path='/SignIn' element={<SignInPage/>}/></Routes>
      <Routes><Route path='/blog' element={<Poster/>}/></Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
