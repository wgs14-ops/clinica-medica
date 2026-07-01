const Paciente = require("../models/Paciente");

module.exports = {

    async listar(req, res) {
        const pacientes = await Paciente.findAll();
        res.render("pacientes/index", { pacientes });
    },

    formularioCadastro(req, res) {
        res.render("pacientes/cadastrar");
    },

    async cadastrar(req, res) {
        const { nome, cpf, telefone, email, dataNascimento } = req.body;

        await Paciente.create({
            nome,
            cpf,
            telefone,
            email,
            dataNascimento
        });

        res.redirect("/pacientes");
    },

    async formularioEditar(req, res) {
        const paciente = await Paciente.findByPk(req.params.id);

        res.render("pacientes/editar", {
            paciente
        });
    },

    async editar(req, res) {

        const { nome, cpf, telefone, email, dataNascimento } = req.body;

        await Paciente.update(
            {
                nome,
                cpf,
                telefone,
                email,
                dataNascimento
            },
            {
                where: {
                    id: req.params.id
                }
            }
        );

        res.redirect("/pacientes");
    },

    async excluir(req, res) {

        await Paciente.destroy({
            where: {
                id: req.params.id
            }
        });

        res.redirect("/pacientes");
    }

};