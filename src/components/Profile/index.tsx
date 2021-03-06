import React, { useContext } from 'react';
import styled from 'styled-components';
import { ChallengesContext } from '../../contexts/ChallengesContext';

export default function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <Container>
      <img
        src="https://github.com/jonatasoc.png"
        alt="Jonatas de Oliveira Coelho"
      />
      <div>
        <strong>Jonatas de Oliveira</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

  div {
    margin-left: 1.5rem;

    strong {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--title);
    }

    p {
      display: flex;
      align-items: baseline;
      font-size: 1rem;
      margin-top: 0.5rem;

      img {
        margin-right: 0.5rem;
      }
    }
  }
`;
