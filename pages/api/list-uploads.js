import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  const dir = path.join(process.cwd(), 'public', 'uploads')
  if (!fs.existsSync(dir)) return res.status(200).json({ files: [] })

  const files = fs.readdirSync(dir).filter((f) => !f.startsWith('.'))
  const urls = files.map((f) => `/uploads/${f}`)
  res.status(200).json({ files: urls })
}
