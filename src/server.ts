import 'dotenv/config'
import express from 'express'


const app = express()

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(process.env.API_PORT, () => {
  console.log(`Server running on ${process.env.API_PORT} port`)
})