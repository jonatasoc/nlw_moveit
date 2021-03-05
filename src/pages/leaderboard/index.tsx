import { GetServerSideProps } from 'next';
import React from 'react';
import { ChallengesProvider } from '../../contexts/ChallengesContext';

import { Container, MainContent } from './styles';
import Sidebar from '../../components/Sidebar';
import Head from 'next/head';
import Layout from '../../components/Layout';

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
    <Layout>
      <ChallengesProvider
        level={level}
        currentExperience={currentExperience}
        challengesCompleted={challengesCompleted}
      >
        <Container>
          <Sidebar />
          <MainContent>
            <Head>
              <title>Leadboard | move.it</title>
            </Head>
            <section>
              <h1>Leadboarder</h1>
              <div>
                <p>POSIÇÃO</p>
                <p>USUÁRIO</p>
                <p>DESAFIOS</p>
                <p>EXPERÊNCIA</p>
              </div>
              <div>
                <p>1</p>
                <div></div>
              </div>
            </section>
          </MainContent>
        </Container>
      </ChallengesProvider>
    </Layout>
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
