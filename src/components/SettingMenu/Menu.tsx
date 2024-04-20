import React, { useState } from 'react';

function Settingmenu() {

  const [isDark, setIsDark] = useState(false);

  const handleButtonClick = () => {
    setIsDark(!isDark);
  };

  return (  
    <>
    <div className="menu__container" style={{backgroundColor: isDark ? '#8D8E97' : '#F3F3F3'}}>
      <div className="menu__radio">
        <button type="button" className="light"></button>
        <button type="button" className="dark"></button>
        <button onClick={handleButtonClick}>
                {isDark ? 'светлое изображение' : 'Затемнить изображение'}
        </button>
      </div>
      <div className="menu__sign"></div>
    </div>
    </>
  );
}

export default Settingmenu;