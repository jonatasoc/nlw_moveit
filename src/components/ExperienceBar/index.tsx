import React, { useContext } from 'react';
import styled from 'styled-components';
import { ChallengesContext } from '../../contexts/ChallengesContext';

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext,
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: var(--gray-line);
    margin: 0 1.5rem;
    position: relative;
  }

  > div > div {
    height: 4px;
    border-radius: 4px;
    background: var(--green);
  }

  > div > span {
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
  }
`;
