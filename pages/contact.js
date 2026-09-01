import Head from 'next/head'
import Link from 'next/link'
import Contact from '../components/Contact'

export default function ContactPage(){
  return (
    <>
      <Head>
        <title>Contact — Portfolio</title>
      </Head>

      <div className="contact-only">
        <Link href="/" className="project-back">← Back</Link>

        <div className="contact-content container">
          <h1>Contact</h1>
          <Contact />
        </div>
      </div>
    </>
  )
}
