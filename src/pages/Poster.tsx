import '../components/Header/Header.css';
import '../components/Post/Post.css'
import Header from "../components/Header/Header"
import Post from "../components/Post/Post";
import { Posts } from '../components/Data';


function Poster() {
  return ( 
    <>
    <div className="header">
    <Header name='AB'>{"Andrian Braslavski"}</Header>
    </div>
    <Post text="Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
    titlePost={Posts[10].text}></Post>
    </>
  );
}

export default Poster;