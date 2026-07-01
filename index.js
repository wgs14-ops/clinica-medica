 const express = require("express");
const { engine } = require("express-handlebars");
const sequelize = require("./config/database");

require("./models/Paciente");
require("./models/Medico");
require("./models/Consulta");

const pacienteRoutes = require("./routes/pacienteRoutes");
const medicoRoutes = require("./routes/medicoRoutes");
const consultaRoutes = require("./routes/consultaRoutes");

const app = express();

// Configuração do Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Rotas
app.use("/pacientes", pacienteRoutes);
app.use("/medicos", medicoRoutes);
app.use("/consultas", consultaRoutes);

// Página inicial
app.get("/", (req, res) => {
    res.render("home");
});

// Conexão com o banco e inicialização do servidor
sequelize.sync()
    .then(() => {
        console.log("Banco conectado!");

        app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000");
        });
    })
    .catch((erro) => {
        console.log("Erro ao conectar ao banco:", erro);
    });