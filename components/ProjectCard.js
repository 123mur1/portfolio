import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({ title, description, image, href, slug }) {
  const link = href && href !== '#' ? href : `/projects/${slug || ''}`
  return (
    <article className="card">
      <Link className="card-link" href={link}>
        <div className="card-image">
          <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} sizes="(max-width:600px) 100vw, 33vw" />
        </div>
        <div className="card-body">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </article>
  )
}
