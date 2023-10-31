import { NavLink } from "react-router-dom"
import '../../styles/Error.scss'


function NotFound() {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <NavLink className="link" to="/">Retourner sur la page d&apos;accueil</NavLink>
    </div>
  )
}

export default NotFound