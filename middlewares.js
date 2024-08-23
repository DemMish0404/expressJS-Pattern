function logInfoAboutRequest(request,response,next){
   console.log(`поступил запрос с методом ${request.method} на ветку ${request.route} ; полное url: ${request.originalUrl} ; во время ${new Date()} `)
   next()
}

function anotherMiddlewareFunction(request,response,next){
   console.log(`еще одно миддлварэ не ждали?`)
   next()
   // тип функция next закончилась и вернулась к этому файлу
   console.log(`запрос окончен`)
   
}

//! №1 способ экспортирования  по отдельности эти миддлварэ функции можно экспо
// module.exports.logInfoAboutRequest = logInfoAboutRequest
// module.exports.anotherMiddlewareFunction = anotherMiddlewareFunction


//? №2 способ экспортирования  по отдельности эти миддлварэ функции можно экспортировать
module.exports = {
   logInfoAboutRequest,
   anotherMiddlewareFunction
}
