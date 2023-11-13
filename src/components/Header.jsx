import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo_colored.png';
import '../styles/Header.scss';

export default function Header() {
  return (
    <header className='kasa-header'>
      <NavLink to='/'>
        <img src={Logo} alt="Logo de Kasa" className='kasa-logo' />
      </NavLink>
      <nav className='kasa-nav'>
        <NavLink
          to='/'
          className='kasa-nav-item'
        >
          Accueil
        </NavLink>
        <NavLink
          to='/about'
          className='kasa-nav-item'
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
}
