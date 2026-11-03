const mongoose = require('mongoose')

const conectarDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI)
  console.log('Se conectó a MongoDB')
}

module.exports = conectarDB