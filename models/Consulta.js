const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Paciente = require("./Paciente");
const Medico = require("./Medico");

const Consulta = sequelize.define("Consulta", {
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  horario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  observacao: {
    type: DataTypes.TEXT,
  },
});

Paciente.hasMany(Consulta);
Consulta.belongsTo(Paciente);

Medico.hasMany(Consulta);
Consulta.belongsTo(Medico);

module.exports = Consulta;