import Image from 'next/image'

export default function ProjectCard({ title, description, image, href }) {
  return (
    <article className="card">
      <a className="card-link" href={href || '#'}>
        <div className="card-image">
          <Image src={image} alt={title} width={800} height={500} />
        </div>
        <div className="card-body">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </article>
  )
}
