const express = require("express");
//Modulo Vistas
const exp_hbs = require("express-handlebars");
const path = require("path");

//Inicializaciones
const app = express();

// Configuraciones
app.set("views", path.join(__dirname, "views"));

app.engine(".hbs", exp_hbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs"
}));

// SETEAR ENGINE
app.set("view engine", ".hbs");
// MiddleWare

// SOPORTE DATOS FORMULARIO
app.use(express.urlencoded({ extended: false }));
// SOPORTE EXPRESS
app.use(express.json());
// RUTAS

app.use(require("./routes/index"));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Iniciar Servidor
app.listen(3000, () => {
    console.log("Working on Port", 3000);
})