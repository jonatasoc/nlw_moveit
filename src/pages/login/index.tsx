import React from 'react';
import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';

const Login: React.FC = () => {
  return (
    <Container>
      <img src="/simbolo.svg" alt="Simbolo" />
      <div>
        <img src="/logo-white.svg" alt="Move.it" />
        <p>Bem-vindo</p>
        <div>
          <img src="/github.svg" alt="Github" />
          <p>Faça login com seu Github para começar</p>
        </div>
        <div>
          <Input>
            <input type="text" placeholder="Digite seu username"></input>
          </Input>
          <Button>
            <FiArrowRight />
          </Button>
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
    > img {
      margin-bottom: 10rem;
    }

    > p {
      font-weight: 600;
      font-size: 2rem;
      color: #fff;
    }

    > div {
      display: flex;
      align-items: center;
      margin-top: 24px;
      margin-bottom: 40px;

      img {
        margin-right: 24px;
      }

      p {
        font-size: 1rem;
        font-weight: 500;
        color: #b2b9ff;
        width: 60%;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: initial;
    height: auto;
    width: 95%;

    > img {
      margin-left: 0;
    }
  }
`;

const Input = styled.div`
  background: linear-gradient(90deg, #4953b8 0%, rgba(73, 83, 184, 0.2) 100%);
  border-radius: 5px 0px 0px 5px;
  padding: 1.5rem;
  display: flex;
  align-items: center;

  input {
    background: transparent;
    border: 0;
    flex: 1;
    color: #fff;
    /* padding: 10px; */
    font-weight: 500;
    font-size: 20px;
    line-height: 34px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #b2b9ff;
    }
  }
`;

const Button = styled.div`
  background: #4953b8;
  border-radius: 0px 5px 5px 0px;
  svg {
    color: #fff;
    font-size: 2rem;
    line-height: 34px;
  }
`;
