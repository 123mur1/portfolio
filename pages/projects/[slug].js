import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import projects from '../../data/projects.json'
import Image from 'next/image'

export default function ProjectPage() {
  const router = useRouter()
  const { slug } = router.query
  if (!router.isReady) return null

  const project = projects.find((p) => p.slug === slug)

  if (!project) return (
    <main className="container">
      <h1>Project not found</h1>
      <p className="muted">The requested project does not exist.</p>
      <p><Link href="/">Go back home</Link></p>
    </main>
  )

  return (
    <>
      <Head>
        <title>{project.title} — Portfolio</title>
      </Head>

      <div className="project-only">
        <Link href="/" className="project-back">← Back</Link>

        <div className="project-content">
          <h1>{project.title}</h1>
          <p className="muted">{project.description}</p>

          <div className="project-hero" aria-hidden>
            <Image src={project.image} alt={project.title} fill style={{objectFit:'cover'}} />
          </div>

          <section style={{marginTop:18}}>
            <h2>Details</h2>
            <p>Add more project details here — technologies, links, screenshots.</p>
          </section>
        </div>
      </div>
    </>
  )
}
