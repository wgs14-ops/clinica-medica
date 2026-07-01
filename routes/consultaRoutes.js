const express = require("express");
const router = express.Router();

const consultaController = require("../controllers/consultaController");

router.get("/", consultaController.listar);

router.get("/cadastrar", consultaController.formularioCadastro);

router.post("/cadastrar", consultaController.cadastrar);

router.get("/editar/:id", consultaController.formularioEditar);

router.post("/editar/:id", consultaController.editar);

router.get("/excluir/:id", consultaController.excluir);

module.exports = router;