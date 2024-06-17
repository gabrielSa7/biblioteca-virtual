const express = require('express');
const sequelize = require('./config/database'); 
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const loanRoutes = require('./routes/loanRoutes');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', bookRoutes);
app.use('/api', loanRoutes);
app.use(cors());
const Book = require('./models/book'); // Certifique-se de que o caminho está correto para o modelo do livro

sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch(err => console.error('Erro ao sincronizar com o banco de dados:', err));
