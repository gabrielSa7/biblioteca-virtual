const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'nome',
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'senha',
  },
  address: {
    type: DataTypes.STRING,
    field: 'endereco',
  },
  phone: {
    type: DataTypes.STRING,
    field: 'telefone',
  },
}, {
  tableName: 'users',
  timestamps: false,
});

module.exports = User;
