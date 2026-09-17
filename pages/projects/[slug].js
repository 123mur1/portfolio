import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Gallery from '../../components/Gallery'
import projects from '../../data/projects.json'

export default function ProjectPage() {
  const router = useRouter()
  const { slug } = router.query
  if (!router.isReady) return null

  const project = projects.find((p) => p.slug === slug)
  const photos = project
    ? (Array.isArray(project.images) && project.images.length ? project.images : [project.image].filter(Boolean))
    : []

  if (!project) {
    return (
      <>
        <Navbar />
        <main id="main" className="container">
          <div className="page-head">
            <Link href="/projects" className="back-link"><span aria-hidden="true">←</span> Projects</Link>
          </div>
          <h1>Project not found</h1>
          <p className="muted">The requested project does not exist.</p>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{project.title} — MUROKORE Patrick</title>
        <meta name="description" content={project.description} />
      </Head>

      <Navbar />

      <main id="main" className="container">
        <div className="page-head">
          <Link href="/projects" className="back-link"><span aria-hidden="true">←</span> Projects</Link>
        </div>

        <h1>{project.title}</h1>
        <p className="muted">{project.description}</p>

        <Gallery images={photos} title={project.title} />

        {Array.isArray(project.tags) && project.tags.length > 0 && (
          <div className="card-tags" style={{ marginTop: 16 }}>
            {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        )}

        <section>
          <h2>About this project</h2>
          <p>{project.details || 'More details coming soon — technologies, links, and screenshots.'}</p>
        </section>

        {project.href && project.href !== '#' && (
          <a className="btn btn-primary" href={project.href} target="_blank" rel="noopener noreferrer">
            Visit live site <span aria-hidden="true">↗</span>
          </a>
        )}
      </main>

      <Footer />
    </>
  )
}
