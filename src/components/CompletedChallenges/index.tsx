import React, { useContext } from 'react';
import styled from 'styled-components';
import { ChallengesContext } from '../../contexts/ChallengesContext';

export default function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 3.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid #d7d8da;

  font-weight: 500;

  span:first-child {
    font-size: 1.25rem;
  }

  span:last-child {
    font-size: 1.5rem;
  }
`;
