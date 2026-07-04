const Publicacion = require("./../models/Publicacion");

async function listarPost(req, res){
    let publicaciones = await Publicacion.findAll();

    return res.json(publicaciones);
}

async function guardarPost(req, res){
    const datos = req.body;
    const publicacion = await Publicacion.create(datos); 
    return res.json({mensaje: "Publicación registrado"});
}

async function mostrarPost(req, res){
    const id = req.params.id;
    const publicacion = await Publicacion.findByPk(id);

    return res.json(publicacion);

}

async function modificarPost(req, res){
    const id = req.params.id;
    const datos = req.body;

    const publicacion = await Publicacion.findByPk(id);
    await Publicacion.update(datos);

    return res.json({mensaje: "Publicación actualizada"});

}

async function eliminarPost(req, res){
    const id = req.params.id;
    const publicacion = await Publicacion.findByPk(id);

    await publicacion.destroy();
        return res.json({mensaje: "Publicación Eliminada"});

}

module.exports = {
    listarPost,
    guardarPost,
    mostrarPost,
    modificarPost,
    eliminarPost
}