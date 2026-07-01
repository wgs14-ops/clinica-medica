const express = require("express");
const router = express.Router();

const medicoController = require("../controllers/medicoController");

router.get("/", medicoController.listar);

router.get("/cadastrar", medicoController.formularioCadastro);

router.post("/cadastrar", medicoController.cadastrar);

router.get("/editar/:id", medicoController.formularioEditar);

router.post("/editar/:id", medicoController.editar);

router.get("/excluir/:id", medicoController.excluir);

module.exports = router;