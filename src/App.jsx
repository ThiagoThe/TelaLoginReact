import React, { useState } from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }
`;

const Titulo = styled.h3`
  color: #4caf50;
  margin-bottom: 20px;
  font-family: "Roboto", sans-serif;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode colocar a lógica para enviar os dados de login para o servidor
    console.log(`Usuário: ${username} Senha: ${password}`);
  };

  return (
    <LoginContainer>
      <Titulo>Faça seu Login</Titulo>
      <LoginForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome de usuário"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit">Enviar</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
