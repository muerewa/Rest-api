const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const router = require('./router')
const path = require('path')

let url = config.get("url")
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.json())
app.use(express.static(__dirname + "/index.html"));
app.use('/api', router)

app.get('/',(req,res) => {
    res.status(200)
    res.sendFile(path.join(__dirname, 'index.html'))

})

async function startServer() {
    try {
        await mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(port)
    }catch(e) {
        console.log(e)
    }
}

startServer()
