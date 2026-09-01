import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProjectCard from '../../components/ProjectCard'
import projects from '../../data/projects.json'

export default function ProjectsIndex(){
  return (
    <>
      <Head>
        <title>Projects — Portfolio</title>
      </Head>

      <Navbar />

      <main className="container">
        <section className="projects">
          <h1>Projects</h1>
          <p className="muted">A selection of projects I've worked on.</p>

          <div style={{marginTop:16}} className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.slug} {...p} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
