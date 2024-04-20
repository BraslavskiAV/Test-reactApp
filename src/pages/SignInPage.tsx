import '../components/SignIn/SignIn.css';
import SignIn from '../components/SignIn/SignIn';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useState } from 'react';

function SignInPage() {

  const [arrayUser, setArrayUser] = useState([])

  function onChangeUser(value: any) {
    setArrayUser(value);
  }

  return (  
    <>
    <Header name='SI'>{'Sign In'}</Header>
    <SignIn onChangeUser={onChangeUser}></SignIn>
    <Footer></Footer>
    </>
  );
}

export default SignInPage;