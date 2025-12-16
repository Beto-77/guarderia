import './Services.css'

export default function Services() {
  const services = [
    {
      id: 1,
      icon: '🎨',
      title: 'Artes y Creatividad',
      description: 'Estimulamos la creatividad con actividades de pintura, escultura y artesanía.'
    },
    {
      id: 2,
      icon: '⚽',
      title: 'Educación Física',
      description: 'Deportes y juegos al aire libre para desarrollar habilidades motoras.'
    },
    {
      id: 3,
      icon: '📚',
      title: 'Aprendizaje Académico',
      description: 'Programas educativos diseñados para edad preescolar adaptados.'
    },
    {
      id: 4,
      icon: '🎵',
      title: 'Música y Danza',
      description: 'Clases de música y movimiento para expresión artística.'
    },
    {
      id: 5,
      icon: '🍽️',
      title: 'Nutrición Saludable',
      description: 'Comidas balanceadas preparadas diariamente con ingredientes frescos.'
    },
    {
      id: 6,
      icon: '👨‍👩‍👧',
      title: 'Cuidado Personalizado',
      description: 'Atención individual y personalizada para cada niño.'
    }
  ]

  return (
    <section className="services" id="servicios">
      <div className="services-container">
        <h2 className="services-title">Nuestros Servicios</h2>
        <p className="services-subtitle">Ofrecemos una educación integral y de calidad</p>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
