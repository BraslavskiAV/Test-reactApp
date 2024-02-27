import Iblog from '../interfaces/BlogInterface'
import LikeButton from '../Like/Like'

export default function LittleBlog({date, title, source}: Iblog){
  return (
    <>
    <div className='small-blog'>
      <div className="block-text-small">
        <div className="text-small">
          <p className="date-small">{date}</p>
          <h1 className="title-small">{title}</h1>
        </div>
        <div className="img-small">
          <img src={source} className='image-small'></img>
        </div>
      </div>
      <div className='like-small'>
        <LikeButton></LikeButton>
      </div>
    </div>
    </>
  )
}