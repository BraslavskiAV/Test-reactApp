import '../components/Header/Header.css';
import '../components/Blog/Blog.css'
import '../components/Like/Like.css'
import Header from '../components/Header/Header';
import Blog from '../components/Blog/Blog'
import Tabs from '../components/Tabs/Tabs';
import LikeButton from '../components/Like/Like';




export default function Head() {
  const blogDate = function (): any {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${dd}.${mm}.${yyyy}`;
  }

  return (
    <>
      <div className="header">
        <Header name='AB'>{"Andrian Braslavski"}</Header>
      </div>
      <div className='tabs'>
        <p className='title-blog'>{'Blog'}</p>
        <div className="tabs-container">
          <Tabs isDisabled={false}
            typeButton='myTab all'>{"All"}</Tabs>
          <Tabs isDisabled={false}
            typeButton='myTab favorite'>{"My favorites"}</Tabs>
          <Tabs isDisabled={false}
            typeButton='myTab popular'>{"Popular"}</Tabs>
        </div>
      </div>
      <div className='main-blog'>
        <div className="container-blog">
          <Blog date={blogDate()}
            title='Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...'
            subtitle='Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.'></Blog>
          <div className="block-rating">
            <LikeButton></LikeButton>
          </div>
        </div>
      </div>
    </>
  )
}

