import Header from "../components/Header/Header"
import '../components/AddInput/AddInput.css';
import Chapters from '../components/Post/Chapter';
import AddInput from "../components/AddInput/AddInput";
import Footer from "../components/Footer/Footer";
import '../components/Footer/Footer.css'

export default function AddPost(){
return(
  <>
    <Header name='AB'>{"Andrian Braslavski"}</Header>
    <Chapters page={'Home |'}
              idOfPage={'Add post'}></Chapters>
    <AddInput />
    <Footer/>
  </>
)
}