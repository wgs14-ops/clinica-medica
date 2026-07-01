const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Medico = sequelize.define("Medico", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  especialidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  crm: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Medico;