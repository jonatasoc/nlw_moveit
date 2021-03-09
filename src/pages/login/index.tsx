import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';

// import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <img src="/simbolo.svg" alt="Simbolo" />
      <div>
        <img src="/logo-white.svg" alt="Move.it" />
        <p>Bem-vindo</p>
        <div>
          <img src="/github.svg" alt="Github" />
          <input type="text" placeholder="Digite seu username"></input>
        </div>
      </div>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  background: #5965e0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;

  > img {
    margin-left: -25%;
  }

  > div {
  }
`;
