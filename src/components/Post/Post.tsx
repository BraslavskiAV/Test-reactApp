import React, { useState } from 'react';

import IPoster from '../interfaces/PosterInterface';
import image from '../../assets/Rectangle 42.png';
import Like from '../../assets/Icon-Thumbs-Up.png';
import Dislike from '../../assets/Down.png';
import Saved from '../../assets/Bookmark.png';

function Post({text, titlePost, postLikeClick}:IPoster) {

  const [buttonColor, setButtonColor] = useState('default');

  const changeColor = () => {
    if (buttonColor === 'default') {
      setButtonColor('#E8E8E8');
    } else {
      setButtonColor('grey');
    }
  };

  return ( 
    <>
    <div className="post-main">
      <div className='post-container'>
        <p className='title-post'>{text}</p>
        <div className='page-image'>
          <img src={image} className='image'></img>
        </div>
        <p className='post-text'>{titlePost}</p>
        <div className='post-buttons'>
          <div className='post-likes'>
            <button onClick={changeColor}
            style={{ backgroundColor: buttonColor }}
            className='like'>
            <img src={Like}></img>
            </button>
            <button onClick={changeColor}
            style={{ backgroundColor: buttonColor }}
            className='dislike'>
            <img src={Dislike}></img>
            </button>
          </div>
          <div className='post-saved'>
            <button onClick={changeColor}
            className='saved'>
            <img src={Saved}></img>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Post;