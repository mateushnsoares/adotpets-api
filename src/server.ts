import 'dotenv/config'
import express, { json } from 'express'
import cors from 'cors'
import morgan from 'morgan'

import { router } from './routes'

const app = express()
const PORT = process.env.PORT || 3333

app.use(json())
app.use(cors())
app.use(morgan('dev'))
app.use('/api/v1', router)

app.listen(PORT, () => console.log(`Server started at ${PORT}`))
