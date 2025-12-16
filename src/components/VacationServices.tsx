import { useState } from 'react'
import './VacationServices.css'

export default function VacationServices() {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null)

  const services = [
    {
      id: 1,
      icon: '🎨',
      title: 'Manualidades Navideñas',
      duration: '2 semanas',
      age: '3-6 años',
      description: 'Manualidades navideñas para los más pequeños. Creación de regalos personalizados y decoración de la casa.',
      details: [
        'Tarjetas de felicitación',
        'Arte de la decoración',
        'Decoración de árboles',
        'Regalos personalizados',
        'Entrega de regalos en la puerta'
      ],
      price: '€150'
    },
    {
      id: 2,
      icon: '🎭',
      title: 'Oratoría y Dramatización',
      duration: '2 semanas',
      age: '4-6 años',
      description: 'El arte de la oratoria y dramatización para mejorar la expresividad y comunicación verbal.',
      details: [
        'Expresión oral',
        'Técnicas de dramatización',
        'Juegos de rol',
        'Presentación final'
      ],
      price: '€160'
    },
    {
      id: 3,
      icon: '⚽',
      title: 'Deportes y Aventura',
      duration: '3 semanas',
      age: '3-6 años',
      description: 'Diversas actividades deportivas y juegos al aire libre para desarrollar habilidades motoras y trabajo en equipo.',
      details: [
        'Fútbol y baloncesto',
        'Carreras y atletismo',
        'Juegos de equipo',
        'Senderismo y naturaleza'
      ],
      price: '€180'
    },
    {
      id: 4,
      icon: '🎵',
      title: 'Zumba Infantil',
      duration: '2 semanas',
      age: '3-5 años',
      description: 'La danza zumba infantil es una forma divertida de mantener activos a los niños mientras se divierten y aprenden sobre la música y el movimiento.',
      details: [
        'Movimiento coordinado',
        'Ritmo y baile',
        'Baile de grupo',
        'Competición de baile'
      ],
      price: '€140'
    },
    {
      id: 5,
      icon: '👨‍🍳',
      title: 'Cocina Infantil',
      duration: '2 semanas',
      age: '4-6 años',
      description: 'Los niños aprenderán nociones básicas de cocina preparando recetas simples y saludables de manera divertida.',
      details: [
        'Recetas fáciles y seguras',
        'Habilidades culinarias básicas',
        'Higiene en la cocina',
        'Cata de platillos preparados'
      ],
      price: '€170'
    },
    {
      id: 6,
      icon: '📚',
      title: 'Lectura y Cuentos',
      duration: '3 semanas',
      age: '3-6 años',
      description: 'Desarrollo del amor por la lectura a través de historias interactivas, cuentos clásicos y actividades creativas.',
      details: [
        'Lectura compartida',
        'Cuentos interactivos',
        'Creación de historias',
        'Presentación de libros'
      ],
      price: '€130'
    },
    {
      id: 7,
      icon: '🌳',
      title: 'Campamento Naturaleza',
      duration: '1 semana',
      age: '4-6 años',
      description: 'Despierta la curiosidad por la naturaleza con excursiones, observación de plantas y pequeñas aventuras ecológicas.',
      details: [
        'Excursiones al aire libre',
        'Observación de fauna y flora',
        'Proyectos de ecología',
        'Campismo divertido'
      ],
      price: '€200'
    },
    {
      id: 8,
      icon: '🤖',
      title: 'Ciencia y Experimentos',
      duration: '2 semanas',
      age: '4-6 años',
      description: 'Experimentos emocionantes y actividades prácticas que despiertan el interés en la ciencia y la exploración.',
      details: [
        'Experimentos interactivos',
        'Volcanes y cristales',
        'Reacciones químicas seguras',
        'Observatorio científico'
      ],
      price: '€165'
    }
  ]

  return (
    <section className="vacation-services" id="vacaciones">
      <div className="vacation-container">
        <div className="vacation-header">
          <h2 className="vacation-title">Servicios y Cursos de Vacaciones 🌞</h2>
          <p className="vacation-subtitle">Diversión, aprendizaje y aventura durante las vacaciones escolares</p>
        </div>

        <div className="vacation-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`vacation-card ${selectedCourse === service.id ? 'expanded' : ''}`}
              onClick={() => setSelectedCourse(selectedCourse === service.id ? null : service.id)}
            >
              <div className="card-header">
                <span className="course-icon">{service.icon}</span>
                <h3 className="course-title">{service.title}</h3>
              </div>

              <div className="card-info">
                <div className="info-badge">
                  <span className="badge-label">📅 Duración:</span>
                  <span className="badge-value">{service.duration}</span>
                </div>
                <div className="info-badge">
                  <span className="badge-label">👧 Edades:</span>
                  <span className="badge-value">{service.age}</span>
                </div>
              </div>

              <p className="course-description">{service.description}</p>

              {selectedCourse === service.id && (
                <div className="course-details">
                  <h4>Incluye:</h4>
                  <ul>
                    {service.details.map((detail, index) => (
                      <li key={index}>✓ {detail}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="card-footer">
                <span className="price">{service.price}</span>
                <button className="btn-info">
                  {selectedCourse === service.id ? 'Ver menos' : 'Ver más'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="vacation-cta">
          <h3>¿Te interesa algún curso?</h3>
          <p>Contáctanos para más información, descuentos por múltiples cursos y disponibilidad.</p>
          <a href="/#contacto" className="cta-button">Inscribirse Ahora</a>
        </div>
      </div>
    </section>
  )
}
