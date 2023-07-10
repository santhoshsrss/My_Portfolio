import React, { useEffect, useState } from 'react'
import {themes} from '../data';
import Themeitem from './Themeitem';
import {FaCog} from 'react-icons/fa';
import {BsSun, BsMoon} from 'react-icons/bs';
import './themes.css';

const getStorageColor = () => {
  let color = 'hsl(348, 83.3%, 47.1%)';
  if (localStorage.getItem('color')){
    color=localStorage.getItem('color')
  }

  return color;
}

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')){
    theme=localStorage.getItem('theme')
  }

  return theme;
}

const Themes = () => {

  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor);
  const [theme, setTheme] = useState(getStorageTheme())
  const changeColor = (color) => {
      setColor(color); 
  }
  const toggleTheme = () => {
    if (theme === 'light-theme'){
      setTheme('dark-theme');
    }
    else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--first-color', color);
    localStorage.setItem('color', color);
  }, [color]);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    
    <div>
      
      <div 
        className=
          {`${showSwitcher ? 'show-switcher' : ''} styleswitcher `}
      >
        
        <div className='styleswitcher-toggler' 
        onClick={() => setShowSwitcher(!showSwitcher)}>
          <FaCog />
        </div>

        <div className='themetoggler' onClick={toggleTheme}>
            {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
        </div>
        
        <h3 className='styleswitcher-title'>Pick Color</h3>
        
        <div className='styleswitcher-items'>
          {themes.map((theme, index) => {
            return (
              <Themeitem key={index} {...theme} 
                changeColor = {changeColor}/>
            )
          })}
        </div>
        
        <div className="styleswitcher-close"
        onClick={() => setShowSwitcher(!showSwitcher)}
        >
          &times;
        </div>
      
      </div>  
    
    </div>
  )
}

export default Themes