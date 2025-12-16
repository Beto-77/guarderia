import { Link } from 'react-router-dom'
import NavLink from './NavLink'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🌈 Centro Infantil "Rugrats"</h3>
            <p>Dedicados al cuidado y educación integral de nuestros pequeños.</p>
          </div>
          
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><NavLink href="#servicios">Servicios</NavLink></li>
              <li><NavLink href="#galeria">Galería</NavLink></li>
              <li><NavLink href="#testimonios">Testimonios</NavLink></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/guarderiaarcoirs" target="_blank" rel="noopener noreferrer" className="social-link facebook" title="Facebook">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/guarderiaarcoirs" target="_blank" rel="noopener noreferrer" className="social-link instagram" title="Instagram">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/guarderiaarcoirs" target="_blank" rel="noopener noreferrer" className="social-link twitter" title="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Centro Infantil "Rugrats". Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
