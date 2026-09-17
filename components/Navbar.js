import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

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

function IconMenu({ open }){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {open
        ? <path d="M6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12 19 6.4 17.6 5 12 10.6z" />
        : <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />}
    </svg>
  )
}

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const { pathname } = useRouter()

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand-link" onClick={close}>Portfolio</Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <IconMenu open={open} />
        </button>

        <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Primary">
          <Link href="/" className="nav-item" aria-current={isActive('/') ? 'page' : undefined} onClick={close}>
            <IconHome /><span>Home</span>
          </Link>
          <Link href="/projects" className="nav-item" aria-current={isActive('/projects') ? 'page' : undefined} onClick={close}>
            <IconProjects /><span>Projects</span>
          </Link>
          <Link href="/contact" className="nav-item" aria-current={isActive('/contact') ? 'page' : undefined} onClick={close}>
            <IconContact /><span>Contact</span>
          </Link>
          <a
            className="nav-item"
            href="https://github.com/123mur1"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            <IconGitHub /><span>GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
