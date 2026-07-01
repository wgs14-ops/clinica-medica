const Consulta = require("../models/Consulta");
const Paciente = require("../models/Paciente");
const Medico = require("../models/Medico");

module.exports = {

    async listar(req, res) {

        const consultas = await Consulta.findAll({
            include: [Paciente, Medico]
        });

        res.render("consultas/index", {
            consultas
        });
    },

    async formularioCadastro(req, res) {

        const pacientes = await Paciente.findAll();
        const medicos = await Medico.findAll();

        res.render("consultas/cadastrar", {
            pacientes,
            medicos
        });
    },

    async cadastrar(req, res) {

        const { data, horario, observacao, PacienteId, MedicoId } = req.body;

        await Consulta.create({
            data,
            horario,
            observacao,
            PacienteId,
            MedicoId
        });

        res.redirect("/consultas");
    },

    async formularioEditar(req, res) {

        const consulta = await Consulta.findByPk(req.params.id);

        const pacientes = await Paciente.findAll();
        const medicos = await Medico.findAll();

        res.render("consultas/editar", {
            consulta,
            pacientes,
            medicos
        });
    },

    async editar(req, res) {

        const { data, horario, observacao, PacienteId, MedicoId } = req.body;

        await Consulta.update(
            {
                data,
                horario,
                observacao,
                PacienteId,
                MedicoId
            },
            {
                where: {
                    id: req.params.id
                }
            }
        );

        res.redirect("/consultas");
    },

    async excluir(req, res) {

        await Consulta.destroy({
            where: {
                id: req.params.id
            }
        });

        res.redirect("/consultas");
    }

};