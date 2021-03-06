import Head from 'next/head';
import { GetServerSideProps } from 'next';

import ChallengeBox from '../components/ChallengeBox';

import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import Layout from '../components/Layout';
import styled from 'styled-components';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({
  level,
  currentExperience,
  challengesCompleted,
}: HomeProps) {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <Layout>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <HomeSection>
            <div style={{ marginBottom: '1rem' }}>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <ChallengeBox />
            </div>
          </HomeSection>
        </CountdownProvider>
      </Layout>
    </ChallengesProvider>
  );
}

const getServerSideProps: GetServerSideProps = async ctx => {
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

const HomeSection = styled.section`
  flex: 1;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5.25rem;
  align-content: center;

  @media (max-width: 768px) {
    margin-top: 3rem;
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
  }
`;
