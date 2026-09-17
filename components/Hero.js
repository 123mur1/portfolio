import Image from 'next/image'
import Link from 'next/link'

export default function Hero({
  name = 'Your Name',
  role = 'Developer',
  photo = '/images/profile.svg',
  summary = 'I build clean, accessible web interfaces with a focus on usability and performance.',
}) {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Hi — I&apos;m {name}</h1>
        <p className="hero-role">{role}</p>
        <p className="muted">{summary}</p>
        <div className="hero-actions">
          <Link href="/projects" className="btn btn-primary">View my work</Link>
          <Link href="/contact" className="btn">Get in touch</Link>
        </div>
      </div>
      <div className="hero-photo">
        <Image src={photo} alt={`Portrait of ${name}`} width={132} height={132} priority />
      </div>
    </section>
  )
}
