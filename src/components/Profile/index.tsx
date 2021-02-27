import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container } from './styles';

const Profile: React.FC = () => {
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
};

export default Profile;
