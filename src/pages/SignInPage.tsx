import '../components/SignIn/SignIn.css'
import SignIn from '../components/SignIn/SignIn';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function SignInPage() {
  return (  
    <>
    <Header name='SI'>{'Sign In'}</Header>
    <SignIn></SignIn>
    <Footer></Footer>
    </>
  );
}

export default SignInPage;