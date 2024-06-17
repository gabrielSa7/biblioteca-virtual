const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Book = require('./book');

const Loan = sequelize.define('Loan', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,                                     
      key: 'id',
    },
    allowNull: false,
    field: 'id_usuario',
  },
  bookId: {
    type: DataTypes.INTEGER,
    references: {
      model: Book,
      key: 'id',
    },
    allowNull: false,
    field: 'id_livro',
  },
  loanDate: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'data_emprestimo',
  },
  returnDate: {
    type: DataTypes.DATE,
    field: 'data_devolucao',
  },
}, {
  tableName: 'loans',
  timestamps: false,
});

module.exports = Loan;
