import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavLink from './NavLink'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-section">
          <img src="/images/gallery/Rugrats-PNG-Image.png" alt="Logo Rugrats" className="logo-icon" />
          <h1 className="logo-text">Centro Infantil "Rugrats"</h1>
        </Link>
        
        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <NavLink href="#servicios" className="nav-link">Servicios</NavLink>
          <NavLink href="#galeria" className="nav-link">Galería</NavLink>
          <Link to="/vacaciones" className="nav-link">Vacaciones</Link>
          <NavLink href="#testimonios" className="nav-link">Testimonios</NavLink>
          <NavLink href="#contacto" className="nav-link btn-contact">Contacto</NavLink>
        </nav>
      </div>
    </header>
  )
}
