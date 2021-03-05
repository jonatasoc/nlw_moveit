import { GetServerSideProps } from 'next';
import React from 'react';
import { ChallengesProvider } from '../../contexts/ChallengesContext';

import { Container, MainContent } from './styles';
import Sidebar from '../../components/Sidebar';
import Head from 'next/head';

interface LeaderboardProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Leaderboard({
  level,
  currentExperience,
  challengesCompleted,
}: LeaderboardProps) {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <Container>
        <Sidebar />
        <MainContent>
          <Head>
            <title>LeadBoard | move.it</title>
          </Head>
        </MainContent>
      </Container>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const user = {
    level: 1,
    currenteExperience: 50,
  };

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
