const express = require("express");
const Route = require("./routes/index")
const app = express();

app.use(express.json());
app.get("/", function(req, res){
    return res.json({mensaje: "Hola, Saludos"});
});

app.get("/nombre/:nom/pais/:pais", function(req, res){
    console.log("Hola: "+req.params.nom + ", saludos a: "+req.params.pais);
    return res.json({mensaje: "Hola, Saludos"});
});

// habilitando rutas
app.use("/api", Route);

// Levantar el servidor
app.listen(3000, function(){
    console.log("Servidor iniciado en: http://127.0.0.1:3000")
})