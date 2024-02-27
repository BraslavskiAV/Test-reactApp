import IPoster from '../interfaces/PosterInterface';
import image from '../../assets/Rectangle 42.png'

function Post({text, titlePost}:IPoster) {
  return ( 
    <>
    <div className="post-main">
      <div className='post-container'>
        <p className='title-post'>{text}</p>
        <div className='page-image'>
          <img src={image} className='image'></img>
        </div>
        <p className='post-text'>{titlePost}</p>
      </div>
    </div>
    </>
  );
}

export default Post;