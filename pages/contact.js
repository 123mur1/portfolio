import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

export default function ContactPage(){
  return (
    <>
      <Head>
        <title>Contact — MUROKORE Patrick</title>
        <meta name="description" content="Get in touch with MUROKORE Patrick." />
      </Head>

      <Navbar />

      <main id="main" className="container">
        <div className="page-head">
          <Link href="/" className="back-link"><span aria-hidden="true">←</span> Home</Link>
        </div>

        <h1>Contact</h1>
        <Contact showHeading={false} />
      </main>

      <Footer />
    </>
  )
}
