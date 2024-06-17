const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Certifique-se de que o caminho está correto

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'titulo',
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'autor',
  },
  isbn: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  publicationYear: {
    type: DataTypes.INTEGER,
    field: 'ano_publicacao',
  },
  publisher: {
    type: DataTypes.STRING,
    field: 'editora',
  },
  category: {
    type: DataTypes.STRING,
    field: 'categoria',
  },
}, {
  tableName: 'books',
  timestamps: false,
});

module.exports = Book;
