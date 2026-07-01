const express = require("express");
const router = express.Router();

const pacienteController = require("../controllers/pacienteController");

router.get("/", pacienteController.listar);

router.get("/cadastrar", pacienteController.formularioCadastro);

router.post("/cadastrar", pacienteController.cadastrar);

router.get("/editar/:id", pacienteController.formularioEditar);

router.post("/editar/:id", pacienteController.editar);

router.get("/excluir/:id", pacienteController.excluir);

module.exports = router;