const sequelize = require('./config/database');
const Book = require('./models/book');

const books = [
  { title: 'Clean Code', author: 'Robert C. Martin', isbn: '9780132350884', publicationYear: 2008, publisher: 'Prentice Hall', category: 'Programação' },
  { title: 'Estruturas de Dados e Algoritmos em JavaScript', author: 'Loiane Groner', isbn: '9788575227176', publicationYear: 2014, publisher: 'Novatec', category: 'Programação' },
  { title: 'Aprenda Python 3.0 com Facilidade', author: 'Rui Maciel', isbn: '9788566258011', publicationYear: 2019, publisher: 'Casa do Código', category: 'Programação' },
  { title: 'JavaScript: O Guia Definitivo', author: 'David Flanagan', isbn: '9788575223147', publicationYear: 2011, publisher: 'Novatec', category: 'Programação' },
  { title: 'Algoritmos para Viver: Como os Computadores Aprendem a Decidir', author: 'Brian Christian, Tom Griffiths', isbn: '9788551004282', publicationYear: 2017, publisher: 'Intrínseca', category: 'Programação' },
  { title: 'Padrões de Projetos: Soluções Reutilizáveis de Software Orientado a Objetos', author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides', isbn: '9788573076103', publicationYear: 1994, publisher: 'Bookman', category: 'Programação' },
  { title: 'A Linguagem de Programação C', author: 'Brian W. Kernighan, Dennis M. Ritchie', isbn: '9788521611786', publicationYear: 1988, publisher: 'LTC', category: 'Programação' },
  { title: 'O Livro de Ouro da História da Programação', author: 'Edsger W. Dijkstra', isbn: '9788598119012', publicationYear: 2004, publisher: 'Campus', category: 'Programação' },
  { title: 'Python Fluente: Programação Clara, Concisa e Eficaz', author: 'Luciano Ramalho', isbn: '9788575224625', publicationYear: 2015, publisher: 'Novatec', category: 'Programação' },
  { title: 'Introdução à Programação com Python: Algoritmos e Lógica de Programação Para Iniciantes', author: 'Nilo Ney Coutinho Menezes', isbn: '9788550804623', publicationYear: 2014, publisher: 'Novatec', category: 'Programação' },
  { title: 'Use a Cabeça! JavaScript', author: 'Eric Freeman, Elisabeth Robson', isbn: '9788576087390', publicationYear: 2006, publisher: 'Alta Books', category: 'Programação' },
  { title: 'O Código da Vinci', author: 'Dan Brown', isbn: '9788532523294', publicationYear: 2003, publisher: 'Sextante', category: 'Ficção' },
  { title: 'A Menina que Roubava Livros', author: 'Markus Zusak', isbn: '9788580571220', publicationYear: 2005, publisher: 'Intrínseca', category: 'Ficção' },
  { title: 'O Pequeno Príncipe', author: 'Antoine de Saint-Exupéry', isbn: '9788571102365', publicationYear: 1943, publisher: 'Agir', category: 'Infantil' },
  { title: 'Dom Quixote de la Mancha', author: 'Miguel de Cervantes', isbn: '9789725619063', publicationYear: 1605, publisher: 'Relógio d\'Água', category: 'Ficção' },
  { title: 'A Metamorfose', author: 'Franz Kafka', isbn: '9788537804866', publicationYear: 1915, publisher: 'Companhia das Letras', category: 'Ficção' },
  { title: 'Memórias Póstumas de Brás Cubas', author: 'Machado de Assis', isbn: '9788533622566', publicationYear: 1881, publisher: 'Martin Claret', category: 'Ficção' },
  { title: 'Capitães da Areia', author: 'Jorge Amado', isbn: '9788535910005', publicationYear: 1937, publisher: 'Companhia das Letras', category: 'Ficção' },
  { title: 'O Cortiço', author: 'Aluísio Azevedo', isbn: '9788535920363', publicationYear: 1890, publisher: 'Companhia das Letras', category: 'Ficção' },
  { title: 'O Auto da Compadecida', author: 'Ariano Suassuna', isbn: '9788520931745', publicationYear: 1955, publisher: 'Nova Fronteira', category: 'Ficção' },
];

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    await Book.bulkCreate(books);
    console.log('Banco de dados populado com sucesso!');
    process.exit();
  } catch (error) {
    console.error('Erro ao popular o banco de dados:', error);
    process.exit(1);
  }
};

seedDatabase();
