import Iblog from '../interfaces/BlogInterface'
import LikeButton from '../Like/Like'

export default function MiddleBlog({date, title, source}: Iblog){
  return (
    <>
      <div className="block-text-mid">
        <div className="img-mid">
          <img src={source} className='image-mid'></img>
        </div>
        <div className="text-mid">
          <p className="date-mid">{date}</p>
          <h1 className="title-mid">{title}</h1>
        </div>
        <div className='like-mid'>
        <LikeButton></LikeButton>
        </div>
      </div>
    </>
  )
}