import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import TechStack from '../components/TechStack'
import ProjectCard from '../components/ProjectCard'
import Contact from '../components/Contact'
import projects from '../data/projects.json'

export default function Home() {
  return (
    <>
      <Head>
        <title>MUROKORE Patrick — Frontend Developer</title>
        <meta name="description" content="Portfolio of MUROKORE Patrick, a frontend developer building clean, accessible web interfaces." />
      </Head>
      <Navbar />
      <main id="main" className="container">
        <Hero name="MUROKORE Patrick" role="Frontend Developer" photo="/images/Murokore.jpg" />

        <TechStack />

        <section id="projects" className="projects">
          <h2>Featured projects</h2>
          <p className="muted">A selection of things I&apos;ve built recently.</p>
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.slug || p.title} {...p} />
            ))}
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  )
}
