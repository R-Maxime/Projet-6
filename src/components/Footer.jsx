import Logo from '../assets/logo_neutral.png';
import '../styles/Footer.scss';

export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt='Logo de Kasa' />
      <p>© 2023 Kasa. All rights reserved</p>
    </footer>
  );
}
