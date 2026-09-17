import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProjectCard from '../../components/ProjectCard'
import projects from '../../data/projects.json'

export default function ProjectsIndex(){
  return (
    <>
      <Head>
        <title>Projects — MUROKORE Patrick</title>
        <meta name="description" content="Projects built by MUROKORE Patrick." />
      </Head>

      <Navbar />

      <main id="main" className="container">
        <section className="projects" style={{ marginTop: 0 }}>
          <h1>Projects</h1>
          <p className="muted">A selection of projects I&apos;ve worked on. Click any card for details.</p>

          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.slug || p.title} {...p} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
