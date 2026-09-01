import contact from '../data/contact.json'

function Icon({ children }){
  return (
    <span className="contact-icon" aria-hidden>{children}</span>
  )
}

export default function Contact(){
  const phoneDigits = contact.whatsapp ? contact.whatsapp.replace(/[^0-9]/g, '') : ''
  const waLink = phoneDigits ? `https://wa.me/${phoneDigits}` : null

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p className="muted">Feel free to reach out via any of the channels below.</p>

      <div className="contact-grid">
        {contact.email && (
          <a className="contact-item" href={`mailto:${contact.email}`}>
            <Icon>
              <svg viewBox="0 0 24 24"><path d="M2 4.99A2 2 0 0 1 4 3h16a2 2 0 0 1 2 1.99v12.02A2 2 0 0 1 20 19H4a2 2 0 0 1-2-1.99V4.99zM20 5H4v.5l8 5 8-5V5z"/></svg>
            </Icon>
            <div>
              <div className="contact-label">Email</div>
              <div className="contact-value">{contact.email}</div>
            </div>
          </a>
        )}

        {waLink && (
          <a className="contact-item" href={waLink} target="_blank" rel="noopener noreferrer">
            <Icon>
              <svg viewBox="0 0 24 24"><path d="M20.52 3.48A11.9 11.9 0 0 0 12 0C5.373 0 .02 5.39.02 12.02c0 2.12.56 4.18 1.62 6.01L0 24l6.2-1.56A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-11.98 0-3.2-1.24-6.18-3.48-8.54zM12 21.8c-1.72 0-3.4-.46-4.86-1.32l-.35-.2-3.68.92.93-3.6-.23-.37A9.74 9.74 0 0 1 2.2 12C2.2 6.41 6.41 2.2 12 2.2c2.54 0 4.92.98 6.71 2.77A9.44 9.44 0 0 1 21.8 12c0 5.59-4.2 9.8-9.8 9.8z"/></svg>
            </Icon>
            <div>
              <div className="contact-label">WhatsApp</div>
              <div className="contact-value">{contact.whatsapp}</div>
            </div>
          </a>
        )}

        {contact.instagram && (
          <a className="contact-item" href={contact.instagram} target="_blank" rel="noopener noreferrer">
            <Icon>
              <svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.3A4.7 4.7 0 1 0 16.7 13 4.7 4.7 0 0 0 12 8.3zm6.5-2.6a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1z"/></svg>
            </Icon>
            <div>
              <div className="contact-label">Instagram</div>
              <div className="contact-value">@{contact.instagram.split('/').pop()}</div>
            </div>
          </a>
        )}

        {contact.twitter && (
          <a className="contact-item" href={contact.twitter} target="_blank" rel="noopener noreferrer">
            <Icon>
              <svg viewBox="0 0 24 24"><path d="M22 5.92c-.63.28-1.3.48-2 .57a3.46 3.46 0 0 0 1.52-1.9 6.9 6.9 0 0 1-2.2.84 3.44 3.44 0 0 0-5.86 3.13A9.77 9.77 0 0 1 3.2 4.7a3.44 3.44 0 0 0 1.06 4.58 3.4 3.4 0 0 1-1.56-.43v.04a3.44 3.44 0 0 0 2.76 3.37 3.5 3.5 0 0 1-.9.12 3.6 3.6 0 0 1-.65-.06 3.44 3.44 0 0 0 3.21 2.38 6.9 6.9 0 0 1-4.27 1.47A6.95 6.95 0 0 1 2 18.54a9.74 9.74 0 0 0 5.28 1.55c6.33 0 9.8-5.24 9.8-9.78v-.44A6.97 6.97 0 0 0 22 5.92z"/></svg>
            </Icon>
            <div>
              <div className="contact-label">Twitter</div>
              <div className="contact-value">@{contact.twitter.split('/').pop()}</div>
            </div>
          </a>
        )}

        {contact.linkedin && (
          <a className="contact-item" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            <Icon>
              <svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 0 .02 5 2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.8-1.8 3.6-1.8C20.6 8.9 22 11 22 14.6V21h-4v-5.2c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z"/></svg>
            </Icon>
            <div>
              <div className="contact-label">LinkedIn</div>
              <div className="contact-value">{contact.linkedin.split('/').pop()}</div>
            </div>
          </a>
        )}

        {contact.github && (
          <a className="contact-item" href={contact.github} target="_blank" rel="noopener noreferrer">
            <Icon>
              <svg viewBox="0 0 24 24"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.6 1.2 1.6 1.2 1 .1 1.6.7 1.9 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.7 4 18.7 4.3 18.7 4.3c.6 1.6.2 2.9.1 3.2.8.8 1.2 1.8 1.2 3.1 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>
            </Icon>
            <div>
              <div className="contact-label">GitHub</div>
              <div className="contact-value">{contact.github.split('/').pop()}</div>
            </div>
          </a>
        )}

      </div>
    </section>
  )
}
