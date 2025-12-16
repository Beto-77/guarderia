import './Testimonials.css'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'María García',
      role: 'Madre',
      text: 'La guardería Arco Iris ha sido maravillosa para mi hijo. El personal es muy cuidadoso y atento.'
    },
    {
      id: 2,
      name: 'Carlos López',
      role: 'Padre',
      text: 'Excelente calidad en la educación y un ambiente muy seguro. Recomiendo ampliamente este lugar.'
    },
    {
      id: 3,
      name: 'Ana Martínez',
      role: 'Abuela',
      text: 'Mi nieta ha aprendido mucho aquí. Los maestros son profesionales dedicados y comprometidos.'
    }
  ]

  return (
    <section className="testimonials" id="testimonios">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Lo que dicen nuestros padres</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.name}</p>
                <p className="author-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
