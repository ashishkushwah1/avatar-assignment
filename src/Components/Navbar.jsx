import React, { useState, useEffect } from 'react';
import './Navbar.scss'; // Import your Sass file for styling
import { IoIosSearch } from 'react-icons/io'
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from '../images/logo.png'

const Navbar = () => {
  const menuItems = [
    { id: 1, name: 'HOME' },
    { id: 2, name: 'ELECTRONICS' },
    { id: 3, name: 'BOOKS' },
    { id: 4, name: 'MUSIC' },
    { id: 5, name: 'MOVIES' },
    { id: 6, name: 'CLOTHING' },
    { id: 7, name: 'GAMES' },
    { id: 8, name: 'TESTIMONIALS' },
    { id: 9, name: 'FAQ' },
    { id: 10, name: 'FURNITURE' },
    { id: 11, name: 'TRAVEL' },
    { id: 12, name: 'BOTANICAL' }
  ];

  const [mainMenu, setMainMenu] = useState([]);
  const [moreMenu, setMoreMenu] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 1550) {
      let main = [];
      let more = [];
      let totalWidth = 0;
      for (let i = 0; i < menuItems.length; i++) {
        const itemWidth = menuItems[i].name.length * 12; // Assuming average width of 12px per character
        if (totalWidth + itemWidth <= screenWidth - 850) {
          main.push(menuItems[i]);
        } else {
          more.push(menuItems[i]);
        }
        totalWidth += itemWidth;
      }
      setMainMenu(main);
      setMoreMenu(more);
    } else {
      setMainMenu(menuItems);
      setMoreMenu([]);
    }
  };
  useEffect(() => {

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuItems]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className='logo-box'>
        <img src={logo} alt="" />
        <div className="logo">E-COMM</div>
      </div>
      <ul className="main-menu">
        {mainMenu.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
        {moreMenu.length > 0 && (
          <li className="more" onClick={toggleDropdown} >
            More <MdKeyboardArrowDown />
            {showDropdown && (
              <ul className="dropdown-menu">
                {moreMenu.map(item => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            )}
          </li>
        )}
      </ul>
      <div className='search-bar'>
        <div className='search-box'>
          <IoIosSearch className='search-icon' />
          <input type='search' placeholder='Search something' className='search' />
        </div>
        <div className='ruler'></div>
      </div>
    </nav>
  );
};

export default Navbar;