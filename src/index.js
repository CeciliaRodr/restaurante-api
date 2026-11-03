require('dotenv').config()
const express = require('express')
const conectarDB = require('./db')
const platosRoutes = require('./routes/platos.routes')

const app = express()
app.use(express.json())

app.use('/platos', platosRoutes)

const PORT = process.env.PORT || 3000

conectarDB().then(() => {
  app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`))
})