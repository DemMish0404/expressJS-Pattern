const Pool = require('pg').Pool
const pool = new Pool({
   user: 'name of the user in the postgresql app',
   password: 'your Password', 
   host: 'name Of The host', 
   port: 5432, // обычно это стандарт в постгрэс , но если изменял - то тогда больше не 5432 
   database: "NameOfTheDB"
})

//подключаемся к бд и эккспортируем чтобы можно было использовать бд в других файлах
//потом когда будешь использовать бд нужно в этом файле где это применяется импортировать это
module.exports = pool