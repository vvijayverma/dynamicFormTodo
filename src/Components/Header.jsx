import React ,{useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../Images/amazon_logo.png';

import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Feature/Slices/themeSlice';
import Toggle from 'react-toggle';
import 'react-toggle/style.css'; 
import { IoMdSunny } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
  }, [theme]);

  return (
    <div className='header'>
     <div className='profile'>
        <img src={logo} alt='vijay verma' style={{width:'50px',height:"50px"}}></img>
      </div>
      <nav className='navbar'>
        <ul className='nav-list'>
            <li className='nav-item'><NavLink className={({isActive})=>isActive?"active":"inActive"} to="/">Home</NavLink></li>
            <li className='nav-item'><NavLink className={({isActive})=>isActive?"active":"inActive"} to="/amazon">Amazon</NavLink></li>
            <li className='nav-item'><NavLink className={({isActive})=>isActive?"active":"inActive"} to="/netflix">Netflix</NavLink></li>
        </ul>
      </nav>
      <Toggle
        checked={theme === 'dark'}
        onChange={() => dispatch(toggleTheme())}
        icons={{
          checked: <BsMoonStarsFill className="toggle-icon" />,
          unchecked: <IoMdSunny className="toggle-icon" />,
        }}
        aria-label="Toggle theme"
      />
    </div>
  )
}

export default Header
