import express from 'express'
import databaseConnection from './src/config/db.js'
import config from './src/config/index.js'
import allRoute from './src/routes/index.js'

const app = express()

//database connection imported from db.js file
databaseConnection()

app.use(express.json())

app.use('/', allRoute)

app.listen(config.port, () => {
  try {
    console.log('Blog Applicatiion Server Is Running Smoothly')
  } catch (error) {
    console.log('Blog Applicatiion Server Connection Failed')
  }
})
