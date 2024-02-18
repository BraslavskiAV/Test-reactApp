import React, { useState } from 'react';

import Like from '../../assets/Icon-Thumbs-Up.png';
import Dislike from '../../assets/Down.png';
import Saved from '../../assets/Bookmark.png';
import More from '../../assets/Icon-More-Horizontal.png'

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleDislikeClick = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <>
    <div className="like-container">
      <button onClick={handleLikeClick}
              className='button-like'>
        <img src={Like} alt="like" />
      </button>
      <span className="like-count">{likes}</span>
      <button onClick={handleDislikeClick}
              className='button-dislike'>
        <img src={Dislike} alt='Dislike'/>
      </button>
      <span className="like-count">{dislikes}</span>
    </div>
    <div className='more'>
      <img src={Saved} alt="saved" />
      <img src={More} alt="more" />
    </div>
    </>
  );
};

export default LikeButton;