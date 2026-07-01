const Medico = require("../models/Medico");

module.exports = {

    async listar(req, res) {
        const medicos = await Medico.findAll();

        res.render("medicos/index", {
            medicos
        });
    },

    formularioCadastro(req, res) {
        res.render("medicos/cadastrar");
    },

    async cadastrar(req, res) {

        const { nome, especialidade, crm, telefone } = req.body;

        await Medico.create({
            nome,
            especialidade,
            crm,
            telefone
        });

        res.redirect("/medicos");
    },

    async formularioEditar(req, res) {

        const medico = await Medico.findByPk(req.params.id);

        res.render("medicos/editar", {
            medico
        });
    },

    async editar(req, res) {

        const { nome, especialidade, crm, telefone } = req.body;

        await Medico.update(
            {
                nome,
                especialidade,
                crm,
                telefone
            },
            {
                where: {
                    id: req.params.id
                }
            }
        );

        res.redirect("/medicos");
    },

    async excluir(req, res) {

        await Medico.destroy({
            where: {
                id: req.params.id
            }
        });

        res.redirect("/medicos");
    }

};