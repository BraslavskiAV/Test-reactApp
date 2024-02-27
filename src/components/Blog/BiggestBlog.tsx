import Iblog from '../interfaces/BlogInterface'


export default function BiggestBlog({ date, title, subtitle, source}: Iblog) {
  return (
    <>
      <div className="block-text">
        <div className="text">
          <p className="date">{date}</p>
          <h1 className="title">{title}</h1>
          <p className="subtitle">{subtitle}</p>
        </div>
        <div className="img">
          <img src={source} className='astro'></img>
        </div>
      </div>
    </>
  )
}