import React from 'react';

import { Container } from './styles';

const Profile: React.FC = () => {
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
          Level 1
        </p>
      </div>
    </Container>
  );
};

export default Profile;
