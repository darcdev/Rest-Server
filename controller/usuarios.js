const { response } = require("express");

const usuariosGet = (req, res = response) => {
  const { id } = req.query;
  res.json({
    msg: "getApi",
    id,
  });
};
const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;
  res.status(201).json({
    msg: "post API",
    nombre,
    edad,
  });
};
const usuariosPut = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "put API",
    id,
  });
};
const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "delete API",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
};
