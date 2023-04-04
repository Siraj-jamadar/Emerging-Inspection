import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import './Navbar.css';
import logo from '../../assets/images/EI.png';
import { Link } from 'react-router-dom';
import { DownloadOutlined, CloseOutlined, MenuOutlined } from '@ant-design/icons';
import EIPDF from '../../assets/PDF/Emerging_Inspection_Brochure.pdf';


const Navbar = () => {
  // const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // const handleClick = () => {
  //   setClicked(!clicked)
  // }

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  let navbarClasses = ['navbar'];
  let textClasses = ['text']
  let crossClasses = ['fas fa-times']
  let barClasses = ['fas fa-bars']
  let iconClasses = ['fas fa-caret-down']
  if (scrolled) {
    navbarClasses.push('scroll');
    textClasses.push('textScroll');
    crossClasses.push('crossScroll')
    barClasses.push('barScroll')
    iconClasses.push('crossScroll')
  }
    
    return(
      <>
        <nav className={navbarClasses.join(" ")}>
          <div className="logo-padding"><Link to='/'>{scrolled ? <img src={logo} alt='' width='100%'  /> : <img src={logo} alt='' width='100px' height='88px' />} </Link></div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <CloseOutlined /> : <MenuOutlined />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-item'} style={{ listStyle: "none" }}>
            <li><Link to='/' style={{textDecoration: "none"}} className="drop-down-icon" onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to='/about' style={{textDecoration: "none"}} className="drop-down-icon" onClick={closeMobileMenu}>About Us</Link></li>
            <li><Link to='/servicepage' style={{textDecoration: "none"}} className="drop-down-icon" onClick={closeMobileMenu}>Our Services</Link></li>
            <li><Link to='/contact' style={{textDecoration: "none"}} className="drop-down-icon" onClick={closeMobileMenu}>Contact Us</Link></li>
          </ul>
          <div style={{ paddingRight: "100px" }} className='nav-btn'><a href={EIPDF} download='Emerging Inspection Contracting Profile'><Button ><DownloadOutlined style={{ fontSize: '18px' }} />Download Brochure</Button></a></div>

          
        </nav>
      </>
    );
}
export default Navbar