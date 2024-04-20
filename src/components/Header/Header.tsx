import '../SettingMenu/Menu.css'
import { Link } from 'react-router-dom'
import Icon from '../../assets/Icon-Menu.png'
import Search from '../../assets/search 1.png'
import React, { useState, useRef  } from 'react';
import { myContext } from '../providers/themeCon';
import { useContext } from 'react';


export default function Header({ children, name }: { children?: string, name?: string }) {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);

    if (menuRef.current) {
      menuRef.current.classList.toggle('open');
    }
  };

  const [isDark, setIsDark] = useState(false);

  const handleButtonClick = () => {
    setColor(color === "dark" ? "light" : "dark");
  };

  const [color, setColor] = useContext(myContext)

  function changeColor() {
    setColor("dark");
  }

  return (
    <>
      <div className='header'>
        <div className="header-container">
          <Link className='burger_link' to={'/'}>
            <button className="header__menu" onClick={toggleMenu}>
              <img src={Icon} alt='icon'></img>
            </button> 
          </Link>
            {isMenuOpen ? <><div className="menu" ref={menuRef} style={{backgroundColor: isDark ? '#8D8E97' : '#F3F3F3'}}>
              <div className="menu__radio">
                <button onClick={handleButtonClick} className='radio__button'>
                        {isDark ? 'Toggle theme' : 'Toggle theme'}
                </button>
              </div>
              <div className="menu__signin">
                <Link to={'/SignIn'}> 
                  <button className='menu__sign' type='button'>Sign In</button>
                </Link>
              </div>
            </div></> : null }
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