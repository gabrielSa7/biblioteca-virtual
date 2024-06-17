import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ToggleButton = styled.button`
  margin-top: 10px;
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
`;

const Login = ({ addUser, users }) => {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(location.state?.isLogin ?? true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogin(location.state?.isLogin ?? true);
  }, [location.state]);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      alert('Login bem-sucedido!');
      navigate('/');
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !password || !email || !address || !phone) {
      alert('Todos os campos são obrigatórios!');
      return;
    }

    addUser({ username, password, email, address, phone });
    alert('Usuário registrado com sucesso!');
    setIsLogin(true);
  };

  return (
    <LoginContainer>
      <Form onSubmit={isLogin ? handleLogin : handleRegister}>
        <h2>{isLogin ? 'Login' : 'Registrar'}</h2>
        <Input
          type="text"
          placeholder="Nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isLogin && (
          <>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Endereço"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </>
        )}
        <Button type="submit">{isLogin ? 'Entrar' : 'Registrar'}</Button>
        <ToggleButton type="button" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Não tem uma conta? Registre-se' : 'Já tem uma conta? Faça login'}
        </ToggleButton>
      </Form>
    </LoginContainer>
  );
};

export default Login;
