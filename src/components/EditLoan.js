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

const EditLoan = ({ loans, updateLoan }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const loan = loans.find(l => l.id === parseInt(id));

  const [userId, setUserId] = useState(loan.userId);
  const [bookId, setBookId] = useState(loan.bookId);
  const [loanDate, setLoanDate] = useState(loan.loanDate);
  const [returnDate, setReturnDate] = useState(loan.returnDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateLoan({ id: loan.id, userId, bookId, loanDate, returnDate });
    navigate('/loans');
  };

  return (
    <FormContainer>
      <h1>Editar Empréstimo</h1>
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
        <Button type="submit">Salvar Alterações</Button>
      </Form>
    </FormContainer>
  );
};

export default EditLoan;
