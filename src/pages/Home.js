import React from 'react';
import styled from 'styled-components';
import HomeImage from '../imagens/img1.png'; // Certifique-se de que o caminho está correto
import LoginOrRegister from '../components/LoginOrRegister';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
`;

const Image = styled.img`
  max-width: 50%; /* Diminui a largura máxima da imagem */
  height: auto;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MessageContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 1.2em; /* Define o tamanho da fonte */
  color: #333;
`;

const Emoji = styled.span`
  font-size: 1.5em;
  margin-left: 10px;
`;

const Home = () => {
  return (
    <Container>
      <MessageContainer>
        <Message>Seja bem-vindo a Biblioteca virtual GS !<Emoji role="img" aria-label="Saudações">🌟</Emoji></Message>
        <Message>Acesse nosso acervo de livros e faça seus empréstimos online.</Message>
      </MessageContainer>
      <Image src={HomeImage} alt="Biblioteca Virtual" />
      <LoginOrRegister /> {/* Adiciona o componente de escolha */}
    </Container>
  );
};

export default Home;
