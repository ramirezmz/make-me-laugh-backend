
import { firebaseConfig } from './config/index'
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
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

app.post("/sign-in", (req, res) => {
  createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
  .then((userCredential) => {
    const user = userCredential.user
    // console.log(user)
    res.send(user)
  }).
  catch((error) => {
    const errorMessage = error.errorMessage
    res.send(errorMessage)
    // console.log(errorMessage)
  })
})

app.post("/login", (req, res) => {
  signInWithEmailAndPassword(auth, req.body.email, req.body.password)
  .then((userCredential) => {
    const user = userCredential.user
    // console.log(user)
    res.send(user)
  })
  .catch((error) => {
    const errorMessage = error.message
    // console.log(errorMessage)
    res.send(errorMessage)
  })
})