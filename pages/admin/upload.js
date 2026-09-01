import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function UploadPage() {
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch('/api/list-uploads').then((r) => r.json()).then((data) => setImages(data.files || []))
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    if (!file) return
    const form = new FormData()
    form.append('file', file)
    setUploading(true)
    const res = await fetch('/api/upload', { method: 'POST', body: form })
    const data = await res.json()
    setUploading(false)
    if (data.url) {
      setImages((s) => [data.url, ...s])
      setFile(null)
    } else {
      alert('Upload failed')
    }
  }

  return (
    <>
      <Navbar />
      <main className="container">
        <h1>Upload Images</h1>
        <form onSubmit={handleSubmit} style={{marginBottom:20}}>
          <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
          <button type="submit" disabled={uploading} style={{marginLeft:12}}>
            {uploading ? 'Uploading…' : 'Upload'}
          </button>
        </form>

        <section>
          <h2>Uploaded</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(120px,1fr))',gap:12}}>
            {images.map((src) => (
              <div key={src} style={{background:'#071022',padding:8,borderRadius:8}}>
                <img src={src} alt="uploaded" style={{width:'100%',height:120,objectFit:'cover',borderRadius:6}} />
                <div style={{marginTop:6,color:'#9aa'}}>{src}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
