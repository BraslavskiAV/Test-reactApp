import Astro from '../../assets/fe2406480a136180247e955f197ca67e.png'


interface Iblog {
  date: any,
  title: string,
  subtitle: string,
}

export default function Blog({ date, title, subtitle }: Iblog) {
  return (
    <>
      <div className="block-text">
        <div className="text">
          <p className="date">{date}</p>
          <h1 className="title">{title}</h1>
          <p className="subtitle">{subtitle}</p>
        </div>
        <div className="img">
          <img src={Astro} alt='astro' className='astro'></img>
        </div>
      </div>
    </>
  )
}