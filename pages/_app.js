import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Component {...pageProps} />
    </>
  )
}
