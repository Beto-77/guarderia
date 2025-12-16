import './ImageCarousel.css'

interface ImageType {
  image?: string
  emoji?: string
  title: string
}

interface ImageCarouselProps {
  images: ImageType[]
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export default function ImageCarousel({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev
}: ImageCarouselProps) {
  const currentImage = images[currentIndex]

  return (
    <div className="carousel-overlay" onClick={onClose}>
      <div className="carousel-container" onClick={(e) => e.stopPropagation()}>
        <button className="carousel-close" onClick={onClose}>✕</button>

        <div className="carousel-content">
          <button className="carousel-nav carousel-prev" onClick={onPrev}>
            ❮
          </button>

          <div className="carousel-image-wrapper">
            {currentImage.image ? (
              // show the actual image when available
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore allow string
              <img src={currentImage.image} alt={currentImage.title} className="carousel-image" />
            ) : (
              <div className="carousel-image">{currentImage.emoji}</div>
            )}
            <h2 className="carousel-title">{currentImage.title}</h2>
          </div>

          <button className="carousel-nav carousel-next" onClick={onNext}>
            ❯
          </button>
        </div>

        <div className="carousel-counter">
          {currentIndex + 1} / {images.length}
        </div>

        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                const diff = index - currentIndex
                if (diff > 0) {
                  for (let i = 0; i < diff; i++) onNext()
                } else if (diff < 0) {
                  for (let i = 0; i < Math.abs(diff); i++) onPrev()
                }
              }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}
