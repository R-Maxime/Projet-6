import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo_colored.png';
import '../styles/Header.scss';

export default function Header() {
  const setActive = useState('')[1];

  const handleLinkClick = (link) => {
    setActive(link);
  };

  return (
    <header className='kasa-header'>
      <NavLink to='/' exact='true'>
        <img src={Logo} alt="Logo de Kasa" className='kasa-logo' />
      </NavLink>
      <nav className='kasa-nav'>
        <NavLink
          to='/'
          className='kasa-nav-item'
          onClick={() => handleLinkClick('accueil')}
        >
          Accueil
        </NavLink>
        <NavLink
          to='/about'
          className='kasa-nav-item'
          onClick={() => handleLinkClick('about')}
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
}
