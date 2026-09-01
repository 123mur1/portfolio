import Link from 'next/link'

function IconHome(){
  return (
    <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8.5z" />
    </svg>
  )
}

function IconProjects(){
  return (
    <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zM13 21h8V11h-8v10zm0-18v6h8V3h-8z" />
    </svg>
  )
}

function IconContact(){
  return (
    <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 8V7l-3 2-2-1-4 3-6-3-3 2v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8z" />
    </svg>
  )
}

function IconGitHub(){
  return (
    <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.6 1.2 1.6 1.2 1 .1 1.6.7 1.9 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.7 4 18.7 4.3 18.7 4.3c.6 1.6.2 2.9.1 3.2.8.8 1.2 1.8 1.2 3.1 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" />
    </svg>
  )
}

export default function Navbar(){
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">
          <Link href="/" className="brand-link">
            <strong>Portfolio</strong>
          </Link>
        </div>

        <nav>
          <Link href="/" className="nav-item" aria-label="Home">
            <IconHome />
            <span>Home</span>
          </Link>

          <Link href="/projects" className="nav-item" aria-label="Projects">
            <IconProjects />
            <span>Projects</span>
          </Link>

          <Link href="/contact" className="nav-item" aria-label="Contact">
            <IconContact />
            <span>Contact</span>
          </Link>

          <a className="nav-item" href="https://github.com/123mur1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <IconGitHub />
            <span>GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
