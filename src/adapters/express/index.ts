import express from 'express'
import cors from 'cors'

import userRoutes from '@/adapters/express/routes/user.routes'

const app = express()
const PORT = 3333

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app
  .disable('x-powered-by')
  .disable('etag')

app.use(cors())
app.use(userRoutes)

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
