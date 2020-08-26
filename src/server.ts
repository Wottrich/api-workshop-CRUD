import express, { response } from 'express'
import cors from 'cors'
import path from 'path'
import routes from './routes'
import { errors } from 'celebrate'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use(errors())

//Listen
const port = 5000
app.listen(port, () => {
    console.log(`Connected port => ${port}`)
})