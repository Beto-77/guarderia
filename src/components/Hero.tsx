import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="hero-title">Bienvenido al Centro Infantil "Rugrats"</h2>
          <p className="hero-subtitle">El lugar perfecto para el desarrollo y crecimiento de tu hijo</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Visítanos Hoy</button>
            <button className="btn btn-secondary">Saber Más</button>
          </div>
        </div>
        
        <div className="hero-animation">
          <div className="floating-shapes">
            <div className="shape shape-1">🎨</div>
            <div className="shape shape-2">📚</div>
            <div className="shape shape-3">🎵</div>
            <div className="shape shape-4">🌟</div>
            <div className="shape shape-5">⚽</div>
          </div>
        </div>
      </div>
    </section>
  )
}
