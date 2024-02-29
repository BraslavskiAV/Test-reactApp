import Header from "../components/Header/Header"
import '../components/AddInput/AddInput.css';
import { Posts } from '../components/Data';
import Chapters from '../components/Post/Chapter';
import AddInput from "../components/AddInput/AddInput";

export default function AddPost(){
return(
  <>
    <div className="header">
      <Header name='AB'>{"Andrian Braslavski"}</Header>
    </div>
    <Chapters page={'Home |'}
              idOfPage={'Add post'}></Chapters>
    <AddInput />
  </>
)
}