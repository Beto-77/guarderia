import './Contact.css'
import { FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="contact-container">
        <h2 className="contact-title">Ponte en Contacto</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Ubicación</h3>
              <p>Calle Mexico y Cañada Strongest<br/>Edificio Maria Reyna, La Paz - Bolivia</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Teléfono</h3>
              <p>75206747</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>info@guarderiaarcoirs.com</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h3>Horario</h3>
              <p>Lunes a Viernes<br/>8:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="map-container">
            <iframe 
              title="Guardería Arco Iris Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.862483033263!2d-68.13447748255612!3d-16.50358879999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f210049683659%3A0xce66046eb4f11134!2sEdificio%20Maria%20Reyna!5e1!3m2!1ses-419!2sbo!4v1765903473308!5m2!1ses-419!2sbo"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '15px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="contact-buttons">
          <h3>Contáctanos por:</h3>
          <div className="buttons-grid">
            <a 
              href="https://wa.me/34600000000?text=Hola%20Guardería%20Arco%20Iris%20me%20gustaría%20información"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button whatsapp"
            >
              <FaWhatsapp className="button-icon" />
              <span className="button-text">WhatsApp</span>
            </a>

            <a 
              href="https://www.facebook.com/guarderiaarcoirs"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button facebook"
            >
              <FaFacebook className="button-icon" />
              <span className="button-text">Facebook</span>
            </a>

            <a 
              href="mailto:info@guarderiaarcoirs.com?subject=Información%20sobre%20Guardería&body=Hola%2C%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios."
              className="contact-button email"
            >
              <FaEnvelope className="button-icon" />
              <span className="button-text">Correo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
