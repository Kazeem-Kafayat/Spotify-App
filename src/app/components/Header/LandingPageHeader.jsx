import './LandingPageHeader.css';
import React from 'react';
import { Logo } from '../Logo/Logo';
import {ReactComponent as MenuIcon} from '../../assets/icons/menu.svg'

function useState(initialValue) {
  let val =initialValue
  function change(newValue) {
    val = newValue
  }
  return [val, change]
}

export const LandingPageHeader = () => {
    const [showMenu, setMenu] = React.useState(false);

    // const showMenu = state[0];
    // const setMenu = state[1];

    const toggleMenu = () => {
      //  setMenu(showMenu === false)
      if (showMenu === false){
        setMenu(true)
      } else {
        setMenu(false)
      }
    }
    
    return (<header className='header'>
      <div className='logo'>
        <Logo useWhite = {true} />
      </div>
      <MenuIcon className='menu-icon' onClick={toggleMenu} fill='white' />
      <div className='menu'>
        <HeaderNavigation  className={showMenu ? 'mobile': ''} />
     </div>
    </header>)
}



const HeaderNavigation = (props) => {
  return (
    <ul className={props.className}>
      <li>
        <a href="#/Premium">Premium</a>
      </li>
      <li>
        <a href="#/Support">Support</a>
      </li>
      <li> 
        <a href="#/Download">Download</a>
      </li>
      <li className='hidden-mobile'>|</li>
      <li className='active'> 
        <a href="#/Sign up">Sign up</a>
      </li>
      <li className='active'> 
        <a href="#/Log in">Login in</a>
      </li>     
    </ul>
  )
}