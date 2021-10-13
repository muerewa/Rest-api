// Подключаем модули
const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const router = require('./router')
const path = require('path')
const port = 3000

let url = config.get("url") // Создаем переменную с url для подключения к mongodb
const app = express()

app.use(express.urlencoded({ extended: true })) // Нужно для чтения запроса из html форм
app.use(express.static(__dirname + "/public")) // Добавляем статические файлы в приложение
app.use(express.json()) // Заставляем express парсить json
app.use('/api', router) // Подключаем роутер

app.get('/',(req,res) => {
    res.status(200)
    res.sendFile(path.join(__dirname, 'public', 'index.html'))

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
