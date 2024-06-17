import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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

const AddLoan = ({ addLoan }) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [bookId, setBookId] = useState('');
  const [loanDate, setLoanDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addLoan({ userId, bookId, loanDate, returnDate });
    navigate('/loans');
  };

  return (
    <FormContainer>
      <h1>Registrar Empréstimo</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="ID do Usuário"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Input
          type="text"
          placeholder="ID do Livro"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
        />
        <Input
          type="date"
          placeholder="Data de Empréstimo"
          value={loanDate}
          onChange={(e) => setLoanDate(e.target.value)}
        />
        <Input
          type="date"
          placeholder="Data de Devolução"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
        <Button type="submit">Registrar</Button>
      </Form>
    </FormContainer>
  );
};

export default AddLoan;
