import { useState } from 'react'
import ImageCarousel from './ImageCarousel'
import './Gallery.css'

export default function Gallery() {
  const [carouselOpen, setCarouselOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentActivityImages, setCurrentActivityImages] = useState<Array<{ image: string; title: string }>>([])

  const activities = [
    {
      id: 1,
      emoji: '🎨',
      title: 'Actividades Creativas',
      images: [
        { image: '/images/gallery/469378119_568065945817696_6580225267538250027_n.jpg', title: 'Pintura con acuarela' },
        { image: '/images/gallery/469379377_568065815817709_6937160650254637306_n.jpg', title: 'Dibujo artístico' },
        { image: '/images/gallery/472559797_595866139700864_1393833276690643678_n.jpg', title: 'Técnica de esponja' },
        { image: '/images/gallery/473027087_592226376734986_4549088001229190902_n.jpg', title: 'Máscaras decoradas' }
      ]
    },
    {
      id: 2,
      emoji: '🏃',
      title: 'Recreo y Juego',
      images: [
        { image: '/images/gallery/469378119_568065945817696_6580225267538250027_n.jpg', title: 'Fútbol en el patio' },
        { image: '/images/gallery/469379377_568065815817709_6937160650254637306_n.jpg', title: 'Juego de baloncesto' },
        { image: '/images/gallery/472559797_595866139700864_1393833276690643678_n.jpg', title: 'Juegos grupales' },
        { image: '/images/gallery/473027087_592226376734986_4549088001229190902_n.jpg', title: 'Carreras y competencias' }
      ]
    },
    {
      id: 3,
      emoji: '📖',
      title: 'Lectura y Aprendizaje',
      images: [
        { image: '/images/gallery/469378119_568065945817696_6580225267538250027_n.jpg', title: 'Cuentos interactivos' },
        { image: '/images/gallery/469379377_568065815817709_6937160650254637306_n.jpg', title: 'Hora de lectura' },
        { image: '/images/gallery/472559797_595866139700864_1393833276690643678_n.jpg', title: 'Escritura creativa' },
        { image: '/images/gallery/473027087_592226376734986_4549088001229190902_n.jpg', title: 'Aprendizaje académico' }
      ]
    },
    {
      id: 4,
      emoji: '🎭',
      title: 'Dramatización',
      images: [
        { image: '/images/gallery/469378119_568065945817696_6580225267538250027_n.jpg', title: 'Obra teatral' },
        { image: '/images/gallery/469379377_568065815817709_6937160650254637306_n.jpg', title: 'Representación de cuentos' },
        { image: '/images/gallery/472559797_595866139700864_1393833276690643678_n.jpg', title: 'Juegos de rol' },
        { image: '/images/gallery/473027087_592226376734986_4549088001229190902_n.jpg', title: 'Presentación final' }
      ]
    },
    {
      id: 5,
      emoji: '🍎',
      title: 'Merienda Saludable',
      images: [
        { image: '/images/gallery/469378119_568065945817696_6580225267538250027_n.jpg', title: 'Frutas frescas' },
        { image: '/images/gallery/469379377_568065815817709_6937160650254637306_n.jpg', title: 'Ensalada colorida' },
        { image: '/images/gallery/472559797_595866139700864_1393833276690643678_n.jpg', title: 'Vegetales crujientes' },
        { image: '/images/gallery/473027087_592226376734986_4549088001229190902_n.jpg', title: 'Snacks saludables' }
      ]
    },
    {
      id: 6,
      emoji: '👶',
      title: 'Guardería para Bebes',
      images: [
        { image: '/images/gallery/469378119_568065945817696_6580225267538250027_n.jpg', title: 'Área de bebés' },
        { image: '/images/gallery/469379377_568065815817709_6937160650254637306_n.jpg', title: 'Alimentación segura' },
        { image: '/images/gallery/472559797_595866139700864_1393833276690643678_n.jpg', title: 'Tiempo de juego' },
        { image: '/images/gallery/473027087_592226376734986_4549088001229190902_n.jpg', title: 'Zona de descanso' }
      ]
    }
  ]

  const openCarousel = (activity: typeof activities[0]) => {
    setCurrentActivityImages(activity.images)
    setCurrentImageIndex(0)
    setCarouselOpen(true)
  }

  const closeCarousel = () => {
    setCarouselOpen(false)
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentActivityImages.length)
  }

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentActivityImages.length) % currentActivityImages.length)
  }

  return (
    <section className="gallery" id="galeria">
      <div className="gallery-container">
        <h2 className="gallery-title">Galería de Momentos</h2>
        <p className="gallery-subtitle">Disfruta viendo las actividades de nuestros pequeños</p>
        
        <div className="gallery-grid">
          {activities.map((activity) => (
            <div 
              key={activity.id} 
              className="gallery-item"
              onClick={() => openCarousel(activity)}
            >
              <div className="gallery-image">{activity.emoji}</div>
              <div className="gallery-overlay">
                <p className="gallery-text">{activity.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {carouselOpen && currentActivityImages.length > 0 && (
        <ImageCarousel
          images={currentActivityImages}
          currentIndex={currentImageIndex}
          onClose={closeCarousel}
          onNext={goToNext}
          onPrev={goToPrev}
        />
      )}
    </section>
  )
}
