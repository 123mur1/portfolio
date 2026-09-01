import fs from 'fs'
import path from 'path'
import formidable from 'formidable'

export const config = {
  api: {
    bodyParser: false,
  },
}

const uploadDir = path.join(process.cwd(), 'public', 'uploads')

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  await fs.promises.mkdir(uploadDir, { recursive: true })

  const form = new formidable.IncomingForm({ multiples: false })

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Formidable error', err)
      return res.status(500).json({ error: 'Upload failed' })
    }

    const file = files.file || files.image || Object.values(files)[0]
    if (!file) return res.status(400).json({ error: 'No file uploaded' })

    const data = await fs.promises.readFile(file.filepath || file.path)
    const filename = `${Date.now()}-${(file.originalFilename || file.name || file.newFilename).replace(/[^a-zA-Z0-9.\-]/g, '_')}`
    const dest = path.join(uploadDir, filename)
    await fs.promises.writeFile(dest, data)

    return res.status(200).json({ url: `/uploads/${filename}` })
  })
}
