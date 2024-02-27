// import { Children } from "react";
import Icon from '../../assets/Icon-Menu.png'
import Search from '../../assets/search 1.png'

export default function Header({ children, name }: { children?: string, name?: string }) {

  return (
    <>
      
        <div className="header-container">
          <div className="burger">
            <img src={Icon} alt='icon'></img>
          </div>
          <div className='right-block'>
            <div className="search">
              <img src={Search} alt='search' className='header-search'></img>
            </div>
            <div className="user-container">
              <div className="icon">{name}</div>
              <p className="username">{children}</p>
            </div>
          </div>
        </div>
      
    </>
  )
}