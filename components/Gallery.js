import { useState } from 'react'
import Image from 'next/image'

export default function Gallery({ images = [], title = '' }) {
  const [active, setActive] = useState(0)
  if (!images.length) return null

  const count = images.length
  const go = (i) => setActive((i + count) % count)

  return (
    <div className="gallery">
      <div
        className="gallery-main"
        tabIndex={count > 1 ? 0 : undefined}
        role={count > 1 ? 'group' : undefined}
        aria-label={count > 1 ? `${title} images, ${active + 1} of ${count}` : undefined}
        onKeyDown={(e) => {
          if (count < 2) return
          if (e.key === 'ArrowRight') go(active + 1)
          if (e.key === 'ArrowLeft') go(active - 1)
        }}
      >
        <Image
          src={images[active]}
          alt={`${title} — image ${active + 1} of ${count}`}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width:960px) 100vw, 960px"
          priority
        />
        {count > 1 && (
          <span className="gallery-count" aria-hidden="true">{active + 1} / {count}</span>
        )}
      </div>

      {count > 1 && (
        <ul className="gallery-thumbs">
          {images.map((src, i) => (
            <li key={src}>
              <button
                type="button"
                className={i === active ? 'gallery-thumb is-active' : 'gallery-thumb'}
                aria-label={`Show image ${i + 1}`}
                aria-current={i === active ? 'true' : undefined}
                onClick={() => setActive(i)}
              >
                <Image src={src} alt="" fill style={{ objectFit: 'cover' }} sizes="96px" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
