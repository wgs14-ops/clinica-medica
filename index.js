const express = require("express");
const { engine } = require("express-handlebars");
const sequelize = require("./config/database");
const Paciente = require("./models/Paciente");
const pacienteRoutes = require("./routes/pacienteRoutes");

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/pacientes", pacienteRoutes);

app.get("/", (req, res) => {
    res.send("Sistema Clínica Médica funcionando!");
});

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