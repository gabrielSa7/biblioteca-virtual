import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FormContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #2196F3;
  color: white;
  border: none;
  cursor: pointer;
`;

const ResultList = styled.div`
  margin-top: 20px;
`;

const BookItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const SearchBooks = ({ books }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredBooks = books.filter(book => 
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase()) ||
      book.category.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredBooks);
  };

  return (
    <FormContainer>
      <h1>Buscar Livros</h1>
      <Form onSubmit={handleSearch}>
        <Input
          type="text"
          placeholder="Buscar por título, autor ou categoria"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">Buscar</Button>
      </Form>
      <ResultList>
        {results.map(book => (
          <BookItem key={book.id}>
            <p>Título: {book.title}</p>
            <p>Autor: {book.author}</p>
            <p>Categoria: {book.category}</p>
            <p>Ano de Publicação: {book.publicationYear}</p>
            <p>Editora: {book.publisher}</p>
            <Link to={`/book/${book.id}`}>Ver Detalhes</Link>
          </BookItem>
        ))}
      </ResultList>
    </FormContainer>
  );
};

export default SearchBooks;
