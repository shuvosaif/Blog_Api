import mongoose from 'mongoose'
import config from './index.js'

mongoose.set('strictQuery', true)

const databaseConnection = async () => {
  try {
    const OPTIONS = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    await mongoose.connect(config.databaseurl, OPTIONS)
    console.log('Blog App Database Connected Successfully')
  } catch (error) {
    console.log('Database Connection Failed')
    process.exit(1)
  }
}

export default databaseConnection
