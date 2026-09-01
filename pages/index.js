import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects.json'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Portfolio built with Next.js" />
      </Head>
      <Navbar />
      <main className="container">
        <Hero name="MUROKORE Patrick" role="Frontend Developer" photo="/images/murokore.jpg" />

        <section id="projects" className="projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Contact</h2>
          <p className="muted">Add your contact details or a contact form here.</p>
        </section>
      </main>
      <Footer />
    </>
  )
}
