const express = require('express')
const path = require('node:path')
const app = express()
const router = require('./src/routes')

app.set('view engine', 'ejs')
app.set('views', path.join('src', 'views'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use(router)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`)
})