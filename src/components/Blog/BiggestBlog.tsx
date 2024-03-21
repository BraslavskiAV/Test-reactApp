import { Link } from 'react-router-dom'
import Iblog from '../interfaces/BlogInterface'


export default function BiggestBlog({ date, title, subtitle, source}: Iblog) {
  return (
    <>
      <div className="block-text">
        <div className="text">
          <p className="date">{date}</p>
          <Link to={'/blog'} className='title__link'>
            <p className="title">{title}</p>
          </Link>
          <p className="subtitle">{subtitle}</p>
        </div>
        <div className="img">
          <img src={source} className='astro'></img>
        </div>
      </div>
    </>
  )
}