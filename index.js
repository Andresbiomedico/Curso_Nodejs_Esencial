const express = require("express");
// middelware son funciones que se ejecutan entre cada peticio
// se utiliza npm install morgan body-parser
const logger=require("morgan") //se encarga de loguear todas las peticiones a la consola
const bodyparser=require("body-parser")// permite leer o hacer parsing  del cuerpo de una peticion http

const app = express();

app.use(logger("dev"))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

require("./routes/views")(app);
require("./routes/special")(app);

console.log("Iniciando Express.js");
app.listen(3000, ()=>{
    console.log("Express ha iniciado correctamente!");
});