import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({ title, description, image, images, href, slug, tags }) {
  const internal = !href || href === '#'
  const link = internal ? `/projects/${slug || ''}` : href
  const cover = image || (Array.isArray(images) && images[0])
  const photoCount = Array.isArray(images) ? images.length : image ? 1 : 0

  return (
    <article className="card">
      <Link
        className="card-link"
        href={link}
        {...(internal ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
        aria-label={`${title} — view project`}
      >
        <div className="card-image">
          {cover && (
            <Image src={cover} alt={title} fill style={{ objectFit: 'cover' }} sizes="(max-width:600px) 100vw, 33vw" />
          )}
          {photoCount > 1 && (
            <span className="card-photo-count" aria-label={`${photoCount} photos`}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h12v10H4V6zm2 12h14V8h2v12H6v-2z"/></svg>
              {photoCount}
            </span>
          )}
        </div>
        <div className="card-body">
          <h3>{title}</h3>
          <p>{description}</p>
          {Array.isArray(tags) && tags.length > 0 && (
            <div className="card-tags">
              {tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          )}
          <span className="card-cta">View project <span aria-hidden="true">→</span></span>
        </div>
      </Link>
    </article>
  )
}
