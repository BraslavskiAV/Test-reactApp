import '../components/SignUp/SignUp.css';
import Header from '../components/Header/Header';
import SignUp from '../components/SignUp/SignUp';
import Footer from '../components/Footer/Footer';


function SignUpPage() {
  return ( 
  <>
  <Header name='SU'>{'Sign Up'}</Header>
  <SignUp></SignUp>
  <Footer></Footer>
  </>
  );
}

export default SignUpPage;