import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-color: #007bff; /* Cor azul */
  color: #ffffff; /* Texto branco */
  border: 1px solid #007bff; /* Borda azul */
  border-radius: 10px; /* Borda arredondada */
  padding: 20px;
  text-align: center;
  margin-top: 20px;
`;

const Message = styled.p`
  font-size: 1.2em;
`;

const LinkContainer = styled.div`
  margin-top: 10px;
`;

const StyledLink = styled(Link)`
  color: #ffffff; /* Texto branco */
  text-decoration: none;
  margin-left: 10px;
`;

const LoginButton = styled.button`
  background-color: #ffffff; /* Fundo branco */
  color: #007bff; /* Texto azul */
  border: none;
  border-radius: 20px; /* Botão arredondado */
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0; /* Fundo cinza claro ao passar o mouse */
  }
`;

const LoginOrRegister = () => {
  return (
    <Container>
      <Message>
        <strong>Para continuar, faça o login.</strong>
      </Message>
      <LoginButton>
        <Link to="/login" style={{ color: '#007bff', textDecoration: 'none' }}>
          Login
        </Link>
      </LoginButton>
      
    </Container>
  );
};

export default LoginOrRegister;
