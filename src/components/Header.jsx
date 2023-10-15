import { useState } from 'react';
import Logo from '../assets/logo_colored.png';
import '../styles/Header.css';

export default function Header() {
  const [isActive, setActive] = useState(null);

  const handleLinkClick = (link) => {
    setActive(link);
  };

  return (
    <header className='kasa-header'>
      <img src={Logo} alt="Logo de Kasa" className='kasa-logo' />
      <nav className='kasa-nav'>
        <a className={`kasa-nav-item ${isActive === 'accueil' ? 'active' : ''}`}
          href='#accueil'
          onClick={() => handleLinkClick('accueil')}>Accueil</a>
        <a className={`kasa-nav-item ${isActive === 'about' ? 'active' : ''}`}
          href='#about'
          onClick={() => handleLinkClick('about')}>À propos</a>
      </nav>
    </header>
  );
}