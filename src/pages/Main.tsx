import '../components/Header/Header.css';
import '../components/Blog/BiggestBlog.css';
import '../components/Blog/MiddleBlog.css';
import '../components/Like/Like.css';
import '../components/Blog/LittleBlog.css';
import '../components/Pagination/Pagination.css';
import '../components/Tabs/Tabs.css';
import '../components/SignUp/SignUp.css';
import BiggestBlog from '../components/Blog/BiggestBlog';
import Tabs from '../components/Tabs/Tabs';
import LikeButton from '../components/Like/Like';
import { Posts } from '../components/Data';
import MiddleBlog from '../components/Blog/MiddleBlog';
import LittleBlog from '../components/Blog/LittleBlog';
import Pagination from '../components/Pagination/Paginayion';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { myContext } from '../components/providers/themeCon';
import { useContext } from 'react';

export default function Head() {

  const [color, setColor] = useContext(myContext);

  const alertButton = function (): void {
    alert("Button left")
  }

  

  return (
    <>
    <div className={`mainContainer${color}`}>
      <Header name='AB'>{"Andrian Braslavski"}</Header>
      <div className='tabs'>
        <p className={`title-blog${color}`}>{'Blog'}</p>
        <div className="tabs-container">
          <Tabs isDisabled={false}
            typeButton={`myTab${color}`}>{"All"}</Tabs>
          <Tabs isDisabled={false}
            typeButton={`myTab${color}`}>{"My favorites"}</Tabs>
          <Tabs isDisabled={false}
            typeButton={`myTab${color}`}>{"Popular"}</Tabs>
        </div>
      </div>
      <div className='main-blog'>
        <div className="container-blog">
          <div className='block-left'>
            <div className='big-blog'>
              <BiggestBlog date={Posts[0].date}
                title={Posts[0].title}
                subtitle={Posts[0].description}
                source={Posts[0].image} />
              <div className="block-rating">
                <LikeButton></LikeButton>
              </div>
            </div>
            <div className='middle__block'>
              <div className='mid-blog'>
                <MiddleBlog date={Posts[1].date}
                  title={Posts[1].title}
                  source={Posts[1].image} />
              </div>
              <div className='mid-blog'>
                <MiddleBlog date={Posts[2].date}
                  title={Posts[2].title}
                  source={Posts[2].image} />
              </div>
              <div className='mid-blog'>
                <MiddleBlog date={Posts[3].date}
                  title={Posts[3].title}
                  source={Posts[3].image} />
              </div>
              <div className='mid-blog'>
                <MiddleBlog date={Posts[4].date}
                  title={Posts[4].title}
                  source={Posts[4].image} />
              </div>
            </div>
          </div>
          <div className='block-right'>
            <LittleBlog date={Posts[5].date}
              title={Posts[5].title}
              source={Posts[5].image}/>
            <LittleBlog date={Posts[6].date}
              title={Posts[6].title}
              source={Posts[6].image}/>
            <LittleBlog date={Posts[7].date}
              title={Posts[7].title}
              source={Posts[7].image}/>
            <LittleBlog date={Posts[8].date}
              title={Posts[8].title}
              source={Posts[8].image}/>
            <LittleBlog date={Posts[9].date}
              title={Posts[9].title}
              source={Posts[9].image}/>
          </div>
        </div>
        <Pagination isDisabled={false}
        clickFuncPagin={alertButton}
        text='Prew'
        anyPage='5'
        page='1'> Next </Pagination>
      </div>
      <Footer/>
    </div>
    </>
  )
}

