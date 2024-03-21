// import { Children } from "react";
import { Link } from 'react-router-dom'
import Icon from '../../assets/Icon-Menu.png'
import Search from '../../assets/search 1.png'

export default function Header({ children, name }: { children?: string, name?: string }) {

  return (
    <>
      <div className='header'>
        <div className="header-container">
          <Link className='burger_link' to={'/'}>
            <button className="header__menu">
              <img src={Icon} alt='icon'></img>
            </button> 
          </Link>
          <div className='right-block'>
            <Link className="search__link" to={'/SignIn'}>
            <button className="search">
              <img src={Search} alt='search' className='header-search'></img>
            </button>
            </Link>
            <div className="user-container">
              <div className="icon">{name}</div>
              <p className="username">{children}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}