import Head from 'next/head';
import { GetServerSideProps } from 'next';

import ChallengeBox from '../components/ChallengeBox';

import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';

import { GlobalStyle } from '../styles/global';
import Container from './styles';
import { ChallengesProvider } from '../contexts/ChallengesContext';

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
      <Container>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <GlobalStyle />
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div style={{ marginBottom: '1rem' }}>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
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
