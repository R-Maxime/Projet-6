import Logo from '../assets/logo_neutral.png';
import '../styles/Footer.scss';

export default function Footer() {
  const initialYear = 2023;
  const currentYear = new Date().getFullYear();

  const displayYear = currentYear > initialYear ? `${initialYear} - ${currentYear}` : initialYear;
  return (
    <footer>
      <img src={Logo} alt='Logo de Kasa' />
      <p>© {displayYear} Kasa. All rights reserved</p>
    </footer>
  );
}
