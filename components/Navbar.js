import Link from 'next/link'

export default function Navbar(){
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/">Home</Link>
        <nav>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
