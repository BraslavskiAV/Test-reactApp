import { Link } from 'react-router-dom'
import Iblog from '../interfaces/BlogInterface'
import { myContext } from '../providers/themeCon';
import { useContext } from 'react';

export default function BiggestBlog({ date, title, subtitle, source}: Iblog) {
  
  const [color, setColor] = useContext(myContext);

  return (
    <>
      <div className="block-text">
        <div className="text">
          <p className="date">{date}</p>
          <Link to={'/blog'} className='title__link'>
            <p className={`title${color}`}>{title}</p>
          </Link>
          <p className={`subtitle${color}`}>{subtitle}</p>
        </div>
        <div className="img">
          <img src={source} className='astro'></img>
        </div>
      </div>
    </>
  )
}