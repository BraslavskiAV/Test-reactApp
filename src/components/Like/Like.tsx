import React, { useState } from 'react';

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
        <svg className='like-svg' width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.292 19.65C18.218 20.136 17.794 20.5 17.292 20.5H17.28H7V10.712L10.608 2.594C11.415 2.852 12 3.608 12 4.5V8.5C12 9.052 12.447 9.5 13 9.5H18.674C18.728 9.502 18.78 9.503 18.832 9.511C19.097 9.551 19.33 9.692 19.488 9.907C19.646 10.122 19.712 10.385 19.672 10.648L18.292 19.65ZM5 20.5H3C2.449 20.5 2 20.051 2 19.5V12.5C2 11.948 2.449 11.5 3 11.5H5V20.5ZM21.099 8.72C20.623 8.075 19.925 7.654 19.132 7.533C18.972 7.509 18.814 7.504 18.66 7.5H14V4.5C14 2.294 12.206 0.5 10 0.5C9.605 0.5 9.247 0.733 9.086 1.093L5.35 9.5H3C1.346 9.5 0 10.845 0 12.5V19.5C0 21.154 1.346 22.5 3 22.5H17.269H17.304C18.776 22.5 20.048 21.409 20.269 19.951L21.648 10.95C21.77 10.157 21.574 9.366 21.099 8.72Z" fill="#313037"/>
        </svg>
      </button>
      <span className="like-count">{likes}</span>
      <button onClick={handleDislikeClick}
              className='button-dislike'>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3665 11.424C21.2535 12.052 20.6965 12.513 20.0365 12.501H18.3665V3.501H20.0545C20.6965 3.452 21.2525 3.948 21.3665 4.577V11.424ZM16.3665 13.288L12.7585 21.406C11.9515 21.148 11.3665 20.391 11.3665 19.501V15.501C11.3665 14.948 10.9185 14.501 10.3665 14.501H4.69753C4.65153 14.498 4.59053 14.499 4.53353 14.49C3.98853 14.407 3.61253 13.896 3.69453 13.352L5.07553 4.351C5.14953 3.861 5.60153 3.522 6.08653 3.501H16.3665V13.288ZM23.3575 4.366C23.1355 2.723 21.7305 1.5 20.0945 1.5C20.0755 1.5 20.0555 1.5 20.0365 1.501H6.09753C4.61053 1.511 3.32053 2.581 3.09853 4.049L1.71753 13.051C1.47053 14.686 2.59853 16.218 4.23053 16.466C4.39053 16.491 4.55353 16.503 4.70653 16.501H9.36653V19.501C9.36653 21.707 11.1605 23.501 13.3665 23.501C13.7625 23.501 14.1195 23.268 14.2805 22.907L18.0155 14.501H20.0185C21.6885 14.506 23.1325 13.298 23.3575 11.635C23.3635 11.591 23.3665 11.546 23.3665 11.501V4.501C23.3665 4.456 23.3635 4.411 23.3575 4.366Z" fill="#313037"/>
        </svg>
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