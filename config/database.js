const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database/clinica.sqlite"
});

module.exports = sequelize;