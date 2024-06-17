import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

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

const EditBook = ({ books, updateBook }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find(b => b.id === parseInt(id));
  
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [isbn, setIsbn] = useState(book.isbn);
  const [publicationYear, setPublicationYear] = useState(book.publicationYear);
  const [publisher, setPublisher] = useState(book.publisher);
  const [category, setCategory] = useState(book.category);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook({ id: book.id, title, author, isbn, publicationYear, publisher, category });
    navigate('/books');
  };

  return (
    <FormContainer>
      <h1>Editar Livro</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Autor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Input
          type="text"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Ano de Publicação"
          value={publicationYear}
          onChange={(e) => setPublicationYear(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Editora"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Button type="submit">Salvar Alterações</Button>
      </Form>
    </FormContainer>
  );
};

export default EditBook;

 
