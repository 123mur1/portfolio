import Image from 'next/image'

export default function Hero({ name = 'Your Name', role = 'Developer', photo = '/images/profile.svg' }) {
  return (
    <section className="hero-cta">
      <div className="hero-left">
        <h1>Hi — I'm {name}</h1>
        <p className="muted">{role} building things on the web.</p>
      </div>
      <div className="hero-photo">
        <Image src={photo} alt={name} width={120} height={120} />
      </div>
    </section>
  )
}
