import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, ChallengeNotActive, ChallengeActive } from './styles';

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <Container>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button type="button" onClick={resetChallenge}>
              Falhei
            </button>
            <button type="button">Completei</button>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber desafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  );
};

export default ChallengeBox;
