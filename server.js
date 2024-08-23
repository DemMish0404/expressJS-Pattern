require('dotenv').config() //  импортируем библиотеку чтобы работать с переменными в файле окружения (env)

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3005 // .PORT это переменная PORT в файле с расширением .env (если почему-то этой переменной нет, те она null или undefined , то используется 3005 порт)



app.use(express.urlencoded({extended: true})) // Middleware для парсинга данных из форм
app.use(express.json()) // с помощью встроенного в express миддлварэ учим сервер работать с json файлами


//! относится к 1 способу импортируем разные middleware функции с другого файла 
// const middlewareFromAnotherFile = require('./middlewares')
//! относится к 1 способу; используем эти middleware функции 
// app.use(middlewareFromAnotherFile.logInfoAboutRequest)
// app.use(middlewareFromAnotherFile.anotherMiddlewareFunction)

//? относится ко 2 способу импортирования/экспортирования middleware
const {logInfoAboutRequest, anotherMiddlewareFunction} = require('./middlewares')
app.use(logInfoAboutRequest)
app.use(anotherMiddlewareFunction)



//импортируем маршруты 
const exampleOfARouter = require('./routers/exampleOfAnRouter')
//подключаем маршруты, указывая ветку для них и обработчик этой ветки:
app.use('/example', exampleOfARouter)


// запускаем прослушивание сервера на порту и при запуске запуститься анонимная функция
app.listen(PORT, ()=>{
   console.log(`сервер запущен на порту ${PORT}`)   
})


