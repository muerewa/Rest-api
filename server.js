// Подключаем модули
const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const router = require('./router')
const port = 3000;

let url = config.get("url") // Создаем переменную с url для подключения к mongodb
const app = express()

app.use(express.json()) // Заставляем express парсить json
app.use('/api', router) // Подключаем роутер

app.get('/', (res,req) => {
    res.sendFile('index.html')
})


async function startServer() {
    try {
        // Подключение к базе данных
        await mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(port) // Включение сервера
    }catch(e) {
        console.log(e)
    }
}

startServer()
