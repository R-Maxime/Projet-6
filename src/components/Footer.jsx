import Logo from '../assets/logo_neutral.png';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className='footer-container'>
      <img src={Logo} alt='Logo de Kasa' />
      <p className='footer-text'>© 2023 Kasa. All rights reserved</p>
    </footer>
  )
}