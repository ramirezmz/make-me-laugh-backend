
import { firebaseConfig } from './config/index'
import { initializeApp } from "firebase/app"
import { getAuth} from "firebase/auth"
import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()

const firebase = initializeApp(firebaseConfig)
const auth = getAuth()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.json({ type: "application/vnd.api+json" }))

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(process.env.API_PORT, () => {
  console.log(`Server running on ${process.env.API_PORT} port`)
})