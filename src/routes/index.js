const express = require("express");
const postController = require("./../controllers/publicacion.controller")


const Route = express.Router();
Route.get("test", function(){
    return "TEST";
})
Route.get("/publicacion", postController.listarPost); // listar
Route.post("/publicacion", postController.guardarPost); // guardar
Route.get("/publicacion/:id", postController.mostrarPost); // mostrar por id
Route.put("/publicacion/:id", postController.modificarPost); // modificar por id
Route.delete("/publicacion/:id", postController.eliminarPost); // eliminar por id

module.exports = Route;