import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListContainer = styled.div`
  padding: 20px;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const AddButton = styled(Link)`
  padding: 10px 20px;
  background-color: #2196F3;
  color: white;
  text-decoration: none;
  border-radius: 5px;
`;

const BookItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
`;

const BookList = ({ books }) => (
  <ListContainer>
    <ListHeader>
      <h1>Lista de Livros</h1>
      <AddButton to="/add-book">Adicionar Livro</AddButton>
    </ListHeader>
    {books.map(book => (
      <BookItem key={book.id}>
        <div>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </div>
        <div>
          <Link to={`/book/${book.id}`}>Detalhes</Link>
        </div>
      </BookItem>
    ))}
  </ListContainer>
);

export default BookList;
